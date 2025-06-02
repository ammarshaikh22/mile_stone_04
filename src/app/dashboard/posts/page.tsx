import { PostsList } from "@/components/posts-list"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"

export default function PostsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <Tabs defaultValue="published">
        <TabsList className="mb-4">
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="published">
          <PostsList status="published" />
        </TabsContent>
        <TabsContent value="drafts">
          <PostsList status="draft" />
        </TabsContent>
        <TabsContent value="scheduled">
          <PostsList status="scheduled" />
        </TabsContent>
        <TabsContent value="pending">
          <PostsList status="pending" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
