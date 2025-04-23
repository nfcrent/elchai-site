import type { Metadata } from "next";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaChevronCircleRight } from "react-icons/fa";
import { getSiteData } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Elchai Support | AI, Metaverse & Blockchain Technical Help",
    description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
    keywords: "AI and Blockchain Support, Metaverse Support, Web3 Support, Technical Assistance, Elchai Support, Crypto Wallet Setup, Metaverse Access",
    openGraph: {
        title: "Elchai Support | AI, Metaverse & Blockchain Technical Help",
        description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
        url: `${getSiteData().siteUrl}/support`,
        type: "website",
        images: [
            {
                url: getSiteData().defaultOg,
                width: 1200,
                height: 630,
                alt: "Elchai Support Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elchai Support | AI, Metaverse & Blockchain Technical Help",
        description: "Get expert support for AI, Metaverse, Blockchain, and Web3 solutions. Access FAQs, documentation, and fast assistance from the Elchai technical team.",
        images: getSiteData().defaultOg,
    },
};

const SupportPage = () => {
    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">Contact Support</h1>
                    <div className="pt-16 space-y-8">
                        <p>If you encounter technical issues, require assistance, or have questions about our services, please reach out directly:</p>
                        <div>
                            <p><strong>Email Support:</strong> <a href="mailto:support@elchaigroup.com" className="text-eblue">support@elchaigroup.com</a></p>
                            <p><strong>Ticket System:</strong> Submit a Support Ticket (link to your ticket submission portal if available)
                            </p>
                            <p><strong>Support Hotline:</strong> [+ (country code) (phone number)] (if applicable)
                            </p>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Troubleshooting & FAQs</h2>
                            <p>Below are answers to frequently asked questions to help resolve common issues quickly:</p>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. How do I access my Elchai Metaverse space?</AccordionTrigger>
                                    <AccordionContent>Log into your universe eye account through our platform using your registered email and password. Navigate to your dashboard, and select your metaverse project.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. I’ve forgotten my password. How can I reset it?</AccordionTrigger>
                                    <AccordionContent>Click on "Forgot Password" at the login page. Enter your registered email address, and follow the reset link sent to your inbox.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. How can I report a technical issue or bug?</AccordionTrigger>
                                    <AccordionContent>Submit a detailed support ticket describing the issue, including screenshots and steps to reproduce the problem.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. How do I set up my Crypto Wallet or connect it to Elchai's platform?</AccordionTrigger>
                                    <AccordionContent>Follow our detailed guide here (link to crypto wallet documentation), or contact support for step-by-step assistance.</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Documentation & Helpful Guides</h2>
                            <p>Explore comprehensive documentation and tutorials created by our experts:</p>
                            <ul>
                                <li>Beginners’ Guide to the Metaverse</li>
                                <li>Setting Up and Securing Your Crypto Wallet</li>
                                <li>Integrating Your Brand into the Metaverse</li>
                                <li>Understanding Real Estate Tokenization</li>
                            </ul>
                            <a href="/" target="_blank" className="btn btn-main">View All Documentation <FaChevronCircleRight /></a>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Expected Response Time</h2>
                            <p>We aim to respond to all support inquiries swiftly:</p>
                            <ul>
                                <li>General Inquiries: Within 24 hours (business days)</li>
                                <li>Technical Support: Within 12 hours</li>
                                <li>Urgent Issues & Premium Clients: Within 4 hours</li>
                            </ul>
                            <p>Our dedicated support team operates from Monday to Friday (9 AM to 6 PM local time)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportPage