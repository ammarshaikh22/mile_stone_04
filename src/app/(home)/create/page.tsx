"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, X, Plus, Trash2 } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
interface SubSection {
  title: string;
  description: string;
}

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>(["Blog", "ChisNghiax"]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [subSections, setSubSections] = useState<SubSection[]>([]);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const addCategory = () => {
    if (
      newCategory.trim() &&
      categories.length < 3 &&
      !categories.includes(newCategory.trim())
    ) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const removeCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const addTag = () => {
    if (newTag.trim() && tags.length < 5 && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const addSubSection = () => {
    setSubSections([...subSections, { title: "", description: "" }]);
  };

  const updateSubSection = (
    index: number,
    field: keyof SubSection,
    value: string
  ) => {
    const updated = subSections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSubSections(updated);
  };

  const removeSubSection = (index: number) => {
    setSubSections(subSections.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  };

  const handlePublish = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    categories.forEach((category) => formData.append("category", category));
    formData.append("subSections", JSON.stringify(subSections));

    if (featuredImage) {
      formData.append("image", featuredImage);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "https://ai-blogs.up.railway.app/api/v2/addBlog",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Blog created successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCategories([]);
      setTitle("");
      setDescription("");
      setSubSections([]);
      setFeaturedImage(null);
      setNewCategory("");
      setNewTag("");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => {
    console.log("Saving draft...");
    // Here you would save as draft
  };

  return (
    // JSX remains unchanged
    <div className=" text-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-[90%] mx-auto py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <Label className="text-white font-medium">Featured image</Label>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-slate-500 transition-colors">
              <input
                type="file"
                accept="image/file"
                onChange={handleImageUpload}
                className="hidden"
                id="featured-image"
              />
              <label htmlFor="featured-image" className="cursor-pointer">
                <ImagePlus className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-blue-400 font-medium mb-1">Upload a file</p>
                <p className="text-slate-400 text-sm">
                  PNG, JPG, GIF, WEBP, SVG ...
                </p>
              </label>
              {featuredImage && (
                <p className="text-green-400 mt-2">
                  Selected: {featuredImage.name}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border-none text-4xl font-bold text-white placeholder:text-slate-400 p-0 h-auto focus-visible:ring-0"
              placeholder="Enter blog title..."
            />
          </div>
          <div className="space-y-4">
            <Label className="text-white font-medium">
              Add categories ({categories.length}/3)
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-[#1F2937] text-white"
                >
                  {category}
                  <button
                    onClick={() => removeCategory(category)}
                    className="ml-2"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            {categories.length < 3 && (
              <div className="flex gap-2 items-center">
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addCategory()}
                  className="bg-[#1F2937] border-slate-600 text-white placeholder:text-slate-400"
                  placeholder="Add category"
                />
                <Button
                  onClick={addCategory}
                  className="bg-[#1F2937] hover:bg-slate-500 text-white"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-slate-700 border-slate-600 text-white"
                >
                  # {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-2 hover:text-red-400"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              {tags.length < 5 && (
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                  className="bg-transparent border-none text-slate-400 placeholder:text-slate-500 w-32 h-6 p-0 focus-visible:ring-0"
                  placeholder={`Add tag (${tags.length}/5)`}
                />
              )}
            </div>
          </div>
          <div className="border-t border-slate-600 pt-6">
            <div className="space-y-2 mb-6">
              <Label className="text-white font-medium">Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 min-h-[200px] resize-none"
                placeholder="Write your blog content here..."
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white font-medium">Sub Sections</Label>
                <Button
                  onClick={addSubSection}
                  variant={"outline"}
                  size="sm"
                  className="bg-[#1F2937] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Section
                </Button>
              </div>
              {subSections.map((section, index) => (
                <Card key={index} className="bg-[#0F172A] border-slate-600">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-white font-medium">
                        Section {index + 1}
                      </Label>
                      <Button
                        onClick={() => removeSubSection(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <Input
                      value={section.title}
                      onChange={(e) =>
                        updateSubSection(index, "title", e.target.value)
                      }
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="Section title"
                    />
                    <Textarea
                      value={section.description}
                      onChange={(e) =>
                        updateSubSection(index, "description", e.target.value)
                      }
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                      placeholder="Section content"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {loading ? (
            <Bars
              height="50"
              width="50"
              color="#fff"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div className="flex items-center gap-4 pt-6 border-t border-slate-600">
              <Button
                onClick={handlePublish}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
              >
                Publish
              </Button>
              <Button
                onClick={handleSaveDraft}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Save draft
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
