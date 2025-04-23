"use client"

import { ReactNode } from "react"

interface GradientBackgroundProps {
    className?: string
    colors?: string[]
    intensity?: number
    children?: ReactNode
}

const GradientBackground = ({
    className = "",
    colors = ["#3a1a6c", "#1a0933", "#08020d"],
    intensity = 50,
    children
}: GradientBackgroundProps) => {
    const normalizedIntensity = intensity / 50
    const opacity1 = Math.round(0.25 * normalizedIntensity * 255).toString(16).padStart(2, "0")
    const opacity2 = Math.round(0.2 * normalizedIntensity * 255).toString(16).padStart(2, "0")
    const opacity3 = Math.round(0.18 * normalizedIntensity * 255).toString(16).padStart(2, "0")
    const opacity4 = Math.round(0.22 * normalizedIntensity * 255).toString(16).padStart(2, "0")

    return (
        <div
            className={`fixed inset-0 w-full h-full -z-10 ${className}`}
            style={{
                backgroundColor: colors[2],
                background: `
          radial-gradient(circle at 0% 0%, ${colors[0]}${opacity1} 0%, ${colors[1]}${Math.round(Number.parseInt(opacity1, 16) * 0.4).toString(16).padStart(2, "0")} 30%, transparent 70%),
          radial-gradient(circle at 100% 0%, ${colors[0]}${opacity2} 0%, ${colors[1]}${Math.round(Number.parseInt(opacity2, 16) * 0.4).toString(16).padStart(2, "0")} 30%, transparent 70%),
          radial-gradient(circle at 0% 100%, ${colors[0]}${opacity3} 0%, ${colors[1]}${Math.round(Number.parseInt(opacity3, 16) * 0.4).toString(16).padStart(2, "0")} 30%, transparent 70%),
          radial-gradient(circle at 100% 100%, ${colors[0]}${opacity4} 0%, ${colors[1]}${Math.round(Number.parseInt(opacity4, 16) * 0.4).toString(16).padStart(2, "0")} 30%, transparent 70%),
          ${colors[2]}
        `,
                transition: "background 0.5s ease-out",
            }}
        >
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    backgroundSize: "200px 200px",
                }}
            />
            {children}
        </div>
    )
}

export default GradientBackground