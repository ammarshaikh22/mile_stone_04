import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["Leadership", "Strategy", "Innovation"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack architect passionate about scalable solutions",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["Architecture", "DevOps", "AI/ML"],
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Creative director crafting beautiful user experiences",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["UI/UX", "Branding", "Research"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Code enthusiast building the future of web applications",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["React", "Node.js", "TypeScript"],
    social: { github: "#", linkedin: "#" },
  },
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The brilliant minds behind our success. Each bringing unique expertise and passion to create exceptional
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-b from-card to-card/50 hover:from-card hover:to-muted/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                </div>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3">Join Our Team</h3>
              <p className="text-muted-foreground mb-4">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <a href="#careers" className="text-primary hover:underline font-medium">
                View Open Positions →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
