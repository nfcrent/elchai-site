import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link href={'/'}>
                <Image 
                    src={'/images/elchai-logo.svg'}
                    alt="Elchai Logo"
                    width={110}
                    height={200}
                />
            </Link>
        </>
    )
}

export default Logo;