import Image from "next/image"

interface TechStack {
    title: string
    description: string
    logos: { name: string, src: string }[]
}


export const TechStackLogos: Record<string, TechStack['logos']> = {
    blockchain: [
        {
            name: "Ethereum",
            src: "/images/ethereum-blockchain.svg"
        },
        {
            name: "Binance Smart Chain (BSC)",
            src: "/images/binance.svg"
        },
        {
            name: "Solana",
            src: "/images/solana.svg"
        },
        {
            name: "Polygon (Matic)",
            src: "/images/polygon.svg"
        },
        {
            name: "Hyperledger Fabric",
            src: "/images/fabric.svg"
        },
        {
            name: "Avalanche",
            src: "/images/avalanche.svg"
        },
        {
            name: "Cardano",
            src: "/images/cardano.svg"
        },
        {
            name: "Polkadot",
            src: "/images/polkadot.svg"
        }
    ],
    languages: [
        {
            name: "JavaScript / Node.js",
            src: "/images/nodejs.svg"
        },
        {
            name: "ReactJS",
            src: "/images/reactjs.svg"
        },
        {
            name: "Python",
            src: "/images/python.svg"
        },
        {
            name: "Solidity",
            src: "/images/solidity.svg"
        },
        {
            name: "C#",
            src: "/images/c-sharp.svg"
        },
        {
            name: "C++",
            src: "/images/c-plus-plus.svg"
        },
        {
            name: "Java",
            src: "/images/java.svg"
        },
        {
            name: "Kotlin",
            src: "/images/kotlin.svg"
        },
        {
            name: "Swift (Mobile App Development)",
            src: "/images/swift.svg"
        },
        {
            name: "Rust",
            src: "/images/rust.svg"
        },
        {
            name: "PHP",
            src: "/images/php.svg"
        },
        {
            name: "Golang",
            src: "/images/golang.svg"
        }
    ],
    metaverse: [
        {
            name: "Unity 3D",
            src: "/images/unity-engine.svg"
        },
        {
            name: "Unreal Engine",
            src: "/images/unreal-engine.svg"
        },
        {
            name: "Blender",
            src: "/images/blender.svg"
        },
        {
            name: "Maya",
            src: "/images/autodesk.svg"
        },
        {
            name: "3DS Max",
            src: "/images/3ds-max.svg"
        },
        {
            name: "WebXR",
            src: "/images/webxr.svg"
        },
        {
            name: "ARKit & ARCore",
            src: "/images/arkit-arcore.svg"
        },
    ],
    ai: [
        {
            name: "TensorFlow",
            src: "/images/tensorflow.svg"
        },
        {
            name: "PyTorch",
            src: "/images/pytorch.svg"
        },
        {
            name: "OpenAI",
            src: "/images/openai.svg"
        },
        {
            name: "AWS SageMaker",
            src: "/images/aws-sagemaker.svg"
        },
        {
            name: "Microsoft Azure AI",
            src: "/images/azure.svg"
        },
        {
            name: "Google Cloud AI",
            src: "/images/google-cloud.svg"
        },
    ],
    iot: [
        {
            name: "AWS IoT",
            src: "/images/aws.svg"
        },
        {
            name: "Azure IoT Hub",
            src: "/images/azure.svg"
        },
        {
            name: "MQTT Protocol",
            src: "/images/mqtt.svg"
        },
        {
            name: "Google Cloud IoT",
            src: "/images/google-cloud.svg"
        },
        {
            name: "LoRaWAN",
            src: "/images/lorawan.svg"
        },
        {
            name: "ZigBee",
            src: "/images/zigbee.svg"
        },
    ],
    cloud: [
        {
            name: "Amazon Web Services (AWS)",
            src: "/images/aws.svg"
        },
        {
            name: "Microsoft Azure",
            src: "/images/azure.svg"
        },
        {
            name: "Google Cloud Platform (GCP)",
            src: "/images/google-cloud.svg"
        },
        {
            name: "Kubernetes",
            src: "/images/kubernetes.svg"
        },
        {
            name: "Docker",
            src: "/images/docker.svg"
        },
        {
            name: "Terraform",
            src: "/images/hashicorp.svg"
        },
        {
            name: "Jenkins",
            src: "/images/jenkins.svg"
        },
        {
            name: "GitLab CI/CD",
            src: "/images/gitlab.svg"
        },
    ],
    security: [
        {
            name: "OWASP Standards",
            src: "/images/logo1.svg"
        },
        {
            name: "Multi-layered Encryption",
            src: "/images/logo2.svg"
        }
    ]
}

export function TechStackCard({ stack }: { stack: TechStack }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 tech-stack-item">
            <div className="flex items-center ts-first">
                <div className="space-y-6">
                    <h3 className="font-bold text-eblue text-xl uppercase">{stack.title}</h3>
                    <p className="max-w-[782px] mx-auto mb-8">{stack.description}</p>
                </div>
            </div>
            <div className="ts-second">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {stack.logos.map((logo, logoIndex) => (
                        <div key={logoIndex} className="flex items-center justify-center aspect-video rounded-3xl p-4 bg-white/5">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={200}
                                height={200}
                                className="aspect-video object-center object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

