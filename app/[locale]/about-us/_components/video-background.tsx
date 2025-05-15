"use client"
import { useEffect, useRef, useState } from "react"

export default function VideoBackgroundSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current
    const handleLoadedData = () => {
      setVideoLoaded(true)
    }

    const handleError = () => {
      setVideoError(true)
    }

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleLoadedData)
      videoElement.addEventListener("error", handleError)

      videoElement.load()
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleLoadedData)
        videoElement.removeEventListener("error", handleError)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "400px" }}>
      <div className="absolute inset-0 w-full h-full">
        {videoError && (
          <div className="flex items-center justify-center w-full h-full bg-gray-900 text-red-400">
            Video could not be loaded. Please check the path: /videos/about-us-vid.mp4
          </div>
        )}

        {!videoError && (
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src="/videos/about-us-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className={`absolute inset-0 bg-background/40 ${videoLoaded ? "bg-opacity-30" : "bg-opacity-70"}`}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-white">
        <h2 className="mb-4 text-4xl font-bold text-center md:text-5xl">
          Charting New <span className="text-blue-400">Digital Territories</span>
        </h2>
        <p className="max-w-4xl mx-auto text-center text-lg md:text-xl font-semibold">
          At Elchai, we are committed to exploring uncharted territories by crafting Web3-based ecosystems powered by
          decentralization and advanced technologies such as AI, NLP, ML, and IoT. Our vision particularly aims to
          revolutionize the global real estate sector, paving paths for businesses to adopt decentralized models, drive
          innovation, and achieve extraordinary growth within the Web3 domain.
        </p>
      </div>
    </div>
  )
}
