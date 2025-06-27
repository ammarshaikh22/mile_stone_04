"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronDown, CalendarDays, SquarePen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast, ToastContainer } from "react-toastify";

export default function GalleryPage() {
  const [data, setData] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<any>(null);
  useEffect(() => {
    const userData = localStorage.getItem("userDetails");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setCurrentUserId(parsedUser._id);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://ai-blogs.up.railway.app/api/v2/blogs`
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const deleteBlog = async (id: any) => {
    try {
      const res = await axios.delete(
        `https://ai-blogs.up.railway.app/api/v2/deleteBlog/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );
      toast.success("Blog Deleted successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData(data.filter((blog: any) => blog._id !== id));
    } catch (error: any) {
      console.log(error);
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="text-white p-4 md:p-6">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <div className="rounded-[20px] bg-[#111827] p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="bg-[#111827] flex items-center justify-center">
              <Image
                src="/banner-bg.webp"
                width={200}
                height={200}
                alt="Gallery icon"
                className="rounded-[20px]"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Gallery</h1>
              <p className="text-base text-zinc-400 mt-2">
                Explore our gallery image category, a visual haven for the
                things together a curated collection of experiences and more.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-[#111827] text-zinc-400"
            >
              Other categories <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-[#111827] text-zinc-400"
            >
              Other tags <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#111827] text-zinc-400"
          >
            Newest to oldest <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post: any, index) => (
            <Card
              className="bg-[#111827] rounded-[30px] overflow-hidden"
              key={index}
            >
              <div className="relative">
                <Image
                  src={post.image}
                  width={400}
                  height={250}
                  alt="img"
                  className="w-full h-[260px] object-top object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 p-2"></div>
              </div>
              <CardContent className="p-3">
                <div className="flex gap-2 mb-2">
                  {post.category.map((category: any, i: number) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-transparent border-[#1D2432] text-zinc-400 text-xs"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-2 mb-2">
                  <CalendarDays size={15} />
                  <span className="text-xs text-white">{post.date}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col items-start px-2 gap-2 max-w-[75%]">
                    <div className="flex gap-2 items-center">
                      {post.user.profileImage ? (
                        <Image
                          src={post.user.profileImage}
                          alt="user"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <AccountCircleIcon />
                      )}
                      <h3 className="text-[13px]">{post.user.name}</h3>
                    </div>
                    <h3 className="font-medium line-clamp-1 text-sm">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-xs line-clamp-2 text-zinc-500">
                        {post.description}
                      </span>
                    </div>
                    <Link
                      key={index}
                      href={`/blogs/${post._id}`}
                      className="no-underline text-xs text-[]"
                    >
                      see more
                    </Link>
                  </div>
                  {currentUserId && post.user._id === currentUserId && (
                    <div className="mt-3 flex gap-4">
                      <SquarePen
                        size={20}
                        color="green"
                        className="cursor-pointer"
                      />
                      <Trash2
                        onClick={() => {
                          setBlogToDelete(post);
                          setIsDialogOpen(true);
                        }}
                        size={20}
                        color="red"
                        className="cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex items-center justify-between"></CardFooter>
            </Card>
          ))}
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete the blog "{blogToDelete?.title}
                "?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  deleteBlog(blogToDelete._id);
                  setIsDialogOpen(false);
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
