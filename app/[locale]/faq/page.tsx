import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSiteData } from "@/lib/utils";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Elchai | Frequently Asked Questions (FAQ)",
  description:
    "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
  keywords:
    "Elchai FAQ, AI Services, Metaverse Access, Blockchain Security, AR VR MR, Pricing and Timelines, Web3 Solutions",
  openGraph: {
    title: "Elchai | Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
    url: `${getSiteData().siteUrl}/faq`,
    type: "website",
    images: [
      {
        url: getSiteData().defaultOg,
        width: 1200,
        height: 630,
        alt: "Elchai FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elchai | Frequently Asked Questions (FAQ)",
    description:
      "Find answers to common questions about Elchai's AI, Metaverse, Blockchain, and Web3 services. Learn how to get started, pricing, security, and more.",
    images: getSiteData().defaultOg,
  },
};

export default async function FaqPage() {
  const t = await getTranslations("FAQ");
  let items = t.raw("items") as { question: string; answer: string }[];
  return (
    <>
      {" "}
      <div className="pt-36 pb-16">
        <div className="main-container">
          <h1 className="text-5xl text-center font-bold bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">
            {t("title")}
          </h1>
          <p className="text-center p-3">{t("description")}</p>
          <div className="pt-16 space-y-8">
            <div className="border border-white/20 p-6 rounded-2xl content">
              <Accordion type="single" collapsible className="w-full">
                {items.map((faq, i) => (
                  <AccordionItem value={i + faq.question} key={i + 1}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div>
                <h3 className="mb-2">{t("footerTitle")}</h3>
                <p>{t("footerDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*

                            <AccordionItem value="item-2">
                                <AccordionTrigger>2. What’s the Difference Between AR, VR, and MR?</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li><strong>AR (Augmented Reality):</strong> Enhances the real-world environment by overlaying digital content.</li>
                                        <li><strong>VR (Virtual Reality):</strong> Provides a fully immersive digital environment, entirely separate from the real world.</li>
                                        <li><strong>MR (Mixed Reality):</strong> Combines elements of AR and VR, blending real-world and digital interactions seamlessly.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>3. How Secure Are Elchai’s Blockchain Solutions?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Elchai prioritizes robust security in all blockchain solutions:</p>
                                    <ul>
                                        <li>Employing industry-leading blockchain security protocols.</li>
                                        <li>Regular security audits and testing.</li>
                                        <li>Secure smart-contract development practices.</li>
                                        <li>Institutional-grade encryption methods.</li>
                                    </ul>
                                    <p>We ensure your blockchain solutions are secure, reliable, and transparent.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>4. How to Access Metaverse Projects?</AccordionTrigger>
                                <AccordionContent>
                                    <p>Accessing your metaverse projects with Elchai is straightforward:</p>
                                    <ul>
                                        <li>Log in using credentials on the login page in universe eye.</li>
                                        <li>Access your dashboard to manage your projects.</li>
                                        <li>Explore and interact with your customized 3D virtual spaces and avatars.</li>
                                    </ul>
                                    <p>For detailed guidance, refer to our Metaverse Integration Guide.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>5. Pricing & Delivery Timelines</AccordionTrigger>
                                <AccordionContent>
                                    <p>Pricing and delivery timelines depend on project complexity and requirements:</p>
                                    <ul>
                                        <li>Typical project timelines range from <strong>20 to 28 weeks</strong>.</li>
                                        <li>Pricing is provided transparently during initial consultation, based on your specific needs.</li>
                                    </ul>
                                    <p>For detailed quotes and timelines, please request a consultation.</p>
                                </AccordionContent>
                            </AccordionItem>
*/
