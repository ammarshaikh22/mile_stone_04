"use client"
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react"
import {
    ImageIcon,
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import SubSectionEditor from "@/components/sub-section"
import axios from "axios"

export default function BlogEditor() {
    const [data, setData] = useState({
        title: "",
        description: "",
        categories: [] as string[],
        subSections: [{ title: "", description: "" }],
    })
    const [image, setImage] = useState(null)
    const [categoryInput, setCategoryInput] = useState("")
    // CATEGORY HANDLERS
    const handleAddCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && categoryInput.trim()) {
            e.preventDefault()
            if (!data.categories.includes(categoryInput.trim()) && data.categories.length < 1) {
                setData(prev => ({
                    ...prev,
                    categories: [...prev.categories, categoryInput.trim()],
                }))
            }
            setCategoryInput("")
        }
    }

    const handleRemoveCategory = (categoryToRemove: string) => {
        setData(prev => ({
            ...prev,
            categories: prev.categories.filter(cat => cat !== categoryToRemove),
        }))
    }

    // IMAGE HANDLER


    // SUB SECTION HANDLERS
    const addSubSection = () => {
        setData(prev => ({
            ...prev,
            subSections: [...prev.subSections, { title: "", description: "" }],
        }))
    }

    const updateSubSection = (index: number, key: string, value: string) => {
        const updated = [...data.subSections]
        updated[index][key as keyof typeof updated[number]] = value
        setData(prev => ({ ...prev, subSections: updated }))
    }

    const removeSubSection = (index: number) => {
        const updated = [...data.subSections]
        updated.splice(index, 1)
        setData(prev => ({ ...prev, subSections: updated }))
    }

    // SUBMIT HANDLER
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("description", data.description)
    formData.append("category", data.categories.join(","))
    formData.append("subSections", JSON.stringify(data.subSections))
    if (image) {
        formData.append("image", image)
    }

    const handleSubmit = async () => {
        const { title, description, categories } = data
        if (!title || !description || categories.length === 0 || !image) {
            alert("Please fill in all required fields.")
            return
        }
        try {
            console.log(formData.get("image"))
            const response = await axios.post("http://localhost:8000/api/v2/addBlog",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `${localStorage.getItem("token")}`,
                },
            })
            if (response.status === 201) {
                toast.success("Blog published successfully!")
                setData({
                    title: "",
                    description: "",
                    categories: [],
                    subSections: [{ title: "", description: "" }],
                })
                setImage(null)
            }
        } catch (error) {
            toast.error("Failed to publish blog. Please try again.")
            console.error("Error publishing blog:", error)
        }
    }

    return (
        <div className="space-y-6">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Featured Image */}
            <div className="space-y-2">
                <label className="text-sm text-gray-300">Featured image</label>
                <div
                    className={`border border-dashed border-gray-600 rounded-md p-8 flex flex-col items-center justify-center cursor-pointer ${image ? "bg-[#1a1f2e]" : "bg-[#1a1f2e]/50"}`}
                    onClick={() => document.getElementById("file-upload")?.click()}
                >
                    {image ? (
                        <img src={image} alt="Preview" className="w-full h-48 object-contain" />
                    ) : (
                        <>
                            <div className="w-12 h-12 mb-2 flex items-center justify-center border border-gray-600 rounded-md">
                                <ImageIcon className="w-6 h-6 text-gray-400" />
                            </div>
                            <p className="text-blue-400 text-sm font-medium">Upload a file</p>
                            <p className="text-gray-400 text-xs mt-1">PNG, JPG, GIF, WEBP, SVG...</p>
                        </>
                    )}
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e: any) => setImage(e.target.files[0])}
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
                <label className="text-sm text-gray-300">Add categories ({data.categories.length}/1)</label>
                <div className="flex flex-wrap gap-2 mb-2">
                    {data.categories.map((category, index) => (
                        <Badge key={index} className="bg-[#2a3042] hover:bg-[#2a3042]/80 text-white">
                            {category}
                            <button onClick={() => handleRemoveCategory(category)} className="ml-2 text-gray-400 hover:text-white">
                                <X className="w-3 h-3" />
                            </button>
                        </Badge>
                    ))}
                </div>
                <Input
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    placeholder="Add a category and press Enter"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    onKeyDown={handleAddCategory}
                    disabled={data.categories.length >= 1}
                />
            </div>

            {/* Title */}
            <Input
                className="bg-[#1a1f2e] border-none text-4xl font-bold placeholder-gray-600 focus-visible:ring-0"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData(prev => ({ ...prev, title: e.target.value }))}
            />

            {/* Main Content */}
            <Textarea
                className="min-h-[150px] bg-[#1a1f2e] border-none text-white placeholder-gray-600 focus-visible:ring-0 resize-none"
                placeholder="Write your blog post content here..."
                value={data.description}
                onChange={(e) => setData(prev => ({ ...prev, description: e.target.value }))}
            />

            {/* Sub Sections */}
            {data.subSections.map((section, index) => (
                <SubSectionEditor
                    key={index}
                    index={index}
                    title={section.title}
                    description={section.description}
                    updateSubSection={(idx, key, value) => updateSubSection(idx, key, value)}
                    removeSubSection={() => removeSubSection(index)}
                />
            ))}

            <Button
                variant="outline"
                className="border-dashed border-gray-600 text-gray-400 hover:text-white hover:bg-[#2a3042]"
                onClick={addSubSection}
            >
                + Add Sub Section
            </Button>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-6">
                <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white" onClick={handleSubmit}>
                    Publish
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-[#2a3042]">
                    Save draft
                </Button>
            </div>
        </div>
    )
}
