import { PostsList } from "@/components/posts-list"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent} from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function PostsPage() {
  return (
    <div className="container py-6 px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
        <Link href={"/create"}>
          Add New Post
        </Link>
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
