import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type Subsidiary = {
    id: string
    title: string
    description: string
    logoUrl: string
    imageUrl: string
    url?: string
}


export function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
    return (
        <Link
            target="_blank"
            href={subsidiary.url ?? "#"}
            className={cn(
                "rounded-lg shadow-md shadow-[#23194b] flex flex-col items-center text-center relative",
                "h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px]",
                "w-full mx-2",
                "bg-[#0e0a1e] border border-transparent",
                "hover:border-eblue hover:scale-105 sm:hover:scale-105 transition-all duration-150",
                "p-3 sm:p-4",
                subsidiary.id === "nfc-rent" && "hover:border-[#785bf1]",
            )}
        >
            <div className="p-2 sm:p-4">
                <div className="flex items-center justify-center">
                    <Image
                        src={subsidiary.logoUrl || "/placeholder.svg"}
                        alt={`${subsidiary.title} Logo`}
                        width={subsidiary.id === "nfc-rent" ? 80 : 170}
                        height={subsidiary.id === "nfc-rent" ? 60 : 100}
                    />
                </div>
            </div>

            <h3
                className={cn("font-bold text-lg sm:text-xl", "text-eblue", subsidiary.id === "nfc-rent" && "text-[#785bf1]")}
            >
                {subsidiary.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 max-w-[90%] sm:max-w-[80%] mx-auto">
                {subsidiary.description}
            </p>

            <div className="absolute -bottom-4 sm:-bottom-8 w-full left-0 h-[90px] sm:h-[100px] md:h-[150px]">
                <div className="relative h-full w-full">
                    <Image
                        src={subsidiary.imageUrl || "/placeholder.svg"}
                        alt={`${subsidiary.title} product`}
                        fill
                        className={cn(
                            "object-contain rotate-[170deg] object-bottom",
                            "scale-100 sm:scale-110 md:scale-125",
                        )}
                    />
                </div>
            </div>
        </Link>
    )
}

export function SubsidiariesSection() {
    const subsidiaries: Subsidiary[] = [{
        id: "nfc-rent",
        title: 'NFC',
        url: 'https://nfcrent.com',
        description: 'Revolutionizing digital asset management with NFT & blockchain technology',
        imageUrl: '/images/nfc-car.png',
        logoUrl: '/images/nfc-rent.svg',
    }, {
        id: "The Universe Eye",
        title: 'The Universe Eye',
        url: 'https://theuniverseye.com',
        description: 'Crafting immersive worlds through advanced AR, VR, MR and AI-driven environments',
        imageUrl: '/images/universe-eye.png',
        logoUrl: '/images/the-universe-eye.svg',
    }]

    return (
        <div className="py-8 lg:py-16 cursor-pointer">
            <div className="main-container">
                <p className="text-center max-w-[782px] font-bold uppercase mx-auto mb-8">Elchai is a team of dedicated developers specializing in al, metaverse, blockchain, and web3 technologies-passionate about crafting extraordinary, intelligent digital solutions that redefine what's possible</p>

                <h2 className="main-title mb-12 text-center lg:text-left">Explore Our <span>Innovative Subsidiaries</span></h2>
                <div className="grid sm:grid-cols-2 gap-8">
                    {subsidiaries.map((subsidiary) => (
                        <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} />
                    ))}
                </div>
            </div>
        </div>
    )
}