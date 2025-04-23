import Image from "next/image"


const HeroHeader = ({image, video, title, className, mheight='min-h-[60vh]'}: {image?: string, video?:string, title: React.ReactNode, className: string, mheight?: string}) => {
    return (
        <>
            <div className={`relative pt-28 ${mheight} lg:min-h-[100vh]`}>

                <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-black/50"></div>

                {image ? (
                    <Image src={image || ''} width={1920} height={1920} alt="Elchai" className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full z-10" />
                ) : (
                    <>
                        {video && <video autoPlay muted loop playsInline controls={false} className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full z-10">
                            <source src={video || ''} type="video/mp4" />
                        </video>}
                    </>
                )}

                
				<div className="main-container pb-20 pt-20 relative z-30">
					<h1 className={`uppercase text-3xl lg:text-5xl ${className || ""}`}>{title}</h1>
				</div>
			</div>
        </>
    )
}

export default HeroHeader