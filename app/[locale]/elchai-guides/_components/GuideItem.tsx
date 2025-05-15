import Link from "next/link";
import Image from "next/image";

const GuideItem = ({title, description, image, actionname, action}: {title: string, description: string, image: string, actionname: string, action: string}) => {
    return (
        <>
            <Link href={action}>
                <div className="space-y-5">
                    <Image src={image} alt={title} width={768} height={768} className="aspect-[4/3] rounded-xl object-cover object-center w-full" />
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default GuideItem;