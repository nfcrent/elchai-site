import Image from "next/image"

export interface ServicesI {
    title: string
    slug: string
    description: React.ReactNode
    media: string 
    video?: string
    herotext?: React.ReactNode
    introduction?: string
    content?: React.ReactNode
    technologyStack?: Array<{
        name: string
        media: string
    }>
    action?: {
        name: string
        url: string
    }
}

export const ServicesData: ServicesI[] = [
    {
        title: "Metaverse Integration Solutions",
        slug: "metaverse-integration-solutions",
        description: <>
            <p>Seamlessly integrate your brand into immersive metaverse environments, creating interactive and engaging experiences accessible across all platforms.</p>
            <ul className="main-lists">
                <li>Virtual Events & Experiences</li>
                <li>Cross-Platform Metaverse Integration</li>
                <li>Custom Interactive Solutions</li>
            </ul>
        </>,
        media: "/images/ai-development-services.png",
        video: "/videos/ai-development-services.mp4",
        herotext: <><strong>Bring Your Brand into</strong> <span className="text-[#50a6d7]">The</span> <span className="text-[#f5daed]">Metaverse</span> <span className="text-[#b9e6e9]">World</span></>,
        introduction: "Elchai expertly integrates your business into immersive metaverse platforms, connecting you with global audiences in powerful, innovative ways. From virtual conferences to digital showrooms, we ensure your transition to the metaverse is seamless and impactful.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Metaverse Integration <span>Solutions</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Custom Metaverse Environments</h3>
                    <p>Our expert developers craft personalized, interactive metaverse spaces uniquely tailored to represent your brand. Enhance user engagement with environments that encourage exploration, interaction, and meaningful connections. Whether for events, meetings, or retail, we bring your ideas vividly to life.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Cross-Platform Compatibility</h3>
                    <p>We ensure your virtual worlds are easily accessible and provide a consistent experience across various devices, including desktops, mobile phones, and VR headsets. Users can effortlessly engage with your content, ensuring maximum reach and engagement.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Metaverse Event Solutions</h3>
                    <p>Host captivating virtual events, product launches, or networking opportunities that offer immersive experiences to attendees around the globe. We design spaces to facilitate real-time interaction, digital networking, and seamless communication among users.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Unity Engine",
                media: "/images/unity-engine.svg"
            },
            {
                name: "Unreal Engine",
                media: "/images/unreal-engine.svg"
            },
            {
                name: "Blender",
                media: "/images/blender.svg"
            },
            {
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
            {
                name: "Azure",
                media: "/images/azure.svg"
            },
            {
                name: "Spatial.io",
                media: "/images/spatialio.png"
            },
        ],
        action: {
            name: "Book a Meeting to Start Your Metaverse Journey",
            url: "/contact-us"
        }
    },
    {
        title: "Real Estate Metaverse Development",
        slug: "real-estate-metaverse-development",
        description: <>
            <p>Transform traditional real estate with immersive virtual experiences, interactive property showcases, and blockchain-based property investments.</p>
            <ul className="main-lists">
                <li>Virtual Property Showcases</li>
                <li>Tokenized Real Estate Investments</li>
                <li>Virtual City Replicas (e.g., Dubai)</li>
            </ul>
        </>,
        media: "/images/real-estate-metaverse-development.png",
        video: "/videos/real-estate-metaverse-development.mp4",
        herotext: <><strong>Virtual Real </strong> <span className="text-[#50a6d7]">Estate</span> <span className="text-[#f5daed]">Solutions</span> <span className="text-[#b9e6e9]">Redefined</span></>,
        introduction: "Elchai transforms traditional real estate by creating immersive virtual property experiences. From lifelike virtual tours to blockchain-based tokenized investments, our metaverse solutions set a new standard for property marketing and transactions.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Real Estate Metaverse <span>Development</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Virtual Property Tours</h3>
                    <p>We create immersive 3D property tours allowing potential buyers to explore real estate projects from anywhere worldwide. Showcase detailed interiors, amenities, and interactive walkthroughs, significantly enhancing customer engagement and accelerating sales processes.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Tokenized Real Estate Investment</h3>
                    <p>Our blockchain experts develop secure platforms for fractional real estate ownership through tokenization, enabling broader market accessibility. Investors can seamlessly buy, sell, and manage property tokens, increasing liquidity, reducing transaction friction, and promoting transparency.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Detailed City Replicas</h3>
                    <p>Elchai specializes in meticulously crafted virtual replicas of iconic locations, such as Dubai’s Palm Jumeirah and Bluewaters Island. These cityscapes offer unique opportunities for real estate developers, investors, and tourism sectors, redefining virtual exploration and engagement.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Unity Engine",
                media: "/images/unity-engine.svg"
            },
            {
                name: "Unreal Engine",
                media: "/images/unreal-engine.svg"
            },
            {
                name: "Etheruem Blockchain",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "Polygon",
                media: "/images/polygon.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting to Explore Real Estate Metaverse Solutions",
            url: "/contact-us"
        }
    },
    {
        title: "Metaverse 3D Avatar & Space Development",
        slug: "metaverse-3d-avatar-and-space-development",
        description: <>
            <p>Create customized digital identities (avatars) and tailored immersive 3D spaces to elevate brand engagement and interaction in virtual worlds.</p>
            <ul className="main-lists">
                <li>Custom 3D Avatars</li>
                <li>Interactive Virtual Spaces</li>
                <li>Branded Metaverse Environments</li>
            </ul>
        </>,
        media: "/images/metaverse-3d-avatar-and-space-development.png",
        video: "/videos/metaverse-3d-avatar-and-space-development.mp4",
        herotext: <><strong>Personalized Avatars </strong> <span className="text-[#50a6d7]">&</span> <span className="text-[#f5daed]">Immersive</span> <span className="text-[#b9e6e9]">Spaces</span></>,
        introduction: "At Elchai, we empower your digital presence with custom-built avatars and tailored virtual environments. Enhance user interactions, brand presence, and immersive experiences through expertly designed avatars and engaging 3D spaces.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Metaverse 3D Avatar & <span>Space Development</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Custom 3D Avatar Creation</h3>
                    <p>We design unique, detailed avatars reflecting brand identity or personal style. Each avatar is meticulously crafted to enhance interaction, social engagement, and personalization in digital experiences, providing a deeper connection with your audience.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Interactive Virtual Spaces</h3>
                    <p>Create stunning virtual environments tailored to your brand vision, capable of hosting events, digital storefronts, or collaborative spaces. Each space we design ensures optimal interactivity, intuitive navigation, and immersive experiences for your users.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Avatar-Driven Engagement</h3>
                    <p>We integrate interactive avatars within immersive spaces, enabling meaningful user engagement, live interactions, and enhanced communication. This fosters active participation and long-term audience loyalty within your virtual community.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Unity Engine",
                media: "/images/unity-engine.svg"
            },
            {
                name: "Unreal Engine",
                media: "/images/unreal-engine.svg"
            },
            {
                name: "blender",
                media: "/images/blender.svg"
            },
            {
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting for Avatar & 3D Space Development",
            url: "/contact-us"
        }
    },
    {
        title: "Blockchain Development",
        slug: "blockchain-development",
        description: <>
            <p>Harness robust blockchain solutions tailored specifically for your business to enhance transparency, security, and operational efficiency.</p>
            <ul className="main-lists">
                <li>Custom Blockchain Platforms</li>
                <li>Smart Contract Development</li>
                <li>Enterprise Blockchain Solutions</li>
                <li>Supply Chain Blockchain Solutions</li>
            </ul>
        </>,
        media: "/images/blockchain-development.png",
        video: "/videos/blockchain-development.mp4",
        herotext: <><strong>Advanced Blockchain Solutions </strong> <span className="text-[#50a6d7]">Tailored</span> <span className="text-[#f5daed]">for Your</span> <span className="text-[#b9e6e9]">Business</span></>,
        introduction: "Elchai develops robust blockchain solutions designed to enhance your business transparency, security, and operational efficiency. From custom blockchain networks to smart contracts, we empower your operations through decentralized technology.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Blockchain <span>Development</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Custom Blockchain Platforms</h3>
                    <p>We build scalable, secure, and tailored blockchain platforms, specifically aligned with your business objectives. Our solutions streamline your workflows, enhance security, and facilitate transparency throughout your operations.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Smart Contract Development</h3>
                    <p>Automate processes securely and efficiently with our custom smart contract development services. We create robust smart contracts that reduce operational risks, eliminate intermediaries, and enhance compliance across your business processes.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Enterprise & Supply Chain Solutions</h3>
                    <p>Implement blockchain solutions to optimize supply chain operations, ensure data integrity, and facilitate seamless transactions. Our enterprise-grade blockchain solutions offer unmatched transparency and traceability in complex business ecosystems.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum Blockchain",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Binance Smart Chain",
                media: "/images/binance.svg"
            },
            {
                name: "Solana",
                media: "/images/solana.svg"
            },
            {
                name: "Polygon",
                media: "/images/polygon.svg"
            },
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
        ],
        action: {
            name: "Book a Meeting for Custom Blockchain Solutions",
            url: "/contact-us"
        }
    },
    {
        title: "Coin Development",
        slug: "coin-development",
        description: <>
            <p>Secure, compliant, and innovative crypto coin development solutions designed to suit your specific business needs and goals.</p>
            <ul className="main-lists">
                <li>ICO/IDO Development</li>
                <li>Asset Tokenization</li>
                <li>Stablecoin & Security Token Development</li>
                <li>Crypto Asset Management</li>
            </ul>
        </>,
        media: "/images/coin-development.png",
        video: "/videos/coin-development.mp4",
        herotext: <><strong>Custom Cryptocurrency Solutions </strong> <span className="text-[#50a6d7]">Built</span> <span className="text-[#f5daed]">for Your</span> <span className="text-[#b9e6e9]">Business</span></>,
        introduction: "Elchai offers comprehensive coin and token development solutions designed for secure, compliant, and efficient cryptocurrency management. From ICO launches to asset tokenization, we enable your business to seamlessly integrate digital currencies.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Coin <span>Development</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">ICO & IDO Launch Solutions</h3>
                    <p>We assist businesses in planning, developing, and launching secure ICO and IDO campaigns. Our experts ensure regulatory compliance, robust security, and effective marketing strategies, helping you attract investors and raise capital effectively.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Asset Tokenization</h3>
                    <p>Convert traditional assets like real estate, art, or commodities into blockchain-based digital tokens. Tokenization enhances liquidity, facilitates fractional ownership, and provides transparent and secure management of valuable assets.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Stablecoin & Security Token Development</h3>
                    <p>We develop secure, stable cryptocurrencies pegged to fiat currencies or commodities, ideal for reducing volatility. Additionally, our security tokens meet regulatory requirements, providing secure, compliant, and transparent investment instruments.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "Ethereum Blockchain",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Binance Smart Chain",
                media: "/images/binance.svg"
            },
            {
                name: "Polygon",
                media: "/images/polygon.svg"
            },
            {
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting to Develop Your Coin or Token",
            url: "/contact-us"
        }
    },
    {
        title: "Crypto Wallet Development",
        slug: "crypto-wallet-development",
        description: <>
            <p>Provide secure storage and seamless management of digital assets through custom-built crypto wallets for businesses and end-users.</p>
            <ul className="main-lists">
                <li>Hot & Cold Wallet Solutions</li>
                <li>Centralized & Decentralized Wallets</li>
                <li>Multicurrency Wallet Development</li>
            </ul>
        </>,
        media: "/images/crypto-wallet-development.png",
        video: "/videos/crypto-wallet-development.mp4",
        herotext: <><strong>Secure Your Digital Assets</strong> <span className="text-[#50a6d7]">with</span> <span className="text-[#f5daed]">Advanced</span> <span className="text-[#b9e6e9]">Wallets</span></>,
        introduction: "Elchai designs and develops advanced cryptocurrency wallets that offer unmatched security and seamless asset management. Our wallet solutions include hot, cold, centralized, decentralized, and multicurrency wallets tailored to user needs.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Crypto Wallet <span>Development</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Secure Wallet Solutions</h3>
                    <p>We build industry-leading crypto wallets with multi-layered encryption, secure key management, and regular security audits. Protect your assets against hacks and theft while ensuring easy access and usability.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Centralized & Decentralized Wallets</h3>
                    <p>Choose between centralized wallets with robust custodial services or decentralized wallets that put full control directly in users’ hands. Our decentralized solutions prioritize user autonomy, privacy, and security.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Multicurrency Integration</h3>
                    <p>Our wallets support a wide range of cryptocurrencies, ensuring effortless management and seamless transactions across multiple blockchain networks from one secure platform.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "Ethereum Blockchain",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
            {
                name: "Kotlin",
                media: "/images/kotlin.svg"
            },
            {
                name: "Swift",
                media: "/images/swift.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting for Custom Crypto Wallet Development",
            url: "/contact-us"
        }
    },
    {
        title: "AI Development Services",
        slug: "ai-development-services",
        description: <>
            <p>Incorporate powerful AI-driven solutions for smarter decision-making, streamlined operations, and intelligent automation.</p>
            <ul className="main-lists">
                <li>Machine Learning & Predictive Analytics</li>
                <li>Generative AI Development</li>
                <li>Robotic Process Automation (RPA)</li>
                <li>Custom AI Solutions & Integrations</li>
            </ul>
        </>,
        media: "/images/metaverse-integration-solutions.png",
        video: "/videos/metaverse-integration-solutions.mp4",
        herotext: <><strong>Empowering Businesses through</strong> <span className="text-[#50a6d7]">Intelligent</span> <span className="text-[#f5daed]">AI</span> <span className="text-[#b9e6e9]">Solutions</span></>,
        introduction: "Elchai harnesses artificial intelligence to optimize your operations, enhance decision-making, and drive innovation. Our customized AI solutions enable intelligent automation, predictive insights, and data-driven growth.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">AI Development <span>Services</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Machine Learning & Predictive Analytics</h3>
                    <p>Our machine learning solutions analyze vast datasets to deliver actionable insights, helping you forecast trends, improve efficiency, and make strategic business decisions with confidence.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Generative AI & Automation</h3>
                    <p>Automate your business processes with generative AI, streamlining content creation, customer interactions, and routine tasks. Our automation solutions increase productivity and operational efficiency across your organization.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Custom AI Integrations</h3>
                    <p>We integrate advanced AI technologies seamlessly within your existing infrastructure, enhancing your workflows, data management, and business intelligence to give your organization a competitive edge.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Python",
                media: "/images/python.svg"
            },
            {
                name: "TensorFlow",
                media: "/images/tensorflow.svg"
            },
            {
                name: "PyTorch",
                media: "/images/pytorch.svg"
            },
            {
                name: "OpenAI",
                media: "/images/openai.svg"
            },
            {
                name: "AzureAI",
                media: "/images/azure.svg"
            },
            {
                name: "AWS SageMaker",
                media: "/images/aws-sagemaker.svg"
            },
        ],
        action: {
            name: "Book a Meeting for AI-Driven Business Solutions",
            url: "/conatct-us"
        }
    },
    {
        title: "Decentralized Identifiers (DIDs)",
        slug: "decentralized-identifiers-dids",
        description: <>
            <p>Empower secure and decentralized identity management, giving users control of their digital identities without compromising security.</p>
            <ul className="main-lists">
                <li>Decentralized Identity Management</li>
                <li>Blockchain-Based DIDs</li>
                <li>Identity Verification & Authentication</li>
            </ul>
        </>,
        media: "/images/decentralized-identifiers-dids.png",
        video: "/videos/decentralized-identifiers-dids.mp4",
        herotext: <><strong>Secure Digital Identities</strong> <span className="text-[#50a6d7]">with</span> <span className="text-[#f5daed]">Decentralized</span> <span className="text-[#b9e6e9]">Solutions</span></>,
        introduction: "Elchai enables secure, user-controlled digital identities through Decentralized Identifiers (DIDs), empowering individuals with privacy and seamless identity management using blockchain technology.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Decentralized Identifiers <span>(DIDs)</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Decentralized Identity Management</h3>
                    <p>Our decentralized solutions give users complete ownership and control of their digital identities, enhancing privacy, security, and trust across digital platforms and transactions.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Blockchain-Based Authentication</h3>
                    <p>Implement blockchain-powered authentication systems that verify identities securely and transparently, reducing fraud and enhancing trust for businesses and consumers.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">User Privacy & Compliance</h3>
                    <p>We provide DID solutions ensuring compliance with global privacy regulations (e.g., GDPR), allowing businesses to securely manage identity verification processes without compromising user privacy.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Polygon",
                media: "/images/polygon.svg"
            },
            {
                name: "Hyperledger Indy",
                media: "/images/hyperledger.svg"
            },
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting for Decentralized Identity Solutions",
            url: "/contact-us"
        }
    },
    {
        title: "Central Bank Digital Currencies (CBDCs)",
        slug: "central-bank-digital-currencies-cbdcs",
        description: <>
            <p>Support central banks and financial institutions with secure and efficient digital currency solutions using advanced blockchain technology.</p>
            <ul className="main-lists">
                <li>CBDC Infrastructure Development</li>
                <li>Digital Currency Management Platforms</li>
                <li>Secure & Compliant CBDC Solutions</li>
            </ul>
        </>,
        media: "/images/central-bank-digital-currencies-cbdcs.png",
        video: "/videos/central-bank-digital-currencies-cbdcs.mp4",
        herotext: <><strong>Innovative &</strong> <span className="text-[#50a6d7]">Compliant</span> <span className="text-[#f5daed]">CBDC</span> <span className="text-[#b9e6e9]">Solutions</span></>,
        introduction: "Elchai supports financial institutions with secure, efficient, and compliant Central Bank Digital Currency solutions. From issuance to management, our platforms ensure seamless integration and robust security.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">Central Bank Digital Currencies <span>(CBDCs)</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">CBDC Infrastructure Development</h3>
                    <p>We develop advanced blockchain-based CBDC platforms ensuring secure currency issuance, transparent transactions, and efficient management aligned with regulatory standards.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Secure Transaction Platforms</h3>
                    <p>Provide secure and transparent platforms that facilitate seamless CBDC transactions, supporting financial stability, improved traceability, and enhanced public trust.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Regulatory Compliance & Management</h3>
                    <p>Our solutions ensure full compliance with relevant financial regulations, enabling central banks to confidently manage digital currencies within existing monetary frameworks.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Hyperledger Fabric",
                media: "/images/fabric.svg"
            },
            {
                name: "Ethereum",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "Java",
                media: "/images/java.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting for CBDC Development",
            url: "/contact-us"
        }
    },
    {
        title: "DeFi/CeFi/CeDeFi Solutions",
        slug: "deficeficedefi-solutions",
        description: <>
            <p>Offer groundbreaking decentralized and hybrid finance solutions that bridge traditional and digital finance effectively and securely.</p>
            <ul className="main-lists">
                <li>Decentralized Finance (DeFi) Platforms</li>
                <li>Centralized Finance (CeFi) Integration</li>
                <li>Hybrid CeDeFi Solutions</li>
                <li>Crypto Lending & P2P Solutions</li>
            </ul>
        </>,
        media: "/images/deficeficedefi-solutions.png",
        video: "/videos/deficeficedefi-solutions.mp4",
        herotext: <><strong>Bridging Traditional</strong> <span className="text-[#50a6d7]">&</span> <span className="text-[#f5daed]">Decentralized</span> <span className="text-[#b9e6e9]">Finance</span></>,
        introduction: "Elchai provides comprehensive decentralized finance (DeFi), centralized finance (CeFi), and hybrid (CeDeFi) solutions, enabling businesses to benefit from blockchain's advantages while maintaining ease of use and regulatory compliance.",
        content: <>
            <h2 className="main-title mb-4 lg:mb-16">DeFi/CeFi/CeDeFi <span>Solutions</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Decentralized Finance (DeFi)</h3>
                    <p>We build transparent, secure decentralized platforms for peer-to-peer lending, yield farming, decentralized exchanges (DEX), and automated market makers (AMM), revolutionizing traditional financial operations.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Centralized Finance (CeFi) Integration</h3>
                    <p>Seamlessly integrate blockchain technology into traditional centralized finance systems, enhancing operational efficiency, security, and accessibility for users accustomed to conventional financial products.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Hybrid CeDeFi Solutions</h3>
                    <p>Our innovative hybrid CeDeFi platforms blend decentralized transparency and efficiency with centralized usability, compliance, and familiarity, creating a balanced, user-friendly financial ecosystem.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Binance",
                media: "/images/binance.svg"
            },
            {
                name: "Solidity",
                media: "/images/solidity.svg"
            },
            {
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "NodeJS",
                media: "/images/nodejs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        action: {
            name: "Book a Meeting for Your Finance Solutions",
            url: "/contact-us"
        }
    },
] 