import Link from "next/link"


const BaseIconStyleOne = ({icon, title, contact, highlight}: {icon: React.ReactNode, title: string, contact: string, highlight: boolean}) => {
    return (
        <>
            <div className="main-icon-text flex items-center gap-6">
                <div className="w-18 h-18 bg-linear-to-r from-eblue to-epurple text-white rounded-full text-2xl flex items-center justify-center">{icon}</div>
                <div className="flex flex-col gap-1">
                    <h4 className="uppercase font-bold text-lg">{title}</h4>
                    <span className={`text-lg ${highlight ? 'text-eblue' : ''}`}>{contact}</span>
                </div>
            </div>	
        </>
    )
}

export const IconStyleOne = ({icon, url, openinnewtab}: {icon: React.ReactNode, url: string, openinnewtab?: string}) => {
    return (
        <>
            <Link href={url} target={openinnewtab ? "_blank" : "_self"}>
                <div className="bg-[#1d1d1d] w-12 h-12 rounded-full flex items-center justify-center">{icon}</div>
            </Link>
        </>
    )
}

export const IconTextStyleOne = ({icon, title, url, contact, openinnewtab=false, highlight=false}: {icon: React.ReactNode, title: string, url: string, contact: string, openinnewtab?: boolean, highlight?: boolean}) => {
    return (
        <>
            {url ? (<Link href={url??"#"} target={openinnewtab ? "_blank" : "_self"} className="table">
                <BaseIconStyleOne icon={icon} title={title} contact={contact} highlight={highlight} />	
            </Link>) : (
                <BaseIconStyleOne icon={icon} title={title} contact={contact} highlight={highlight} />	
            )}
            
        </>
    )
}