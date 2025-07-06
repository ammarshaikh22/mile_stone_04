'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import axios from "@/lib/axios"
import { Edit, Eye, MoreVertical, Trash } from "lucide-react"
import { useEffect, useState } from "react"


export function PostsList() {
  const [userData, setUserData] = useState<any>();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
          const response = await axios.get('/api/v1/getUser', {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          });
          setUserData(response.data.data);
        } catch (err: any) {
          console.log("Error fetching user data:", err.message);
        }
      };
      fetchData();
    }, []);
  // Mock data for different post statuses
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js",
      date: "May 28, 2025",
      views: status === "published" ? 245 : undefined,
      scheduledDate: status === "scheduled" ? "June 5, 2025" : undefined,
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Tips and tricks for using Tailwind CSS effectively",
      date: "May 25, 2025",
      views: status === "published" ? 189 : undefined,
      scheduledDate: status === "scheduled" ? "June 8, 2025" : undefined,
    },
    {
      id: 3,
      title: "Building a User Dashboard",
      excerpt: "Step by step guide to create a responsive user dashboard",
      date: "May 20, 2025",
      views: status === "published" ? 312 : undefined,
      scheduledDate: status === "scheduled" ? "June 12, 2025" : undefined,
    },
  ]

  return (
    <div className="grid gap-4">
      {userData?.blogs.map((post:any) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="mt-1">{post.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Created: {post.createdAt.slice(0,10)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
