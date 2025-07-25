"use client";

import { useEffect, useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import axios from "@/lib/axios";
import { PasswordForm } from "./password-form";

const profileFormSchema = z.object({
  displayName: z.string().min(2, {
    message: "Display name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      displayName: "John Doe",
      email: "johndoe@me.com",
      bio: "Frontend developer and UI/UX enthusiast.",
      website: "https://johndoe.com",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/getUser", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setUserData(response.data.data);
      } catch (err: any) {
        console.log("Error fetching user data:", err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userData) {
      form.reset({
        displayName: userData.name,
        email: userData.email,
      });
    }
  }, [userData, form]);

  async function onSubmit(data: ProfileFormValues) {
    if (!selectedFile) {
      console.log("No image selected. Please select an image to update your profile.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.displayName);
      formData.append("email", data.email);
      formData.append("image", selectedFile);

      const res = await axios.put(
        "/api/v1/updateUser",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200) {
        setUserData(res.data.data);
        setSelectedFile(null);
        setPreviewUrl(null);
      }
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src={previewUrl || userData?.profileImage || "/placeholder.svg?height=128&width=128"}
                  alt="User"
                />
                <AvatarFallback>
                  {userData?.name?.slice(0, 2).toUpperCase() || "JD"}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Avatar
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    setSelectedFile(file);
                    setPreviewUrl(URL.createObjectURL(file));
                  }
                }}
              />
            </div>

            <div className="flex-1">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Display Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Your email address is used for notifications.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Update Profile
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>
      <PasswordForm />
    </div>
  );
}