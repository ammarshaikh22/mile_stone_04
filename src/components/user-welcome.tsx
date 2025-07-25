import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function UserWelcome({ user }: any) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user?.profileImage} alt="User" />
            <AvatarFallback>{user?.profileImage ? user.profileImage : user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
            <p className="text-sm text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
