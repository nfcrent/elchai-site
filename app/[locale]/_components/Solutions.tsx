import Image from 'next/image'

const Solutions = () => {
    return (
        <>
            <div>
                <div className="relative max-w-[576px] mx-auto hidden lg:flex text-center lg:text-left">
                    <Image src={'/images/digital-future.png'} alt="" width={992} height={992} className="mx-auto hidden lg:block" />
                    <span className="lg:absolute right-[105%] top-[75%] text-nowrap">Metaverse Development</span>
                    <span className="lg:absolute right-[101%] top-[45%] text-nowrap">Web3 Development</span>
                    <span className="lg:absolute right-[92%] top-[22%] text-nowrap">Blockchain Development </span>
                    <span className="lg:absolute right-[73%] top-[4%] text-nowrap">Al Integration & Development </span>
                    <span className="lg:absolute left-[73%] top-[4%] text-nowrap">Smart Contract Development</span>
                    <span className="lg:absolute left-[92%] top-[22%] text-nowrap">IoT Solutions </span>
                    <span className="lg:absolute left-[101%] top-[45%] text-nowrap">AR/VR/MR Experiences </span>
                    <span className="lg:absolute left-[105%] top-[75%] text-nowrap">AR/VR/MR Experiences </span>
                </div>

                <ul className="table mx-auto space-y-4 lg:hidden">
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions1.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        Metaverse Development
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions2.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        Web3 Development
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions3.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        Blockchain Development
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions4.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        Al Integration & Development
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions5.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        Smart Contract Development
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions6.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        IoT Solutions
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions7.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        AR/VR/MR Experiences
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions8.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        AR/VR/MR Experiences
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Solutions