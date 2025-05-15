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
    title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
    description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
    keywords: "AI Community Guidelines, Metaverse Community, Blockchain Community, Elchai Community Rules, Respectful Collaboration, Digital Safety",
    openGraph: {
        title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
        description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
        url: `${getSiteData().siteUrl}/community-rules`,
        type: "website",
        images: [
            {
                url: getSiteData().defaultOg,
                width: 1200,
                height: 630,
                alt: "Elchai Community Guidelines",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elchai Community Guidelines | AI, Metaverse & Blockchain Hub",
        description: "Join Elchai's AI-focused community—review our guidelines promoting respectful collaboration, diversity, innovation, and a safe digital environment.",
        images: getSiteData().defaultOg,
    },
};

const CommunityRules = () => {
    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text max-w-3xl mx-auto">Elchai Community Rules & Guidelines</h1>
                    <div className="pt-16 space-y-8">
                        <p>Welcome to Elchai's vibrant community! We encourage collaboration, creativity, and respectful interactions among our community members. Please familiarize yourself with our community guidelines below.</p>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Positive Engagement & Respect</h2>
                            <p>We value an inclusive, welcoming environment for everyone. When engaging within our community:</p>
                            <ul>
                                <li>Treat others with kindness, respect, and courtesy.</li>
                                <li>Foster constructive conversations and feedback.</li>
                                <li>Welcome and support new members.</li>
                                <li>Encourage diversity, tolerance, and inclusion.</li>
                                <li>Respect intellectual property and copyrights.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Prohibited Behavior</h2>
                            <p>To maintain a safe and healthy community, the following behaviors are strictly prohibited:</p>
                            <ul>
                                <li>Harassment, bullying, threats, or abusive language.</li>
                                <li>Discrimination based on race, ethnicity, gender identity, sexual orientation, religion, disability, age, or nationality.</li>
                                <li>Spamming or flooding channels with irrelevant content or advertisements.
                                </li>
                                <li>Sharing inappropriate or offensive materials (e.g., explicit content, violence, hate speech).</li>
                                <li>Attempting to disrupt, hack, or exploit community platforms.</li>
                                <li>Misrepresentation, impersonation, or deceptive practices.</li>
                            </ul>
                            <p>Violation of these guidelines may result in warnings, suspension, or permanent removal from the community.</p>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>Moderation Policies</h2>
                            <p>Our community moderators work diligently to ensure a respectful environment:</p>
                            <ul>
                                <li>Moderators may edit, remove, or lock posts or discussions that violate guidelines.</li>
                                <li>Moderators may issue warnings for minor violations and escalate to suspensions or bans for repeated or severe offenses.</li>
                                <li>Decisions made by moderators are final; however, you can respectfully appeal or inquire about moderation decisions by contacting us directly.</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>How to Report Issues</h2>
                            <p>If you witness inappropriate behavior, violations, or have safety concerns:</p>
                            <ul>
                                <li>Immediately report the issue to our moderation team or community managers.</li>
                                <li>Provide clear details and screenshots (if possible) of the incident.</li>
                                <li>Report through direct messaging moderators or via email at <a href="mailto:community@elchaigroup.com">community@elchaigroup.com</a>.</li>
                            </ul>
                            <p>We take all reports seriously and will promptly investigate and take appropriate actions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityRules