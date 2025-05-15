import { getSiteData } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Elchai | Privacy Policy",
    description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
    keywords: "Elchai Privacy Policy, Data Protection, Personal Information, User Rights, Cookies, Data Security, Blockchain Privacy",
    openGraph: {
        title: "Elchai | Privacy Policy",
        description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
        url: `${getSiteData().siteUrl}/privacy`,
        type: "website",
        images: [
            {
                url: getSiteData().defaultOg,
                width: 1200,
                height: 630,
                alt: "Elchai Privacy Policy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Elchai | Privacy Policy",
        description: "Learn how Elchai collects, uses, and protects your personal information. Understand your rights and our commitment to safeguarding your data.",
        images: getSiteData().defaultOg,
    },
};

const PrivacyPolicyPage = () => {
    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">Privacy Policy</h1>
                    <div className="pt-16 space-y-8">
                        <p className="italic">Last Updated: [Insert Date]</p>
                        <p><strong>Elchai</strong> ("we," "us," or "our") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.</p>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>1. Information Collected</h2>
                            <p>We may collect the following types of information:</p>
                            <h3>Personal Information:</h3>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Contact number</li>
                                <li>Company details (if provided)</li>
                            </ul>
                            <h3>Usage Information:</h3>
                            <ul>
                                <li>Browser type and version</li>
                                <li>Device type</li>
                                <li>IP address</li>
                                <li>Pages visited on our website</li>
                                <li>Date and time of visits</li>
                            </ul>
                            <h3>Information Provided Voluntarily:</h3>
                            <ul>
                                <li>Data submitted through contact forms or subscriptions.</li>
                                <li>Information provided during inquiries, support requests, or feedback.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>2. How Data is Used</h2>
                            <h3>We use the information collected to:</h3>
                            <ul>
                                <li>Provide and enhance our services.</li>
                                <li>Respond to your inquiries and customer service requests.</li>
                                <li>Communicate updates, news, promotional materials, or other information you’ve opted into.</li>
                                <li>Analyze website usage to improve user experience.</li>
                                <li>Ensure compliance with applicable laws and regulations.</li>
                            </ul>

                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>3. Cookies & Tracking</h2>
                            <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user interactions.
                            </p>
                            <h3>Types of cookies we use:</h3>
                            <ul>
                                <li><strong>Necessary Cookies:</strong> Essential for website functionality.</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand user interactions to improve our website.</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                            </ul>
                            <p>You can control cookie settings through your browser preferences. Disabling cookies may impact your user experience.</p>

                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>4. User Rights</h2>
                            <p>You have the following rights regarding your data:</p>
                            <ul>
                                <li><strong>Access:</strong> Request access to your personal data.</li>
                                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
                                <li><strong>Objection:</strong> Object to processing or use of your data.</li>
                                <li><strong>Withdrawal:</strong> Withdraw your consent to data processing at any time.</li>
                            </ul>
                            <p>To exercise any of these rights, please contact us at [privacy@elchaigroup.com].</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>5. Data Retention</h2>
                            <p>We retain your personal information only as long as necessary to provide our services or fulfill purposes outlined in this policy. Additionally, we may retain and use your information to comply with legal obligations, resolve disputes, or enforce agreements.</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>6. Security of Your Data</h2>
                            <p>We implement robust security measures designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We regularly update our security protocols to ensure compliance with industry standards.</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>7. Third-Party Links</h2>
                            <p>Our website may include links to external sites not operated by us. We are not responsible for third-party privacy practices. We recommend reviewing the privacy policies of any external websites you visit.</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>8. Changes to This Privacy Policy</h2>
                            <p>We reserve the right to update or modify this Privacy Policy at any time. We will notify you about significant changes through email or by prominently posting a notice on our website. We encourage regular review of this policy for the latest information on our privacy practices.</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>9. Contact for Privacy Questions</h2>
                            <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your data, please contact us at:</p>
                            <div>
                                <p><strong>Email:</strong> <a href="tel:info@elchaigroup.com">info@elchaigroup.com</a></p>
                                <p><strong>Address:</strong> <a href="#">[Insert Elchai’s Official Business Address]</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PrivacyPolicyPage