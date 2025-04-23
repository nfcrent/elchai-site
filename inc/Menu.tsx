'use client'

import { getSiteData } from "@/lib/utils"
import Link from "next/link"
import { ServicesData, ServicesI } from "@/app/services/_components/ServicesData"
import { useRouter } from 'next/navigation'
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { usePathname } from 'next/navigation';

interface MenusI {
    name: string
    url: string
    prefix?: string,
    submenu?: MenusI[]
}

const getServicesMenuData = () => {
    const servicesMenuData: MenusI[] = ServicesData.map((service: ServicesI) => {
        return {
            name: service.title,
            url: `/services/${service.slug}`
        }
    })

    return [{name: 'All Services', url: '/services'}, ...servicesMenuData]
}

const MainMenuData: MenusI[] = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About Us',
        url: '/about-us'
    },
    {
        name: 'Services',
        url: '/services',
        submenu: getServicesMenuData()
    },
    {
        name: 'Elchai Guides',
        url: '/elchai-guides'
    },
    {
        name: 'Contact Us',
        url: '/contact-us'
    }
]

const AboutElchaiMenuData: MenusI[] = [
    {
        name: 'About Us',
        url: '/about-us'
    },
    {
        name: 'Our Team',
        url: '/about-us'
    },
    {
        name: 'Elchai Guides',
        url: '/elchai-guides'
    },
    {
        name: 'Case Studies',
        url: '/case-studies'
    },
    {
        name: 'Tech Stack',
        url: '/tech-stack'
    }
]

const ServicesMenuData: MenusI[] = [
    {
        name: 'Metaverse',
        url: '/services/real-estate-metaverse-development'
    },
    {
        name: 'Blockchain',
        url: '/services/blockchain-development'
    },
    {
        name: 'Crypto Wallets',
        url: '/services/crypto-wallet-development'
    },
    {
        name: 'AI Integration',
        url: '/services/ai-development-services'
    },
    {
        name: 'Coin & Token',
        url: '/services/coin-development'
    },
    {
        name: 'All Services',
        url: '/services'
    }
]

const ResourcesMenuData: MenusI[] = [
    {
        name: 'FAQ',
        url: '/faq'
    },
    {
        name: 'Community Rules',
        url: '/community-rules'
    },
    {
        name: 'Privacy Policy',
        url: '/privacy-policy'
    },
    {
        name: 'Terms of Use',
        url: '/terms'
    },
    {
        name: 'Support Center',
        url: '/support'
    },
]

const ContactMenuData: MenusI[] = [
    {
        name: getSiteData().contact.email,
        prefix: 'Email:',
        url: 'mailto:info@elchaigroup.com'
    },
    {
        name: getSiteData().contact.phone,
        prefix: 'Phone:',
        url: `tel:${getSiteData().contact.phone}`
    },
    {
        name: `${getSiteData().address.street}-${getSiteData().address.city}-${getSiteData().address.country}`,
        prefix: 'Address:',
        url: getSiteData().address.url
    }
]

const SocialMediaData: MenusI[] = [
    {
        name: 'LinkedIn',
        url:getSiteData().socialMedia.linkedin
    },
    {
        name: 'Twitter',
        url:getSiteData().socialMedia.twitter
    },
    {
        name: 'Facebook',
        url:getSiteData().socialMedia.facebook
    },
    {
        name: 'Instagram',
        url:getSiteData().socialMedia.instagram
    },
    {
        name: 'YouTube',
        url:getSiteData().socialMedia.youtube
    },
]

export const SocialMediaMenu = () => {
    return (
        <>
            <ul className="social-media">
                {SocialMediaData && SocialMediaData.length > 0 && SocialMediaData.map((menu, index) =>
                    <li key={index}>{menu.prefix} <Link href={menu.url} target="_blank">{menu.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export const ContactMenu = () => {
    return (
        <>
            <ul className="menu">
                {ContactMenuData && ContactMenuData.length > 0 && ContactMenuData.map((menu, index) =>
                    <li key={index}>{menu.prefix} <Link href={menu.url}>{menu.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export const ResourcesMenu = () => {
    return (
        <>
            <ul className="menu">
                {ResourcesMenuData && ResourcesMenuData.length > 0 && ResourcesMenuData.map((menu, index) =>
                    <li key={index}><Link href={menu.url}>{menu.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export const ServicesMenu = () => {
    return (
        <>
            <ul className="menu">
                {ServicesMenuData && ServicesMenuData.length > 0 && ServicesMenuData.map((menu, index) =>
                    <li key={index}><Link href={menu.url}>{menu.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export const AboutElchaiMenu = () => {
    return (
        <>
            <ul className="menu">
                {AboutElchaiMenuData && AboutElchaiMenuData.length > 0 && AboutElchaiMenuData.map((menu, index) =>
                    <li key={index}><Link href={menu.url}>{menu.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export const MobileMenu = ({toggleMenu}: {toggleMenu: () => void}) => {

    MainMenuData.length = 4
    const router = useRouter()
    const pathname = usePathname()
    const isActive = pathname.startsWith('/services')

    return (
        <>
            <ul className="space-y-4 pt-6 mobile-menu">
                {MainMenuData && MainMenuData.length > 0 && MainMenuData.map((menu, index) =>
                    <>
                        {menu.submenu && menu.submenu.length > 0 ? (
                            <>
                                <Collapsible className="text-center">
                                    <CollapsibleTrigger className="outline-0 uppercase text-sm w-full"><li key={index} className={`text-center text-3xl font-semibold capitalize flex items-center justify-center gap-3 ${isActive ? 'active' : ''}`}>{menu.name} <FaAngleDown className="text-2xl" /></li></CollapsibleTrigger>
                                    <CollapsibleContent className="p-4 bg-white/5 text-white mt-4 rounded-2xl">
                                        <ul className="space-y-4 py-3">
                                            {menu.submenu.map((submenu, index) =>
                                                <li key={index} className="text-center text-xl" onClick={toggleMenu}>
                                                    <Link href={submenu.url} className={pathname === submenu.url ? 'active' : ''}>{submenu.name}</Link>
                                                </li>
                                            )}
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                            </>
                        ) : (
                            <><li key={index} className="text-center text-3xl font-semibold" onClick={toggleMenu}><Link href={menu.url} className={pathname === menu.url ? 'active' : ''}>{menu.name}</Link></li></>
                        )}
                    </>
                    
                )}
            </ul>
        </>
    )
}

const Menu = () => {

    const [openDropdown, setOpenDropdown] = useState(false)

    const router = useRouter()
    const pathname = usePathname()
    const isActive = pathname.startsWith('/services')

    return (
        <>
            <ul className="main-menu">
                {MainMenuData && MainMenuData.length > 0 && MainMenuData.map((menu, index) =>
                    <li key={index}>
                        {menu.submenu && menu.submenu.length > 0 ? (
                            <>
                                <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                                    <DropdownMenuTrigger onMouseEnter={() => setOpenDropdown(true)} className={`outline-0 uppercase text-sm flex items-center gap-2 ${isActive ? 'active' : ''}`}>{menu.name} <FaAngleDown className="text-sm" /></DropdownMenuTrigger>
                                    <DropdownMenuContent sideOffset={20} className="p-4 bg-black text-white main-sub-menu">
                                        {menu.submenu.map((submenu, index) =>
                                            <DropdownMenuItem key={index} className={`p-2.5 bg-linear-to-r hover:!text-white hover:from-eblue hover:to-epurple ${pathname === submenu.url ? 'active' : ''}`} onClick={() => router.push(submenu.url)}>
                                                {submenu.name}
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <><Link href={menu.url} className={pathname === menu.url ? 'active' : ''}>{menu.name}</Link></>
                        )}
                    </li>
                )}
            </ul>
        </>
    )
}



export default Menu