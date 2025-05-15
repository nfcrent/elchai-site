import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSiteData() {
  const siteUrl = "https://elchaigroup.com";
  return {
    siteName: "Elchai",
    siteUrl,
    logoPath: `${siteUrl}/images/elchai-logo.png`,
    defaultOg: `${siteUrl}/images/og/default.png`,
    faviconPath: `${siteUrl}/images/favicon.ico`,
    defaultLanguage: "en",
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/elchaigroup",
      twitter: "https://twitter.com/elchaigroup",
      facebook: "https://www.facebook.com/elchaigroup",
      instagram: "https://www.instagram.com/elchaigroup",
      youtube: "#",
    },
    contact: {
      email: "info@elchaigroup.com",
      supportEmail: "support@elchaigroup.com",
      phone: "+971501080066",
    },
    address: {
      street:
        "34CV+JCM-Cluster G -Jumeirah Lake Towers-Dubai-Emirati Arabi Uniti",
      city: "Dubai",
      country: "United Arab Emirates",
      postalCode: "12345",
      url: "https://maps.app.goo.gl/nR8JcLFoMSD2EXVB6",
      fullAddress:
        "34CV+JCM-Cluster G -Jumeirah Lake Towers-Dubai-Emirati Arabi Uniti, Dubai, United Arab Emirates",
    },
  };
}
