import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Solutions = () => {
    const t = useTranslations("HOME.section4")
    return (
        <>
            <div>
                <div className="relative max-w-[576px] mx-auto hidden lg:flex text-center lg:text-left">
                    <Image src={'/images/digital-future.png'} alt="" width={992} height={992} className="mx-auto hidden lg:block" />
                    <span className="lg:absolute right-[105%] top-[75%] text-nowrap">{t("metaverse")}</span>
                    <span className="lg:absolute right-[101%] top-[45%] text-nowrap">{t("web3")}</span>
                    <span className="lg:absolute right-[92%] top-[22%] text-nowrap">{t("blockchain")}</span>
                    <span className="lg:absolute right-[73%] top-[4%] text-nowrap">{t("ai")}</span>
                    <span className="lg:absolute left-[73%] top-[4%] text-nowrap">{t("smart")}</span>
                    <span className="lg:absolute left-[92%] top-[22%] text-nowrap">{t("iot")} </span>
                    <span className="lg:absolute left-[101%] top-[45%] text-nowrap">{t("ar")}</span>
                    <span className="lg:absolute left-[105%] top-[75%] text-nowrap">{t("vr")} </span>
                </div>

                <ul className="table mx-auto space-y-4 lg:hidden">
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions1.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("metaverse")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions2.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("web3")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions3.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("blockchain")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions4.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("ai")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions5.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("smart")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions6.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("iot")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions7.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("ar")}
                    </li>
                    <li className="text-xl font-semibold relative min-h-[60px] pl-18 flex items-center">
                        <Image src={'/images/solutions8.svg'} alt="" width={60} height={60} className="absolute top-0 left-0" />
                        {t("vr")}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Solutions