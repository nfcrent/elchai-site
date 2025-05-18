import Link from "next/link";
import { AboutElchaiMenu, ResourcesMenu, ServicesMenu, ContactMenu, SocialMediaMenu } from "./Menu";
import { getSiteData } from "@/lib/utils";
import { useTranslations } from "next-intl";


const Footer = () => {
    const t = useTranslations("MENU")
    return (
        <>
            <footer>
                <div className="main-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <h3>{t("footer.about")} {getSiteData().siteName}</h3>
                            <AboutElchaiMenu />
                        </div>
                        <div>
                            <h3>{t("footer.services")}</h3>
                            <ServicesMenu />
                        </div>
                        <div>
                            <h3>{t("footer.resources")}</h3>
                            <ResourcesMenu />
                        </div>
                        <div>
                            <h3>{t("footer.contact")}</h3>
                            <ContactMenu />
                        </div>
                    </div>
                </div>
                <div className="border-b border-foreground/50 pb-6 mb-6 max-w-screen-lg mx-auto"></div>
                <div className="main-container pb-6">
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center lg:justify-start">
                            <span className="text-xs">&copy; {getSiteData().siteName} {t("footer.copyright")}</span>
                        </div>
                        <div className="lg:col-span-2 flex items-center justify-center">
                            <SocialMediaMenu />
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                            <Link href={'/'} className="underline text-xs">{getSiteData().siteUrl.replace("https://", "www.")}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;