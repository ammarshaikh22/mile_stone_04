"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import axios from "@/lib/axios";
import { Edit, Eye, MoreVertical, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export function PostsList() {
  const [userData, setUserData] = useState<any>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [formData, setFormData] = useState<any>(null);

  // Fetch user data including blogs on component mount
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

  // Set form data for editing when drawer opens
  useEffect(() => {
    if (isDrawerOpen && blogToEdit && userData) {
      const blog = userData.blogs.find((b: any) => b._id === blogToEdit);
      if (blog) {
        setFormData(blog);
      }
    }
  }, [isDrawerOpen, blogToEdit, userData]);

  // Delete blog function
  const deleteBlog = async (id: any) => {
    try {
      await axios.delete(`/api/v2/deleteBlog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
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
      setUserData((prev: any) => ({
        ...prev,
        blogs: prev.blogs.filter((blog: any) => blog._id !== id),
      }));
    } catch (error: any) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog", {
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

  // Handle blog update
  const handleUpdate = async () => {
    const form = document.querySelector("#edit-form") as HTMLFormElement;
    if (!form) return;

    const formDataObj = new FormData(form);
    const updatedData = {
      title: formDataObj.get("title") as string,
      description: formDataObj.get("description") as string,
      category: (formDataObj.get("category") as string)
        .split(",")
        .map((cat) => cat.trim()),
    };

    try {
      const res = await axios.put(`/api/v2/updateBlog/${blogToEdit}`, updatedData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      toast.success("Blog updated successfully");
      const updatedBlog = res.data.data;
      setUserData((prev: any) => ({
        ...prev,
        blogs: prev.blogs.map((blog: any) =>
          blog._id === updatedBlog?._id ? updatedBlog : blog
        ),
      }));
      setIsDrawerOpen(false);
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="grid gap-4">
      <ToastContainer />
      {userData?.blogs.map((post: any) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="line-clamp-3 w-[700px] mt-4">
                  {post.description}
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                      setBlogToEdit(post._id);
                      setIsDrawerOpen(true);
                    }}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/blogs/${post._id}`} className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setBlogToDelete(post);
                      setIsDialogOpen(true);
                    }}
                    className="text-destructive"
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Created: {post.createdAt.slice(0, 10)}</span>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the blog "{blogToDelete?.title}"?
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

      {/* Edit Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Blog</DrawerTitle>
            <DrawerDescription>Update the blog details below.</DrawerDescription>
          </DrawerHeader>
          {formData ? (
            <form id="edit-form" className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={formData.title}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#111827] text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  defaultValue={formData.description}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#111827] text-white"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category (comma-separated)</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={formData.category.join(", ")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-[#111827] text-white"
                />
              </div>
            </form>
          ) : (
            <p className="p-4">Loading...</p>
          )}
          <DrawerFooter>
            <Button onClick={handleUpdate} disabled={!formData}>
              Update
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}