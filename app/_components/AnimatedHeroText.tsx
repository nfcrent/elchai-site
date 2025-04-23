'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaChevronCircleRight } from "react-icons/fa"

export default function AnimatedHeroText() {
    const [displayText, setDisplayText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [showButton, setShowButton] = useState(false)

    const fullText = "Building The Future of\n AI Metaverse & Web3"
    const aiIndex = fullText.indexOf("AI")
    const metaverseIndex = fullText.indexOf("Metaverse")
    const web3Index = fullText.indexOf("Web3")

    const typingSpeedRef = useRef({
        base: 50,
        fast: 30,
        slow: 80,
        pause: 270,
    })

    const pauseAfterWords = ["Building", "AI", "Metaverse"]

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 85)

        return () => clearInterval(cursorInterval)
    }, [])

    useEffect(() => {
        if (currentIndex < fullText.length && isTyping) {
            let delay = typingSpeedRef.current.base

            const currentChar = fullText[currentIndex]

            const textSoFar = fullText.substring(0, currentIndex)
            const shouldPause = pauseAfterWords.some(
                (word) => textSoFar.endsWith(word) && textSoFar.length === word.length + textSoFar.lastIndexOf(word),
            )

            if (shouldPause) {
                delay = typingSpeedRef.current.pause
            } else if ([" ", "e", "a", "t", "o", "i"].includes(currentChar.toLowerCase())) {
                delay = typingSpeedRef.current.fast
            } else if ([",", ".", "!", "?"].includes(currentChar)) {
                delay = typingSpeedRef.current.pause
            } else if (currentChar.toUpperCase() === currentChar && currentChar !== " ") {
                delay = typingSpeedRef.current.slow
            }

            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentChar)
                setCurrentIndex((prev) => prev + 1)
            }, delay)

            return () => clearTimeout(timeout)
        } else if (currentIndex >= fullText.length) {
            setIsTyping(false)
            setTimeout(() => setShowButton(true), 400)
        }
    }, [currentIndex, isTyping, fullText])

    const renderText = () => {
        if (displayText.length === 0) return null

        return (
            <div className="inline-block">
                <strong>{displayText.substring(0, Math.min(displayText.length, aiIndex))}</strong>
                {displayText.length > aiIndex && (
                    <span className="text-[#49BFFF] transition-opacity duration-300">
                        {displayText.substring(aiIndex, Math.min(displayText.length, metaverseIndex))}
                    </span>
                )}
                {displayText.length > metaverseIndex && (
                    <span className="text-[#F8DAF0] transition-opacity duration-300">
                        {displayText.substring(metaverseIndex, Math.min(displayText.length, web3Index))}
                    </span>
                )}
                {displayText.length > web3Index && (
                    <span className="text-[#C5F5F8] transition-opacity duration-300">
                        {displayText.substring(web3Index, displayText.length)}
                    </span>
                )}
                {isTyping && showCursor && <span className="animate-pulse text-gray-500">|</span>}
            </div>
        )
    }

    return (
        <>
            {renderText()}
            <div className={`mt-8 transition-opacity duration-500 ${showButton ? "opacity-100" : "opacity-0"}`}>
                <Link href={"/contact-us"} className="btn btn-main !text-base">
                    Contact Us <FaChevronCircleRight />
                </Link>
            </div>
        </>
    )
}