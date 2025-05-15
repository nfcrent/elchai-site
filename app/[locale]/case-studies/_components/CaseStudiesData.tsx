import Image from 'next/image'

export interface CaseStudiesI {
    title: string
    subtitle?: string
    description: string
    image: string
    slug: string
    content?: React.ReactNode
    technologyStack?: Array<{
        name: string
        media: string
    }>
    actioninner?: {
        name: string
        url: string
    }
    action: {
        name: string
        url: string
    }
}

export const CaseStudiesData: CaseStudiesI[] = [
    {
        title:  'Tarality',
        subtitle: 'Comprehensive Crypto Ecosystem & Exchange Platform',
        description: 'Tarality provides a robust blockchain ecosystem including cryptocurrency exchange, trading, investment solutions, and crypto banking services. Learn how Elchai developed a secure, compliant, and versatile crypto infrastructure, strengthening Tarality’s position in the global blockchain marketplace.',
        image: '/images/tarality.webp',
        slug: 'tarality',
        content: <>
            <h2 className="main-title mb-16">Comprehensive Crypto Ecosystem & <span>Exchange Platform</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>Tarality sought to provide a comprehensive crypto ecosystem with trading, investment, and crypto banking features, powered by its native cryptocurrency, Taral.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai designed secure, scalable blockchain infrastructure enabling seamless trading, secure asset management, and compliant crypto banking integrations.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Successful launch of Tarality’s crypto ecosystem resulted in increased market adoption, streamlined user experience, and reinforced brand trust among global investors.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum",
                media: "/images/ethereum-blockchain.svg"
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
        actioninner: {
            name: "Book a Meeting to Develop Your Crypto Project",
            url: "/contact-us"
        },
        action: {
            name: 'View Case Study',
            url: '/case-studies/tarality'
        }
    },
    {
        title: 'Blyncc',
        subtitle: 'Advanced Blockchain-Based B2B Payment Solution',
        description: 'Blyncc revolutionized cross-border payments by implementing Elchai’s secure blockchain technology, resulting in instant, transparent, and cost-effective B2B transactions. Explore how we enhanced global financial interactions through decentralized innovation.',
        image: '/images/blyncc.webp',
        slug: 'blyncc',
        action: {
            name: 'View Case Study',
            url: '/case-studies/blyncc'
        },
        content: <>
            <h2 className="main-title mb-16">Blockchain-Powered Cross-Border <span>B2B Payments</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>Blyncc aimed to transform traditional B2B cross-border payments, making them faster, transparent, and secure through blockchain technology.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai developed a decentralized payment platform with integrated blockchain security, reducing transaction fees and delays significantly.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Enhanced payment transparency, increased transaction speed, and considerable cost savings have made Blyncc a preferred choice for global B2B businesses.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum",
                media: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Hyperledger",
                media: "/images/hyperledger.svg"
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
        actioninner: {
            name: "Book a Meeting to Transform Your Payment Solutions",
            url: "/contact-us"
        },
    },
    {
        title: 'BB-Estate',
        subtitle: 'Transforming Real Estate through Tokenization',
        description: 'BB-Estate partnered with Elchai to tokenize real estate assets, enabling fractional ownership, liquidity, and transparency in property investments. Discover how we made real estate more accessible and attractive to global investors.',
        image: '/images/bb-estate.webp',
        slug: 'bb-estate',
        action: {
            name: 'View Case Study',
            url: '/case-studies/bb-estate'
        },
        content: <>
            <h2 className="main-title mb-16">Digitizing Real Estate Investment <span>through Tokenization</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>BB-Estate sought innovative solutions to enhance liquidity, accessibility, and transparency in real estate investments.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai developed blockchain-based real estate tokenization, allowing fractional investments and secure management of digital property tokens.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Increased liquidity, global investor accessibility, and secure, transparent asset management significantly improved BB-Estate’s real estate investment portfolio.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Ethereum",
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
                name: "ReactJS",
                media: "/images/reactjs.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        actioninner: {
            name: "Book a Meeting for Real Estate Tokenization",
            url: "/contact-us"
        },
    },
    {
        title: 'Crypto eTrade',
        subtitle: 'Blockchain-Powered Digital Transformation for SMEs',
        description: 'Crypto eTrade enables small and medium-sized enterprises (SMEs) to embrace digital transformation via blockchain. Elchai developed solutions facilitating asset tokenization, enhancing operational transparency, and creating growth opportunities for SMEs worldwide.',
        image: '/images/crypto-etrade.webp',
        slug: 'crypto-etrade',
        action: {
            name: 'View Case Study',
            url: '/case-studies/crypto-etrade'
        },
        content: <>
            <h2 className="main-title mb-16">Empowering SMEs with <span>Blockchain Innovation</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>Crypto eTrade aimed to assist SMEs in their digital transformation, using blockchain technology to tokenize assets and increase transparency.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai delivered blockchain solutions that enabled seamless asset tokenization and secure, transparent tracking for SMEs globally.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Enhanced transparency, operational efficiency, and digital readiness empowered numerous SMEs to thrive in the digital economy.</p>
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
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        actioninner: {
            name: "Book a Meeting to Digitize Your Business",
            url: "/contact-us"
        },
    },
    {
        title: 'Fintex',
        subtitle: 'Secure Multi-chain Crypto Wallet Development',
        description: 'Fintex is a secure, multi-chain crypto wallet that allows users to store, manage, and transact across various cryptocurrencies seamlessly. Elchai’s expert wallet development ensured security, ease of use, and robust performance, enhancing Fintex’s market competitiveness.',
        image: '/images/fintex.webp',
        slug: 'fintex',
        action: {
            name: 'View Case Study',
            url: '/case-studies/fintex'
        },
        content: <>
            <h2 className="main-title mb-16">Securing Digital Assets with <span>Multi-chain Wallets</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>Fintex required secure, easy-to-use wallets supporting multiple blockchains for effective cryptocurrency management.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai developed advanced wallet solutions incorporating robust security measures, seamless multi-chain integration, and intuitive UI/UX designs.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Significant growth in user adoption, increased user trust, and improved user experience elevated Fintex’s position in the crypto wallet market.</p>
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
        actioninner: {
            name: "Book a Meeting for Crypto Wallet Development",
            url: "/contact-us"
        },
    },
    {
        title: 'Flexcube',
        subtitle: 'Immersive AR Experiences for Sports Engagement',
        description: 'Flexcube leveraged Elchai’s expertise in augmented reality (AR) to create engaging, immersive sports experiences. Discover how our AR solutions boosted fan engagement, loyalty, and interaction across sports communities.',
        image: '/images/flexcube.webp',
        slug: 'flexcube',
        action: {
            name: 'View Case Study',
            url: '/case-studies/flexcube'
        },
        content: <>
            <h2 className="main-title mb-16">AR Innovation Enhancing <span>Sports Fan Experiences</span></h2>
            <div className="space-y-8 service-content-container mb-16">
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/metaverse.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Overview:</h3>
                    <p>Flexcube aimed to build immersive fan experiences through innovative AR-based interactions.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/artificial-intelligence.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Challenges & Solutions:</h3>
                    <p>Elchai delivered a customizable AR platform, creating real-time fan engagement, interactive content, and immersive sports experiences.</p>
                </div>
                <div className="service-content-item">
                    <div className="service-content-icon">
                        <Image src={'/images/vr-glasses.svg'} alt={''} width={320} height={320} />
                    </div>
                    <h3 className="font-bold uppercase text-epurple mb-3">Results:</h3>
                    <p>Increased fan engagement, loyalty, and brand visibility positioned Flexcube as a leading innovator in AR-driven sports entertainment.</p>
                </div>
            </div>
        </>,
        technologyStack: [
            {
                name: "Unity 3D",
                media: "/images/unity-engine.svg"
            },
            {
                name: "Unreal Engine",
                media: "/images/unreal-engine.svg"
            },
            {
                name: "Arkit, ARcore",
                media: "/images/arkit-arcore.svg"
            },
            {
                name: "AWS",
                media: "/images/aws.svg"
            },
        ],
        actioninner: {
            name: "Book a Meeting for AR Development Solutions",
            url: "/contact-us"
        },
    },
]