import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function UserWelcome() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">You have 3 pending posts and 2 scheduled posts for this week.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
