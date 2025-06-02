import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Eye, MessageSquare, Download, ChevronDown } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className=" text-white p-4 md:p-6">
      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <div className="rounded-[20px]  bg-[#111827] p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="bg-[#111827]  flex items-center justify-center">
              <Image
                src="/banner-bg.webp"
                width={200}
                height={200}
                alt="Gallery icon"
                className=" rounded-[20px]"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Gallery</h1>
              <p className="text-base text-zinc-400 mt-2">
                Explore our gallery image category, a visual haven for the things together a curated collection of
                experiences and more.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-[#111827]  text-zinc-400 ">
              Other categories <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-[#111827]  text-zinc-400 ">
              Other tags <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="bg-[#111827]  text-zinc-400 ">
            Newest to oldest <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="bg-[#111827] rounded-[30px]  overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image}
                  width={400}
                  height={250}
                  alt='img'
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 p-2">
                 
                </div>
              </div>
              <CardContent className="p-3">
                <div className="flex gap-2 mb-2">
                  {post.categories.map((category, i) => (
                    <Badge key={i} variant="outline" className="bg-transparent border-[#1D2432] text-zinc-400 text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-zinc-400">{post.author.name}</span>
                  <span className="text-xs text-zinc-600">•</span>
                  <span className="text-xs text-zinc-600">{post.date}</span>
                </div>
                <h3 className="font-medium text-sm">{post.title}</h3>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500">{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500">{post.comments}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-zinc-400 hover:text-white "
                >
                  <Download className="h-3 w-3 mr-1" /> Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const posts = [
  {
    title: "How to capture stunning beach photography with perfect lighting",
    image: "/blog1.webp",
    categories: ["Gallery", "Beach"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 45,
    comments: 12,
    downloads: 8,
  },
  {
    title: "Mountain views and clouds: my journey through the highest peaks",
    image: "/blog2.webp",
    categories: ["Gallery", "Nature"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 67,
    comments: 8,
    downloads: 12,
  },
  {
    title: "Beachfront sunset photography: how to capture the perfect moment",
    image: "/blog3.webp",
    categories: ["Gallery", "Beach"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 89,
    comments: 15,
    downloads: 23,
  },
  {
    title: "How to capture the vibrant colors of Mediterranean coastal towns",
    image: "/blog4.webp",
    categories: ["Gallery", "Travel"],
    author: { name: "jenny.wilson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 56,
    comments: 9,
    downloads: 14,
  },
  {
    title: "Underwater photography: essential gear and techniques for beginners",
    image: "/blog5.webp",
    categories: ["Gallery", "Underwater"],
    author: { name: "jenny.wilson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 34,
    comments: 5,
    downloads: 7,
  },
  {
    title: "Tropical island hopping with just a camera and backpack",
    image: "/blog6.webp",
    categories: ["Gallery", "Beach"],
    author: { name: "jenny.wilson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 78,
    comments: 11,
    downloads: 19,
  },
  {
    title: "How to shoot extreme snowboarding: capturing the thrill of the mountain",
    image: "/blog1.webp",
    categories: ["Gallery", "Extreme"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 42,
    comments: 6,
    downloads: 9,
  },
  {
    title: "Lighthouse adventures: documenting these maritime guardians",
    image: "/blog2.webp",
    categories: ["Gallery", "Adventure"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 51,
    comments: 8,
    downloads: 13,
  },
  {
    title: "Greek architectural imagery: capturing the Mediterranean essence",
    image: "/blog3.webp",
    categories: ["Gallery", "Travel"],
    author: { name: "t.anderson", avatar: "/placeholder.svg?height=40&width=40" },
    date: "Aug 14, 2023",
    views: 63,
    comments: 7,
    downloads: 15,
  },
]
