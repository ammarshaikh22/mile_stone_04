"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineEvents = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Founded with a vision to transform digital experiences",
    highlight: "Company Founded",
  },
  {
    year: "2019",
    title: "First Milestone",
    description: "Reached 50 successful projects and expanded our team",
    highlight: "50 Projects",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Opened international offices and served clients worldwide",
    highlight: "Global Reach",
  },
  {
    year: "2021",
    title: "Innovation Award",
    description: "Recognized for outstanding contribution to tech innovation",
    highlight: "Industry Recognition",
  },
  {
    year: "2022",
    title: "Major Growth",
    description: "Doubled our team size and launched new service offerings",
    highlight: "Team Expansion",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Pioneered AI-powered solutions for enhanced user experiences",
    highlight: "AI Innovation",
  },
  {
    year: "2024",
    title: "Sustainability Focus",
    description: "Committed to carbon-neutral operations and green technology",
    highlight: "Green Initiative",
  },
]

export function AboutTimeline() {
  const [lineHeight, setLineHeight] = useState(0)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineRect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const timelineTop = timelineRect.top
      const timelineHeight = timelineRect.height

      // Calculate how much of the timeline is visible
      const visibleStart = Math.max(0, windowHeight - timelineTop)
      const visibleEnd = Math.min(timelineHeight, windowHeight - timelineTop + windowHeight)
      const visiblePercentage = Math.max(0, Math.min(1, visibleStart / timelineHeight))

      // Update line height based on scroll
      setLineHeight(visiblePercentage * 100)

      // Check which items should be visible
      const newVisibleItems: number[] = []
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemRect = item.getBoundingClientRect()
          const itemCenter = itemRect.top + itemRect.height / 2

          // Item becomes visible when it's in the viewport
          if (itemCenter <= windowHeight && itemCenter >= 0) {
            newVisibleItems.push(index)
          }
        }
      })

      setVisibleItems(newVisibleItems)
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-[90%] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From humble beginnings to industry leadership. Here's how we've grown and evolved over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Static timeline background */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted/30 transform md:-translate-x-1/2" />

            {/* Animated timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 transition-all duration-300 ease-out"
              style={{ height: `${lineHeight}%` }}
            />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`relative flex items-center transition-all duration-700 ease-out ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-background transition-all duration-500 ${
                      visibleItems.includes(index)
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-100"
                        : "bg-muted scale-75"
                    }`}
                  />

                  {/* Pulsing ring animation for active dot */}
                  {visibleItems.includes(index) && (
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-0">
                      <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
                      <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping animation-delay-75" />
                    </div>
                  )}

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                    <Card
                      className={`group hover:shadow-xl transition-all duration-500  ${
                        visibleItems.includes(index) ? "hover:scale-105" : ""
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant="outline"
                            className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 transition-all duration-300 ${
                              visibleItems.includes(index) ? "animate-pulse" : ""
                            }`}
                          >
                            {event.year}
                          </Badge>
                          <Badge
                            className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 ${
                              visibleItems.includes(index) ? "shadow-lg shadow-blue-500/25" : ""
                            }`}
                          >
                            {event.highlight}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
