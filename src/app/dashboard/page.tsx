import { PostsOverview } from "@/components/posts-overview"
import { UserWelcome } from "@/components/user-welcome"

export default function Dashboard() {
  return (
    <div className="container py-6 space-y-8 px-8">
      <UserWelcome />
      <PostsOverview />
    </div>
  )
}
