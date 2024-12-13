import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Shield, ArrowRight } from 'lucide-react'

interface SoftwareAdProps {
  software: {
    name: string
    description: string
    features: string[]
    ctaText: string
  }
}

export default function SoftwareAd({software }: SoftwareAdProps) {
  return (
    <Card className="flex flex-col justify-between h-full overflow-hidden bg-primary text-primary-foreground">
      <CardHeader className="flex flex-col items-center gap-4 pb-2">
        <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <div className="text-center">
          <CardTitle className="text-2xl font-bold">{software.name}</CardTitle>
          {/* <Badge variant="secondary" className="mt-2">Revolutionary Software</Badge> */}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm mb-6">{software.description}</p>
        <ul className="space-y-2">
          {software.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center">
              {index % 2 === 0 ? <Zap className="w-5 h-5 mr-2" /> : <Shield className="w-5 h-5 mr-2" />}
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center pt-4">
        <Button size="lg" variant="secondary" className="w-full max-w-xs group">
          <span className="mr-2">{software.ctaText}</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

