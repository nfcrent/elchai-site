import { CardStyleOne } from "@/inc/Containers";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

export interface Service {
    title: string;
    slug: string;
    description: React.ReactNode;
    media: {
        image: string;
        video: string;
    },
    hero: React.ReactNode;
    intro: string;
    content: React.ReactNode;
    stack: Array<{
        name: string;
        media: string;
    }>;
    link: {
        name: string;
        url: string;
    };
}


export function ServiceFooterCard({ t }: { t: any }) {
    return (
        <CardStyleOne>
            <div className="pt-7 pb-10">
                <h2
                    className="main-title no-decoration mb-2"
                    dangerouslySetInnerHTML={{ __html: t.raw("cta.title") }}
                />
                <p className="max-w-[703px] text-center mx-auto mb-8">
                    {t("cta.subtitle")}
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link href={"/"} className="btn btn-main">
                        {t("cta.button")} <FaChevronCircleRight />
                    </Link>
                </div>
            </div>
        </CardStyleOne>
    )
}

export function getServiceData(tServices: any): Service[] {
    return [
        {
            title: tServices("metaverse.title"),
            slug: "metaverse-integration-solutions",
            description: (
                <>
                    <p>{tServices("metaverse.description.p")}</p>
                    <ul className="main-lists">
                        {(tServices.raw("metaverse.description.items") as string[]).map(
                            (i) => (
                                <li key={i}>{i}</li>
                            ),
                        )}
                    </ul>
                </>
            ),
            media: {
                image: "/images/ai-development-services.png",
                video: "/videos/ai-development-services.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("metaverse.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("metaverse.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("metaverse.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("metaverse.hero.s3")}</span>
                </>
            ),
            intro: tServices("metaverse.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("metaverse.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverse.content.subtitle")}
                            </h3>
                            <p>{tServices("metaverse.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverse.content.footer.t1")}
                            </h3>
                            <p>{tServices("metaverse.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverse.content.footer.t2")}
                            </h3>
                            <p>{tServices("metaverse.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            link: {
                name: tServices("metaverse.cta"),
                url: "/contact-us",
            },
            stack: [
                {
                    name: "Unity Engine",
                    media: "/images/unity-engine.svg",
                },
                {
                    name: "Unreal Engine",
                    media: "/images/unreal-engine.svg",
                },
                {
                    name: "Etheruem Blockchain",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "Polygon",
                    media: "/images/polygon.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
        },
        {
            title: tServices("realEstateMetaverse.title"),
            slug: "real-estate-metaverse-development",
            description: (
                <>
                    <p>{tServices("realEstateMetaverse.description.p")}</p>
                    <ul className="main-lists">
                        {(
                            tServices.raw(
                                "realEstateMetaverse.description.items",
                            ) as string[]
                        ).map((i) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/real-estate-metaverse-development.png",
                video: "/videos/real-estate-metaverse-development.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("realEstateMetaverse.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">
                        {tServices("realEstateMetaverse.hero.s1")}
                    </span>{" "}
                    <span className="text-[#f5daed]">
                        {tServices("realEstateMetaverse.hero.s2")}
                    </span>{" "}
                    <span className="text-[#b9e6e9]">
                        {tServices("realEstateMetaverse.hero.s3")}
                    </span>
                </>
            ),
            intro: tServices("realEstateMetaverse.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw(
                                "realEstateMetaverse.content.title",
                            ),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("realEstateMetaverse.content.subtitle")}
                            </h3>
                            <p>{tServices("realEstateMetaverse.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("realEstateMetaverse.content.footer.t1")}
                            </h3>
                            <p>{tServices("realEstateMetaverse.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("realEstateMetaverse.content.footer.t2")}
                            </h3>
                            <p>{tServices("realEstateMetaverse.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            link: {
                name: tServices("realEstateMetaverse.cta"),
                url: "/contact-us",
            },
            stack: [
                {
                    name: "Unity Engine",
                    media: "/images/unity-engine.svg",
                },
                {
                    name: "Unreal Engine",
                    media: "/images/unreal-engine.svg",
                },
                {
                    name: "Etheruem Blockchain",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "Polygon",
                    media: "/images/polygon.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
        },
        {
            title: tServices("metaverseAvatar.title"),
            slug: "metaverse-3d-avatar-and-space-development",
            description: (
                <>
                    <p>{tServices("metaverseAvatar.description.p")}</p>
                    <ul className="main-lists">
                        {(
                            tServices.raw(
                                "metaverseAvatar.description.items",
                            ) as string[]
                        ).map((i) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/metaverse-3d-avatar-and-space-development.png",
                video: "/videos/metaverse-3d-avatar-and-space-development.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("metaverseAvatar.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("metaverseAvatar.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("metaverseAvatar.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("metaverseAvatar.hero.s3")}</span>
                </>
            ),
            intro: tServices("metaverseAvatar.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("metaverseAvatar.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverseAvatar.content.subtitle")}
                            </h3>
                            <p>{tServices("metaverseAvatar.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverseAvatar.content.footer.t1")}
                            </h3>
                            <p>{tServices("metaverseAvatar.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("metaverseAvatar.content.footer.t2")}
                            </h3>
                            <p>{tServices("metaverseAvatar.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            link: {
                name: tServices("metaverseAvatar.cta"),
                url: "/contact-us",
            },
            stack: [
                {
                    name: "Unity Engine",
                    media: "/images/unity-engine.svg",
                },
                {
                    name: "Unreal Engine",
                    media: "/images/unreal-engine.svg",
                },
                {
                    name: "blender",
                    media: "/images/blender.svg",
                },
                {
                    name: "ReactJS",
                    media: "/images/reactjs.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
        },
        {
            title: tServices("blockchain.title"),
            slug: "blockchain-development",
            description: (
                <>
                    <p>{tServices("blockchain.description.p")}</p>
                    <ul className="main-lists">
                        {(tServices.raw("blockchain.description.items") as string[]).map(
                            (i) => (
                                <li key={i}>{i}</li>
                            ),
                        )}
                    </ul>
                </>
            ),
            media: {
                image: "/images/blockchain-development.png",
                video: "/videos/blockchain-development.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("blockchain.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("blockchain.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("blockchain.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("blockchain.hero.s3")}</span>
                </>
            ),
            intro: tServices("blockchain.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("blockchain.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("blockchain.content.subtitle")}
                            </h3>
                            <p>{tServices("blockchain.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("blockchain.content.footer.t1")}
                            </h3>
                            <p>{tServices("blockchain.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("blockchain.content.footer.t2")}
                            </h3>
                            <p>{tServices("blockchain.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Ethereum Blockchain",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Binance Smart Chain",
                    media: "/images/binance.svg",
                },
                {
                    name: "Solana",
                    media: "/images/solana.svg",
                },
                {
                    name: "Polygon",
                    media: "/images/polygon.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
            ],
            link: {
                name: tServices("blockchain.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("coin.title"),
            slug: "coin-development",
            description: (
                <>
                    <p>{tServices("coin.description.p")}</p>
                    <ul className="main-lists">
                        {(tServices.raw("coin.description.items") as string[]).map((i) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/coin-development.png",
                video: "/videos/coin-development.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("coin.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("coin.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("coin.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("coin.hero.s3")}</span>
                </>
            ),
            intro: tServices("coin.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("coin.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("coin.content.subtitle")}
                            </h3>
                            <p>{tServices("coin.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("coin.content.footer.t1")}
                            </h3>
                            <p>{tServices("coin.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("coin.content.footer.t2")}
                            </h3>
                            <p>{tServices("coin.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "Ethereum Blockchain",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Binance Smart Chain",
                    media: "/images/binance.svg",
                },
                {
                    name: "Polygon",
                    media: "/images/polygon.svg",
                },
                {
                    name: "ReactJS",
                    media: "/images/reactjs.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
            link: {
                name: tServices("coin.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("cryptoWallet.title"),
            slug: "crypto-wallet-development",
            description: (
                <>
                    <p>{tServices("cryptoWallet.description.p")}</p>
                    <ul className="main-lists">
                        {(
                            tServices.raw("cryptoWallet.description.items") as string[]
                        ).map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/crypto-wallet-development.png",
                video: "/videos/crypto-wallet-development.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("cryptoWallet.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("cryptoWallet.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("cryptoWallet.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("cryptoWallet.hero.s3")}</span>
                </>
            ),
            intro: tServices("cryptoWallet.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("cryptoWallet.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cryptoWallet.content.subtitle")}
                            </h3>
                            <p>{tServices("cryptoWallet.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cryptoWallet.content.footer.t1")}
                            </h3>
                            <p>{tServices("cryptoWallet.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cryptoWallet.content.footer.t2")}
                            </h3>
                            <p>{tServices("cryptoWallet.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "Ethereum Blockchain",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "ReactJS",
                    media: "/images/reactjs.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
                {
                    name: "Kotlin",
                    media: "/images/kotlin.svg",
                },
                {
                    name: "Swift",
                    media: "/images/swift.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
            link: {
                name: tServices("cryptoWallet.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("aiDevelopment.title"),
            slug: "ai-development-services",
            description: (
                <>
                    <p>{tServices("aiDevelopment.description.p")}</p>
                    <ul className="main-lists">
                        {(
                            tServices.raw("aiDevelopment.description.items") as string[]
                        ).map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/metaverse-integration-solutions.png",
                video: "/videos/metaverse-integration-solutions.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("aiDevelopment.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("aiDevelopment.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("aiDevelopment.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("aiDevelopment.hero.s3")}</span>
                </>
            ),
            intro: tServices("aiDevelopment.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("aiDevelopment.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("aiDevelopment.content.subtitle")}
                            </h3>
                            <p>{tServices("aiDevelopment.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("aiDevelopment.content.footer.t1")}
                            </h3>
                            <p>{tServices("aiDevelopment.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("aiDevelopment.content.footer.t2")}
                            </h3>
                            <p>{tServices("aiDevelopment.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Python",
                    media: "/images/python.svg",
                },
                {
                    name: "TensorFlow",
                    media: "/images/tensorflow.svg",
                },
                {
                    name: "PyTorch",
                    media: "/images/pytorch.svg",
                },
                {
                    name: "OpenAI",
                    media: "/images/openai.svg",
                },
                {
                    name: "AzureAI",
                    media: "/images/azure.svg",
                },
                {
                    name: "AWS SageMaker",
                    media: "/images/aws-sagemaker.svg",
                },
            ],
            link: {
                name: tServices("aiDevelopment.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("decentralizedIdentifiers.title"),
            slug: "decentralized-identifiers-dids",
            description: (
                <>
                    <p>{tServices("decentralizedIdentifiers.description.p")}</p>
                    <ul className="main-lists">
                        {(
                            tServices.raw(
                                "decentralizedIdentifiers.description.items",
                            ) as string[]
                        ).map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                </>
            ),
            media: {
                image: "/images/decentralized-identifiers-dids.png",
                video: "/videos/decentralized-identifiers-dids.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("decentralizedIdentifiers.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">
                        {tServices("decentralizedIdentifiers.hero.s1")}
                    </span>{" "}
                    <span className="text-[#f5daed]">
                        {tServices("decentralizedIdentifiers.hero.s2")}
                    </span>{" "}
                    <span className="text-[#b9e6e9]">
                        {tServices("decentralizedIdentifiers.hero.s3")}
                    </span>
                </>
            ),
            intro: tServices("decentralizedIdentifiers.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw(
                                "decentralizedIdentifiers.content.title",
                            ),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("decentralizedIdentifiers.content.subtitle")}
                            </h3>
                            <p>{tServices("decentralizedIdentifiers.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("decentralizedIdentifiers.content.footer.t1")}
                            </h3>
                            <p>{tServices("decentralizedIdentifiers.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("decentralizedIdentifiers.content.footer.t2")}
                            </h3>
                            <p>{tServices("decentralizedIdentifiers.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Ethereum",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Polygon",
                    media: "/images/polygon.svg",
                },
                {
                    name: "Hyperledger Indy",
                    media: "/images/hyperledger.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
            link: {
                name: tServices("decentralizedIdentifiers.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("cbdc.title"),
            slug: "central-bank-digital-currencies-cbdcs",
            description: (
                <>
                    <p>{tServices("cbdc.description.p")}</p>
                    <ul className="main-lists">
                        {(tServices.raw("cbdc.description.items") as string[]).map(
                            (i, index) => (
                                <li key={index}>{i}</li>
                            ),
                        )}
                    </ul>
                </>
            ),
            media: {
                image: "/images/central-bank-digital-currencies-cbdcs.png",
                video: "/videos/central-bank-digital-currencies-cbdcs.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("cbdc.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("cbdc.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("cbdc.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("cbdc.hero.s3")}</span>
                </>
            ),
            intro: tServices("cbdc.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("cbdc.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cbdc.content.subtitle")}
                            </h3>
                            <p>{tServices("cbdc.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cbdc.content.footer.t1")}
                            </h3>
                            <p>{tServices("cbdc.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("cbdc.content.footer.t2")}
                            </h3>
                            <p>{tServices("cbdc.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Hyperledger Fabric",
                    media: "/images/fabric.svg",
                },
                {
                    name: "Ethereum",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "Java",
                    media: "/images/java.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
            link: {
                name: tServices("cbdc.cta"),
                url: "/contact-us",
            },
        },
        {
            title: tServices("defiCefi.title"),
            slug: "deficeficedefi-solutions",
            description: (
                <>
                    <p>{tServices("defiCefi.description.p")}</p>
                    <ul className="main-lists">
                        {(tServices.raw("defiCefi.description.items") as string[]).map(
                            (i, index) => (
                                <li key={index}>{i}</li>
                            ),
                        )}
                    </ul>
                </>
            ),
            media: {
                image: "/images/deficeficedefi-solutions.png",
                video: "/videos/deficeficedefi-solutions.mp4"
            },
            hero: (
                <>
                    <strong>{tServices("defiCefi.hero.strong")}</strong>{" "}
                    <span className="text-[#50a6d7]">{tServices("defiCefi.hero.s1")}</span>{" "}
                    <span className="text-[#f5daed]">{tServices("defiCefi.hero.s2")}</span>{" "}
                    <span className="text-[#b9e6e9]">{tServices("defiCefi.hero.s3")}</span>
                </>
            ),
            intro: tServices("defiCefi.intro"),
            content: (
                <>
                    <h2
                        className="main-title mb-4 lg:mb-16"
                        dangerouslySetInnerHTML={{
                            __html: tServices.raw("defiCefi.content.title"),
                        }}
                    />
                    <div className="space-y-8 service-content-container mb-16">
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/metaverse.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("defiCefi.content.subtitle")}
                            </h3>
                            <p>{tServices("defiCefi.content.description")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/artificial-intelligence.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("defiCefi.content.footer.t1")}
                            </h3>
                            <p>{tServices("defiCefi.content.footer.d1")}</p>
                        </div>
                        <div className="service-content-item">
                            <div className="service-content-icon">
                                <Image
                                    src={"/images/vr-glasses.svg"}
                                    alt={""}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <h3 className="font-bold uppercase text-epurple mb-3">
                                {tServices("defiCefi.content.footer.t2")}
                            </h3>
                            <p>{tServices("defiCefi.content.footer.d2")}</p>
                        </div>
                    </div>
                </>
            ),
            stack: [
                {
                    name: "Ethereum",
                    media: "/images/ethereum-blockchain.svg",
                },
                {
                    name: "Binance",
                    media: "/images/binance.svg",
                },
                {
                    name: "Solidity",
                    media: "/images/solidity.svg",
                },
                {
                    name: "ReactJS",
                    media: "/images/reactjs.svg",
                },
                {
                    name: "NodeJS",
                    media: "/images/nodejs.svg",
                },
                {
                    name: "AWS",
                    media: "/images/aws.svg",
                },
            ],
            link: {
                name: tServices("defiCefi.cta"),
                url: "/contact-us",
            },
        },
    ];
}
