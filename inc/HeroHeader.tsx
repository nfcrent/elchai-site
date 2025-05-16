import { cn } from "@/lib/utils"
import Image from "next/image"

interface HeroHeaderProps {
    image?: string,
    video?: string,
    title: React.ReactNode,
    className?: string,
    mheight?: string,
    overlay?: "lg" | "md" | "sm" | "none"
    imgClass?: string
    videoClass?: string
    containerClass?: string
    imgHeight?: number,
    imgWidth?: number
}

const HeroHeader = ({ image, video, overlay = "none", title, className, mheight = 'min-h-[60vh]', imgClass, containerClass, videoClass, imgHeight = 1920, imgWidth = 1920 }: HeroHeaderProps) => {
    return (
        <>
            <div className={cn(`relative pt-28 lg:min-h-[100vh]`, `backdrop-blur-${overlay} ${mheight}`, containerClass)}>

                <LightingOverLay overlay={overlay} />

                {image ? (
                    <Image src={image || ''} width={imgWidth} height={imgHeight} alt="Elchai" className={cn("absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full z-10", imgClass)} />
                ) : (
                    <>
                        {video && <video autoPlay muted loop playsInline controls={false} className={cn("absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full z-10", videoClass)}>
                            <source src={video || ''} type="video/mp4" />
                        </video>}
                    </>
                )}


                <div className="main-container pb-20 pt-20 relative z-30">
                    <h1 className={`uppercase text-3xl lg:text-5xl ${className || ""}`}>{title}</h1>
                </div>
            </div>
        </>
    )
}

interface LightingProps {
    overlay?: "lg" | "md" | "sm" | "none",
    className1?: string,
    className2?: string,
}

export function LightingOverLay({ overlay = "none", className1, className2 }: LightingProps) {
    return (
        <div className={`absolute top-0 left-0 right-0 bottom-0 z-20 bg-black/50 backdrop-blur-${overlay}`}>

            {/* <div className={cn("absolute -left-[780px] -top-[450px] w-[300px] h-[300px] sm:w-[1000px] sm:h-[1000px] opacity-70", className1)}>
                <Image
                    src="/images/gradient.png"
                    alt=""
                    fill
                    sizes="(max-width: 1000px) 300px, 400px"
                    className="object-cover"
                    priority
                />
            </div>
            <div className={cn("absolute -right-[780px] -bottom-[450px] w-[300px] h-[300px] sm:w-[1000px] sm:h-[1000px] opacity-70", className2)}>
                <Image
                    src="/images/gradient.png"
                    alt=""
                    fill
                    sizes="(max-width: 1000px) 300px, 400px"
                    className="object-cover"
                    priority
                />
            </div> */}
        </div>
    )
}

export default HeroHeader