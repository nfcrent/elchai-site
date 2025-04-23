export interface TechStackI {
    title: string
    description: string
    logos: Array<{
        name: string
        logo: string
    }>

}

export const TechStackData: TechStackI[] = [
    {
        title: "Blockchain Platforms",
        description: "We build robust, secure, and scalable blockchain solutions using industry-leading blockchain platforms that ensure security, decentralization, and optimal performance:",
        logos: [
            {
                name: "Ethereum",
                logo: "/images/ethereum-blockchain.svg"
            },
            {
                name: "Binance Smart Chain (BSC)",
                logo: "/images/binance.svg"
            },
            {
                name: "Solana",
                logo: "/images/solana.svg"
            },
            {
                name: "Polygon (Matic)",
                logo: "/images/polygon.svg"
            },
            {
                name: "Hyperledger Fabric",
                logo: "/images/fabric.svg"
            },
            {
                name: "Avalanche",
                logo: "/images/avalanche.svg"
            },
            {
                name: "Cardano",
                logo: "/images/cardano.svg"
            },
            {
                name: "Polkadot",
                logo: "/images/polkadot.svg"
            }
        ]
    },
    {
        title: "Programming Languages & Frameworks",
        description: "Our team of skilled developers employs powerful and versatile programming languages and frameworks to create responsive, efficient, and scalable applications:",
        logos: [
            {
                name: "JavaScript / Node.js",
                logo: "/images/nodejs.svg"
            },
            {
                name: "ReactJS",
                logo: "/images/reactjs.svg"
            },
            {
                name: "Python",
                logo: "/images/python.svg"
            },
            {
                name: "Solidity",
                logo: "/images/solidity.svg"
            },
            {
                name: "C#",
                logo: "/images/c-sharp.svg"
            },
            {
                name: "C++",
                logo: "/images/c-plus-plus.svg"
            },
            {
                name: "Java",
                logo: "/images/java.svg"
            },
            {
                name: "Kotlin",
                logo: "/images/kotlin.svg"
            },
            {
                name: "Swift (Mobile App Development)",
                logo: "/images/swift.svg"
            },
            {
                name: "Rust",
                logo: "/images/rust.svg"
            },
            {
                name: "PHP",
                logo: "/images/php.svg"
            },
            {
                name: "Golang",
                logo: "/images/golang.svg"
            }
        ]
    },
    {
        title: "Metaverse, AR, VR, MR & 3D Development Tools",
        description: "We use the latest tools and software to craft immersive, interactive, and high-quality metaverse and 3D experiences, pushing the boundaries of digital interaction:",
        logos: [
            {
                name: "Unity 3D",
                logo: "/images/unity-engine.svg"
            },
            {
                name: "Unreal Engine",
                logo: "/images/unreal-engine.svg"
            },
            {
                name: "Blender",
                logo: "/images/blender.svg"
            },
            {
                name: "Maya",
                logo: "/images/autodesk.svg"
            },
            {
                name: "3DS Max",
                logo: "/images/3ds-max.svg"
            },
            {
                name: "WebXR",
                logo: "/images/webxr.svg"
            },
            {
                name: "ARKit & ARCore",
                logo: "/images/arkit-arcore.svg"
            },
        ]
    },
    {
        title: "Artificial Intelligence & Machine Learning",
        description: "Our AI experts harness industry-leading frameworks and platforms, ensuring intelligent automation, predictive analytics, and next-gen AI solutions:",
        logos: [
            {
                name: "TensorFlow",
                logo: "/images/tensorflow.svg"
            },
            {
                name: "PyTorch",
                logo: "/images/pytorch.svg"
            },
            {
                name: "OpenAI",
                logo: "/images/openai.svg"
            },
            {
                name: "AWS SageMaker",
                logo: "/images/aws-sagemaker.svg"
            },
            {
                name: "Microsoft Azure AI",
                logo: "/images/azure.svg"
            },
            {
                name: "Google Cloud AI",
                logo: "/images/google-cloud.svg"
            },
        ]
    },
    {
        title: "IoT Technologies & Platforms",
        description: "Elchai integrates advanced IoT solutions to seamlessly connect devices, improve data collection, and drive smart, connected ecosystems:",
        logos: [
            {
                name: "AWS IoT",
                logo: "/images/aws.svg"
            },
            {
                name: "Azure IoT Hub",
                logo: "/images/azure.svg"
            },
            {
                name: "MQTT Protocol",
                logo: "/images/mqtt.svg"
            },
            {
                name: "Google Cloud IoT",
                logo: "/images/google-cloud.svg"
            },
            {
                name: "LoRaWAN",
                logo: "/images/lorawan.svg"
            },
            {
                name: "ZigBee",
                logo: "/images/zigbee.svg"
            },
        ]
    },
    {
        title: "Cloud & DevOps Technologies",
        description: "Our cloud engineers and DevOps experts ensure scalable, secure, and high-performance solutions, employing leading cloud and DevOps tools:",
        logos: [
            {
                name: "Amazon Web Services (AWS)",
                logo: "/images/aws.svg"
            },
            {
                name: "Microsoft Azure",
                logo: "/images/azure.svg"
            },
            {
                name: "Google Cloud Platform (GCP)",
                logo: "/images/google-cloud.svg"
            },
            {
                name: "Kubernetes",
                logo: "/images/kubernetes.svg"
            },
            {
                name: "Docker",
                logo: "/images/docker.svg"
            },
            {
                name: "Terraform",
                logo: "/images/hashicorp.svg"
            },
            {
                name: "Jenkins",
                logo: "/images/jenkins.svg"
            },
            {
                name: "GitLab CI/CD",
                logo: "/images/gitlab.svg"
            },
        ]
    },
    {
        title: "Security & Compliance",
        description: "Security remains our priority across every solution we develop. We utilize advanced security frameworks and compliance practices:",
        logos: [
            {
                name: "OWASP Standards",
                logo: "/images/logo1.svg"
            },
            {
                name: "Multi-layered Encryption",
                logo: "/images/logo2.svg"
            },
            /* {
                name: "Smart Contract Audits",
                logo: "/images/smart-contract.svg"
            },
            {
                name: "Penetration Testing & Vulnerability Assessment",
                logo: "/images/penetration.svg"
            },
            {
                name: "GDPR, HIPAA, ISO Compliance",
                logo: "/images/compliance.svg"
            },*/
        ] 
    }
]