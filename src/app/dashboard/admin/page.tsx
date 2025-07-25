"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Users, FileText, Edit, Trash2, Plus, Search, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinDate: "2024-01-15",
    blogCount: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinDate: "2024-02-20",
    blogCount: 3,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "inactive",
    joinDate: "2024-01-10",
    blogCount: 8,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "active",
    joinDate: "2024-03-05",
    blogCount: 2,
  },
]

const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    status: "published",
    date: "2024-03-15",
    views: 1250,
    category: "Technology",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    author: "Jane Smith",
    status: "draft",
    date: "2024-03-14",
    views: 0,
    category: "Technology",
  },
  {
    id: 3,
    title: "Design Principles for Modern Apps",
    author: "Mike Johnson",
    status: "published",
    date: "2024-03-13",
    views: 890,
    category: "Design",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    author: "John Doe",
    status: "published",
    date: "2024-03-12",
    views: 2100,
    category: "Technology",
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox",
    author: "Sarah Wilson",
    status: "published",
    date: "2024-03-11",
    views: 1560,
    category: "CSS",
  },
]

export default function AdminPanel() {
  const [users, setUsers] = useState(mockUsers)
  const [blogs, setBlogs] = useState(mockBlogs)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingUser, setEditingUser] = useState<any>(null)
  const [editingBlog, setEditingBlog] = useState<any>(null)

  const totalUsers = users.length
  const totalBlogs = blogs.length
  const activeUsers = users.filter((user) => user.status === "active").length
  const publishedBlogs = blogs.filter((blog) => blog.status === "published").length

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  const handleDeleteBlog = (blogId: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogId))
  }

  const handleEditUser = (user: any) => {
    setEditingUser(user)
  }

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog)
  }

  const handleSaveUser = (updatedUser: any) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)))
    setEditingUser(null)
  }

  const handleSaveBlog = (updatedBlog: any) => {
    setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)))
    setEditingBlog(null)
  }

  return (
    <div className="min-h-screen    ">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">D</span>
            </div>
            <span className="text-white font-semibold text-lg">Dashboard</span>
          </div>

          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5" />
              Posts
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              Profile
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-white bg-slate-700 rounded-lg">
              <Users className="w-5 h-5" />
              Admin Panel
            </a>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">John Doe</div>
              <div className="text-slate-400 text-xs">john@example.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-slate-400">Manage users and their blog posts</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Total Users</CardTitle>
              <Users className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalUsers}</div>
              <p className="text-xs text-slate-400">{activeUsers} active users</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Total Blogs</CardTitle>
              <FileText className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalBlogs}</div>
              <p className="text-xs text-slate-400">{publishedBlogs} published</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Active Users</CardTitle>
              <Users className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{activeUsers}</div>
              <p className="text-xs text-slate-400">{((activeUsers / totalUsers) * 100).toFixed(1)}% of total</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Published Blogs</CardTitle>
              <FileText className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{publishedBlogs}</div>
              <p className="text-xs text-slate-400">{((publishedBlogs / totalBlogs) * 100).toFixed(1)}% published</p>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search users or blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Tabs for Users and Blogs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="users" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Users Management
            </TabsTrigger>
            <TabsTrigger value="blogs" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Blog Management
            </TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">Users</CardTitle>
                    <CardDescription className="text-slate-400">Manage all registered users</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">User</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Join Date</TableHead>
                      <TableHead className="text-slate-300">Blogs</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id} className="border-slate-700">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="bg-slate-600 text-white">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-white">{user.name}</div>
                              <div className="text-sm text-slate-400">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell className="text-slate-300">{user.joinDate}</TableCell>
                        <TableCell className="text-slate-300">{user.blogCount}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                              <DropdownMenuItem
                                onClick={() => handleEditUser(user)}
                                className="text-slate-300 hover:text-white hover:bg-slate-700"
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="text-red-400 hover:text-red-300 hover:bg-slate-700"
                                  >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-slate-800 border-slate-700">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="text-white">Delete User</AlertDialogTitle>
                                    <AlertDialogDescription className="text-slate-400">
                                      Are you sure you want to delete {user.name}? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteUser(user.id)}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blogs Tab */}
          <TabsContent value="blogs">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">Blog Posts</CardTitle>
                    <CardDescription className="text-slate-400">Manage all blog posts</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Blog
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Title</TableHead>
                      <TableHead className="text-slate-300">Author</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Views</TableHead>
                      <TableHead className="text-slate-300">Date</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBlogs.map((blog) => (
                      <TableRow key={blog.id} className="border-slate-700">
                        <TableCell>
                          <div>
                            <div className="font-medium text-white">{blog.title}</div>
                            <div className="text-sm text-slate-400">{blog.category}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{blog.author}</TableCell>
                        <TableCell>
                          <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                        </TableCell>
                        <TableCell className="text-slate-300">{blog.views.toLocaleString()}</TableCell>
                        <TableCell className="text-slate-300">{blog.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                              <DropdownMenuItem
                                onClick={() => handleEditBlog(blog)}
                                className="text-slate-300 hover:text-white hover:bg-slate-700"
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="text-red-400 hover:text-red-300 hover:bg-slate-700"
                                  >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-slate-800 border-slate-700">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="text-white">Delete Blog Post</AlertDialogTitle>
                                    <AlertDialogDescription className="text-slate-400">
                                      Are you sure you want to delete "{blog.title}"? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteBlog(blog.id)}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit User Dialog */}
        <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Edit User</DialogTitle>
              <DialogDescription className="text-slate-400">
                Make changes to the user's information here.
              </DialogDescription>
            </DialogHeader>
            {editingUser && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-slate-300">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    className="col-span-3 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right text-slate-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    className="col-span-3 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => handleSaveUser(editingUser)} className="bg-blue-600 hover:bg-blue-700">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Blog Dialog */}
        <Dialog open={!!editingBlog} onOpenChange={() => setEditingBlog(null)}>
          <DialogContent className="bg-slate-800 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Edit Blog Post</DialogTitle>
              <DialogDescription className="text-slate-400">Make changes to the blog post here.</DialogDescription>
            </DialogHeader>
            {editingBlog && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right text-slate-300">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={editingBlog.title}
                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="col-span-3 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right text-slate-300">
                    Category
                  </Label>
                  <Input
                    id="category"
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="col-span-3 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => handleSaveBlog(editingBlog)} className="bg-blue-600 hover:bg-blue-700">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
