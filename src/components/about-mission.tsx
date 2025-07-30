import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Driven by innovation, guided by values, and committed to excellence in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="group  transition-all duration-300 border-0 ">
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and individuals through cutting-edge technology solutions that drive growth,
                efficiency, and innovation in the digital age.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 border-0 ">
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading force in digital transformation, creating a world where technology seamlessly enhances
                human potential and business success.
              </p>
            </CardContent>
          </Card>

          <Card className="group transition-all duration-300 border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, innovation, and collaboration form the foundation of our work. We believe in building lasting
                relationships through trust and excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
