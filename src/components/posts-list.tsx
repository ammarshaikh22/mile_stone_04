import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, Eye, MoreVertical, Trash } from "lucide-react"

type PostStatus = "published" | "draft" | "scheduled" | "pending"

interface PostsListProps {
  status: PostStatus
}

export function PostsList({ status }: PostsListProps) {
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

  const getStatusBadge = (postStatus: PostStatus) => {
    switch (postStatus) {
      case "published":
        return <Badge variant="default">Published</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      case "scheduled":
        return <Badge variant="secondary">Scheduled</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return null
    }
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="mt-1">{post.excerpt}</CardDescription>
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
              <span>Created: {post.date}</span>
              {post.scheduledDate && <span>• Scheduled for: {post.scheduledDate}</span>}
              {post.views !== undefined && <span>• {post.views} views</span>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {getStatusBadge(status)}
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
