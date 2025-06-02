"use client"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SubSectionEditorProps {
  index: number
  title: string
  description: string
  updateSubSection: (index: number, field: "title" | "description", value: string) => void
  removeSubSection: (index: number) => void
}

export default function SubSectionEditor({
  index,
  title,
  description,
  updateSubSection,
  removeSubSection,
}: SubSectionEditorProps) {
  return (
    <div className="space-y-3 p-4 border border-gray-700 rounded-md relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-[#2a3042]"
        onClick={() => removeSubSection(index)}
      >
        <X className="w-4 h-4" />
      </Button>

      <div className="space-y-1">
        <label className="text-sm text-gray-300">Sub Section Title</label>
        <Input
          className="bg-[#1a1f2e] border-gray-700 text-white"
          placeholder="Enter sub section title"
          value={title}
          onChange={(e) => updateSubSection(index, "title", e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-300">Sub Section Content</label>
        <Textarea
          className="min-h-[100px] bg-[#1a1f2e] border-gray-700 text-white resize-none"
          placeholder="Write your sub section content here..."
          value={description}
          onChange={(e) => updateSubSection(index, "description", e.target.value)}
        />
      </div>
    </div>
  )
}
