"use client";

import { cn, getSiteData } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";
import { supportedLanguages } from "@/i18n";
import { useLocale, useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { getServiceData } from "@/components/services";

interface MenusI {
  name: string;
  url: string;
  prefix?: string;
  submenu?: MenusI[];
}






export const SocialMediaMenu = () => {
  const SocialMediaData: MenusI[] = [
    {
      name: "LinkedIn",
      url: getSiteData().socialMedia.linkedin,
    },
    {
      name: "Twitter",
      url: getSiteData().socialMedia.twitter,
    },
    {
      name: "Facebook",
      url: getSiteData().socialMedia.facebook,
    },
    {
      name: "Instagram",
      url: getSiteData().socialMedia.instagram,
    },
    {
      name: "YouTube",
      url: getSiteData().socialMedia.youtube,
    },
  ];
  return (
    <>
      <ul className="social-media">
        {SocialMediaData &&
          SocialMediaData.length > 0 &&
          SocialMediaData.map((menu, index) => (
            <li key={index}>
              {menu.prefix}{" "}
              <Link href={menu.url} target="_blank">
                {menu.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const ContactMenu = () => {
  const t = useTranslations("MENU")
  const ContactMenuData: MenusI[] = [
    {
      name: getSiteData().contact.email,
      prefix: `${t("contact.email")}:`,
      url: "mailto:info@elchaigroup.com",
    },
    {
      name: getSiteData().contact.phone,
      prefix: t("contact.phone"),
      url: `tel:${getSiteData().contact.phone}`,
    },
    {
      name: getSiteData().address.fullAddress,
      prefix: t("contact.address"),
      url: getSiteData().address.url,
    },
  ];
  return (
    <>
      <ul className="menu">
        {ContactMenuData &&
          ContactMenuData.length > 0 &&
          ContactMenuData.map((menu, index) => (
            <li key={index}>
              {menu.prefix} <Link href={menu.url}>{menu.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const ResourcesMenu = () => {
  const t = useTranslations("MENU")
  const ResourcesMenuData: MenusI[] = [
    {
      name: t("resources.faq"),
      url: "/faq",
    },
    {
      name: t("resources.communityRules"),
      url: "/community-rules",
    },
    {
      name: t("resources.privacyPolicy"),
      url: "/privacy-policy",
    },
    {
      name: t("resources.termsOfUse"),
      url: "/terms",
    },
    {
      name: t("resources.supportCenter"),
      url: "/support",
    },
  ];

  return (
    <>
      <ul className="menu">
        {ResourcesMenuData &&
          ResourcesMenuData.length > 0 &&
          ResourcesMenuData.map((menu, index) => (
            <li key={index}>
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const ServicesMenu = () => {
  const t = useTranslations("SERVICES")
  const ServicesMenuData: MenusI[] = [
    ...getServiceData(t).map(i => ({
      name: i.title,
      url: `/services/${i.slug}`
    })),
    {
      name: t("all"),
      url: "/services",
    },
  ];

  return (
    <>
      <ul className="menu">
        {ServicesMenuData &&
          ServicesMenuData.length > 0 &&
          ServicesMenuData.map((menu, index) => (
            <li key={index}>
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const AboutElchaiMenu = () => {
  const t = useTranslations("MENU")
  const AboutElchaiMenuData: MenusI[] = [
    {
      name: t("about.aboutUs"),
      url: "/about-us",
    },
    {
      name: t("about.ourTeam"),
      url: "/about-us",
    },
    {
      name: t("about.elchaiGuides"),
      url: "/elchai-guides",
    },
    {
      name: t("about.caseStudies"),
      url: "/case-studies",
    },
    {
      name: t("about.techStack"),
      url: "/tech-stack",
    },
  ];
  return (
    <>
      <ul className="menu">
        {AboutElchaiMenuData &&
          AboutElchaiMenuData.length > 0 &&
          AboutElchaiMenuData.map((menu, index) => (
            <li key={index}>
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
].filter((lang) => supportedLanguages.includes(lang.code));

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (language: Language) => {
    let newPath = pathname;
    const pathParts = pathname.split("/");

    if (languages.some((lang) => lang.code === pathParts[1])) {
      pathParts[1] = language.code;
      newPath = pathParts.join("/");
    } else {
      newPath = `/${language.code}${pathname}`;
    }
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        onMouseEnter={() => setIsOpen(true)}
        className="outline-0 uppercase mx-1.5 text-sm flex items-center gap-2"
      >
        <span className="flex items-center gap-1">
          <span className="mr-1">
            {languages.find((l) => l.code === currentLocale)?.flag}
          </span>
          {languages.find((l) => l.code === currentLocale)?.code}
        </span>
        <FaAngleDown className="text-sm" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={20}
        className="p-4 bg-black text-white main-sub-menu"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={cn(
              "p-2.5 bg-linear-to-r hover:!text-white hover:from-eblue hover:to-epurple",
              currentLocale === language.code && "active",
            )}
            onClick={() => switchLanguage(language)}
          >
            <div className="flex items-center gap-2 w-full">
              <span className="mr-1">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {currentLocale === language.code && <Check className="h-4 w-4" />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {

  const t = useTranslations("SERVICES")
  const t2 = useTranslations("MENU")

  const MainMenuData: MenusI[] = [
    {
      name: t2("home"),
      url: "/",
    },
    {
      name: t2("about.aboutUs"),
      url: "/about-us",
    },
    {
      name: t2("footer.services"),
      url: "/services",
      submenu: [{ name: t("all"), url: "/services" }, ...getServiceData(t).map(v => ({
        name: v.title,
        url: `/services/${v.slug}`,
      }))],
    },
    {
      name: t2("about.elchaiGuides"),
      url: "/elchai-guides",
    },
    {
      name: t2("about.contact"),
      url: "/contact-us",
    },
  ];
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");

  return (
    <>
      <ul className="space-y-4 pt-6 mobile-menu">
        {MainMenuData &&
          MainMenuData.length > 0 &&
          MainMenuData.map((menu, index) => (
            <>
              {menu.submenu && menu.submenu.length > 0 ? (
                <>
                  <Collapsible className="text-center">
                    <CollapsibleTrigger className="outline-0 uppercase text-sm w-full">
                      <li
                        key={index}
                        className={`text-center text-3xl font-semibold capitalize flex items-center justify-center gap-3 ${isActive ? "active" : ""}`}
                      >
                        {menu.name} <FaAngleDown className="text-2xl" />
                      </li>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5 text-white mt-4 rounded-2xl">
                      <ul className="space-y-4 py-3">
                        {menu.submenu.map((submenu, index) => (
                          <li
                            key={index}
                            className="text-center text-xl"
                            onClick={toggleMenu}
                          >
                            <Link
                              href={submenu.url}
                              className={
                                pathname === submenu.url ? "active" : ""
                              }
                            >
                              {submenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </>
              ) : (
                <>
                  <li
                    key={index}
                    className="text-center text-3xl font-semibold"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={menu.url}
                      className={pathname === menu.url ? "active" : ""}
                    >
                      {menu.name}
                    </Link>
                  </li>
                </>
              )}
            </>
          ))}
        <LanguageSwitcher />
      </ul>
    </>
  );
};

const Menu = () => {
  const t = useTranslations("SERVICES")
  const t2 = useTranslations("MENU")
  const MainMenuData: MenusI[] = [
    {
      name: t2("home"),
      url: "/",
    },
    {
      name: t2("about.aboutUs"),
      url: "/about-us",
    },
    {
      name: t2("footer.services"),
      url: "/services",
      submenu: [{ name: t("all"), url: "/services" }, ...getServiceData(t).map(v => ({
        name: v.title,
        url: `/services/${v.slug}`,
      }))],
    },
    {
      name: t2("about.elchaiGuides"),
      url: "/elchai-guides",
    },
    {
      name: t2("footer.contact"),
      url: "/contact-us",
    },
  ];


  const [openDropdown, setOpenDropdown] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");

  return (
    <>
      <ul className="main-menu">
        {MainMenuData &&
          MainMenuData.length > 0 &&
          MainMenuData.map((menu, index) => (
            <li key={index}>
              {menu.submenu && menu.submenu.length > 0 ? (
                <>
                  <DropdownMenu
                    open={openDropdown}
                    onOpenChange={setOpenDropdown}
                  >
                    <DropdownMenuTrigger
                      onMouseEnter={() => setOpenDropdown(true)}
                      className={`outline-0 uppercase text-sm flex items-center gap-2 ${isActive ? "active" : ""}`}
                    >
                      {menu.name} <FaAngleDown className="text-sm" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      sideOffset={20}
                      className="p-4 bg-black text-white main-sub-menu"
                    >
                      {menu.submenu.map((submenu, index) => (
                        <DropdownMenuItem
                          key={index}
                          className={`p-2.5 bg-linear-to-r hover:!text-white hover:from-eblue hover:to-epurple ${pathname === submenu.url ? "active" : ""}`}
                          onClick={() => router.push(submenu.url)}
                        >
                          {submenu.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link
                    href={menu.url}
                    className={pathname === menu.url ? "active" : ""}
                  >
                    {menu.name}
                  </Link>
                </>
              )}
            </li>
          ))}
        <LanguageSwitcher />
      </ul>
    </>
  );
};

export default Menu;
