import { PostsList } from "@/components/posts-list"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"

export default function PostsPage() {
  return (
    <div className="container py-6 px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>
      <Tabs defaultValue="published">
        <TabsContent value="published">
          <PostsList  />
        </TabsContent>
        <TabsContent value="drafts">
          <PostsList />
        </TabsContent>
        <TabsContent value="scheduled">
          <PostsList />
        </TabsContent>
        <TabsContent value="pending">
          <PostsList  />
        </TabsContent>
      </Tabs>
    </div>
  )
}
