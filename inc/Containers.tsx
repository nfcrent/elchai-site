interface Props {
    className?: string
    children: React.ReactNode
}

export const CardStyleOne = ({children, className} : Props) => {
    return <>
        <div className={`border overflow-hidden border-foreground p-6 rounded-2xl bg-[#1D1537] mx-auto relative ${className ?? ''}`}>
            <div className="absolute bg-radial from-[#032936] from-0% to-transparent to-80% top-0 bottom-0 left-1/2 -translate-x-1/2 aspect-square rounded-full z-10"></div>
            <div className="z-20 relative">{children}</div>
        </div>
    </>
}

export const CardStyleTwo = ({children, className} : Props) => {
    return (
        <>
            <div className={`p-[2px] rounded-xl bg-linear-to-r from-transparent to-transparent hover:from-eblue hover:to-epurple transition-all duration-300 ${className ?? ''}`}>
                <div className="bg-black rounded-xl overflow-hidden">{children}</div>
            </div>
        </>
    )
}