import { getSiteData } from "@/lib/utils";

export const metadata = {
    title: "Elchai | Terms of Use",
    description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
    keywords: "Elchai Terms of Use, User Obligations, Intellectual Property, Limitation of Liability, Governing Law, Metaverse Services, Blockchain Services",
    openGraph: {
      title: "Elchai | Terms of Use",
      description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
      url: `${getSiteData().siteUrl}/terms`,
      type: "website",
      images: [
        {
          url: getSiteData().defaultOg,
          width: 1200,
          height: 630,
          alt: "Elchai Terms of Use",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Elchai | Terms of Use",
      description: "Review the Terms of Use for Elchai Group's website, metaverse platforms, applications, and services. Understand user obligations, liability, intellectual property, and more.",
      images: getSiteData().defaultOg,
    },
  };

const TermsPage = () => {
    return (
        <>
            <div className="pt-36 pb-16">
                <div className="main-container">
                    <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">Elchai Terms of Use</h1>
                    <div className="pt-16 space-y-8">
                        <p className="italic">Last Updated: [Insert Date]</p>
                        <p>Welcome to Elchai Group. By accessing or using our website, metaverse platforms, applications, or other provided services (collectively, the “Services”), you agree to be bound by these Terms of Use ("Terms"). Please read them carefully.</p>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>1. User Obligations</h2>
                            <p>By using Elchai’s Services, you agree:</p>
                            <ul>
                                <li>To use the Services lawfully and responsibly.</li>
                                <li>Not to misuse or interfere with the proper functioning of our platforms.</li>
                                <li>To provide accurate and complete information upon registration or when requested.</li>
                                <li>To maintain confidentiality and security of your account details.</li>
                                <li>Not to engage in any harmful, abusive, or disruptive behavior within our platforms.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>2. Limitation of Liability</h2>
                            <h3>Elchai shall not be liable for:</h3>
                            <ul>
                                <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our Services.</li>
                                <li>Any unauthorized access, loss of data, or interruption of Services.</li>
                                <li>Communicate updates, news, promotional materials, or other information you’ve opted into.</li>
                                <li>Errors, inaccuracies, or omissions within our platforms or third-party integrations.</li>
                                <li>Actions or content of other users or third parties.</li>
                            </ul>
                            <p>Elchai’s liability under these terms, where applicable, shall be limited to the fullest extent permitted by law.</p>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>3. Intellectual Property</h2>
                            <ul>
                                <li>All content, trademarks, logos, designs, graphics, software, and other intellectual property provided by Elchai remain the exclusive property of Elchai or respective rights holders.</li>
                                <li>Users are granted a limited, revocable, non-exclusive license to access and use the Services strictly for personal or internal business purposes.</li>
                                <li>You agree not to copy, reproduce, distribute, modify, or create derivative works without explicit written consent from Elchai.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>4. Governing Law</h2>
                            <ul>
                                <li>These Terms of Use shall be governed by and interpreted according to the laws of [insert jurisdiction/country]</li>
                                <li>You agree to the exclusive jurisdiction and venue of the courts located within [jurisdiction/country] for resolving any disputes arising from these Terms or your use of the Services.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>5. Termination of Use</h2>
                            <ul>
                                <li>Elchai reserves the right to suspend or terminate your access to our Services at any time, without prior notice, if you violate these Terms.</li>
                                <li>Upon termination, your right to access our platforms and related content will immediately cease.</li>
                                <li>You may terminate your account or use of Services at any time by contacting support.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>6. Modifications to Terms</h2>
                            <ul>
                                <li>Elchai reserves the right to update or modify these Terms at any time.</li>
                                <li>Changes will be effective upon posting to this page, and it is your responsibility to regularly review these Terms.</li>
                                <li>Continued use of our Services after modifications constitutes acceptance of updated Terms.</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl content">
                            <h2>7. Contact Information</h2>
                            <p>For questions, concerns, or clarifications regarding these Terms, please contact us:</p>
                            <div>
                                <p><strong>Email:</strong> <a href="mailto:info@elchaigroup.com">info@elchaigroup.com</a></p>
                                <p><strong>Address:</strong> [Insert Official Address]</p>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
        </>
    )
}

export default TermsPage