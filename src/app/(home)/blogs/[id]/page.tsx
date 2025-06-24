'use client'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
    Calendar,
} from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Bars } from "react-loader-spinner"
export default function BlogDetailPage({ params }: any) {
    const [data, setData] = useState<any>({});
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setLoader(true);
            try {
                const res = await axios.get(`https://ai-blogs.up.railway.app/api/v2/singleBlog/${params.id}`);
                setData(res.data.data)
            } catch (error) {
                setLoader(false);
                console.error("Error fetching blog data:", error);
            } finally {
                setLoader(false);
            }
        }
        getData()
    }, [])
    return (
        <div>
            {
                loader ?
                    <div className="flex items-center justify-center h-screen">
                        <Bars
                            height="80"
                            width="80"
                            color="#fff"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    :
                    <div className=" text-white">
                        {/* Hero Section */}
                        <div className="relative w-full h-[80vh] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C2231] z-10"></div>
                            <Image src={data.image || "/placeholder.svg"} alt={data.title} fill className="object-cover object-top" priority />
                            <div className="absolute bottom-0 left-0 right-0  z-20">
                                <div className="max-w-[80%] mx-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {data?.category?.map((cat: any, index: number) => (
                                            <Badge key={index} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                                {cat}
                                            </Badge>
                                        ))}
                                    </div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">{data.title}</h1>
                                    <div className="flex items-center gap-6 text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{data.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-[80%] mx-auto py-8">
                            {/* Author and Actions */}
                            {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-emerald-500">
                            <AvatarImage src={post.userImage || "/placeholder.svg"} alt={post.user} />
                            <AvatarFallback>{post.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-white">Written by</p>
                            <p className="text-emerald-400">{post.user}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300"
                        >
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300"
                        >
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save
                        </Button>
                    </div>
                </div> */}

                            {/* Main Content */}
                            <div className="prose prose-lg prose-invert max-w-none mb-12">
                                <p className="text-xl text-slate-300 leading-relaxed mb-8">{data.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 my-8">
                                    {data.tags?.map((tag: any, index: number) => (
                                        <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Sub Sections */}
                                <div className="space-y-12">
                                    {data.subSections?.map((section: any, index: number) => (
                                        <section key={index} className="space-y-4">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                                            <div className="text-slate-300 leading-relaxed space-y-4">
                                                {section.description.split("\n\n").map((paragraph: any, i: any) => (
                                                    <p key={i}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>

                            {/* Engagement Stats */}
                            {/* <div className="flex items-center justify-between py-6 border-t border-b border-slate-700 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                                <Heart className="h-5 w-5" />
                            </Button>
                            <span className="text-slate-300">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                                <MessageSquare className="h-5 w-5" />
                            </Button>
                            <span className="text-slate-300">{post.comments}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-sm">Share:</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-500 hover:text-blue-400 hover:bg-blue-900/20 p-1 h-8 w-8"
                        >
                            <Facebook className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-900/20 p-1 h-8 w-8"
                        >
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-500 hover:bg-blue-900/20 p-1 h-8 w-8"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-emerald-500 hover:text-emerald-400 hover:bg-emerald-900/20 p-1 h-8 w-8"
                        >
                            <Link className="h-4 w-4" />
                        </Button>
                    </div>
                </div> */}

                            {/* Related Posts */}
                            {/* <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 text-white">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <Card
                                key={item}
                                className="bg-slate-800 border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={`/blog2.webp`}
                                        alt={`Related post ${item}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <Badge className="bg-slate-700 text-slate-300 mb-2">Technology</Badge>
                                    <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                        Related Article Title That Might Be Long and Need Truncating
                                    </h4>
                                    <div className="flex items-center justify-between text-sm text-slate-400">
                                        <span>5 min read</span>
                                        <span>Jun 12, 2023</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div> */}

                            {/* Navigation */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <Button
                        variant="outline"
                        className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white justify-start"
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous Article
                    </Button>
                    <Button variant="outline" className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white justify-end">
                        Next Article
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div> */}

                            {/* Comments Section */}
                            <div className="mb-12">
                                {/* <h3 className="text-xl font-bold mb-6 text-white">Comments ({post.comments})</h3> */}
                                {/* <div className="space-y-6">
                        {[1, 2, 3].map((comment) => (
                            <div key={comment} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${comment}`} />
                                        <AvatarFallback>U{comment}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-medium text-white">User Comment {comment}</h4>
                                            <span className="text-sm text-slate-400">2 days ago</span>
                                        </div>
                                        <p className="text-slate-300">
                                            This is a great article! I especially liked the section about{" "}
                                            {post.subSections[comment % post.subSections.length].title.toLowerCase()}.
                                        </p>
                                        <div className="flex items-center gap-4 mt-3">
                                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300 p-0 h-auto">
                                                <Heart className="h-4 w-4 mr-1" />
                                                <span className="text-xs">12</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300 p-0 h-auto">
                                                <MessageSquare className="h-4 w-4 mr-1" />
                                                <span className="text-xs">Reply</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                                {/* Comment Form */}
                                {/* <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
                        <h4 className="text-lg font-medium text-white mb-4">Leave a comment</h4>
                        <div className="space-y-4">
                            <textarea
                                className="w-full bg-slate-700 border-slate-600 rounded-lg p-3 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500 min-h-[120px]"
                                placeholder="Share your thoughts..."
                            ></textarea>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Post Comment</Button>
                        </div>
                    </div> */}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
