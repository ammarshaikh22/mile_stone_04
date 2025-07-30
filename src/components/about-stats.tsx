"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatItemProps {
  number: number
  label: string
  suffix?: string
  prefix?: string
}

function StatItem({ number, label, suffix = "", prefix = "" }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount(count + Math.ceil(number / 100))
      }
    }, 20)

    return () => clearTimeout(timer)
  }, [count, number])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {prefix}
        {Math.min(count, number)}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  )
}

export function AboutStats() {
  return (
    <section className="py-20 bg-[url('/about2.pg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">

      <div className="max-w-[90%] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <Card className=" mx-auto bg-transparent">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatItem number={500} suffix="+" label="Projects Completed" />
              <StatItem number={150} suffix="+" label="Happy Clients" />
              <StatItem number={50} suffix="+" label="Team Members" />
              <StatItem number={99} suffix="%" label="Client Satisfaction" />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Serving clients across 25+ countries with 24/7 support and localized solutions that meet diverse market
                needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-muted-foreground">
                Investing 20% of our resources in R&D to stay ahead of technology trends and deliver cutting-edge
                solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
