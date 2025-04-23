import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

interface LeaderShipData {
    name: string;
    position: string;
    image: string;
    linkedIn?: string;
}

const LeaderShipData = [
    {
        name: "Flavio Elia",
        position: "CEO",
        image: "/images/flavio-elia.webp",
        linkedIn: "https://www.linkedin.com/in/flavio-elia/"
    },
    {
        name: "Sukhchain Singh",
        position: "CTO",
        image: "/images/human.jpg",
        linkedIn: "https://www.linkedin.com/"
    },
    {
        name: "Stefano Curzio",
        position: "CFO",
        image: "/images/human.jpg",
        linkedIn: "https://www.linkedin.com/"
    },
    {
        name: "Alessandro Benigni",
        position: "CMO",
        image: "/images/human.jpg",
        linkedIn: "https://www.linkedin.com/"
    },
    {
        name: "Usama Ghazanfer",
        position: "IT Lead",
        image: "/images/human.jpg",
        linkedIn: "https://www.linkedin.com/"
    },
]

const LeaderShip = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {LeaderShipData && LeaderShipData.length > 0 && LeaderShipData.map((item: LeaderShipData, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-3 p-2 bg-linear-to-r from-transparent to-transparent hover:from-eblue hover:to-epurple transition-all hover:transition-all rounded-xl">
                        <div className="aspect-square rounded-xl overflow-hidden">
                            <Image src={item.image} alt={item.name} width={768} height={768} className="object-cover object-center w-full h-full" />
                        </div>
                        <div className="flex items-start justify-between gap-3 w-full">
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p>{item.position}</p>
                            </div>

                            {item.linkedIn && (
                                <a href={item.linkedIn} target="_blank" rel="noopener noreferrer" className="text-2xl">
                                    <FaLinkedin />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

const SkillsDistribution = () => {  
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-8 gap-8 lg:gap-4 expertise-list">
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">22</span>
                    <p className="uppercase text-lg font-bold">Backend Developers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">16</span>
                    <p className="uppercase text-lg font-bold">Frontend Developers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">10</span>
                    <p className="uppercase text-lg font-bold">UI/UX Designers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">12</span>
                    <p className="uppercase text-lg font-bold">Blockchain Developers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">10</span>
                    <p className="uppercase text-lg font-bold">Unity 3D/UR  Developers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">4</span>
                    <p className="uppercase text-lg font-bold">DevOps  Engineers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">4</span>
                    <p className="uppercase text-lg font-bold">Project  Managers</p>
                </div>
                <div className="text-center space-y-3">
                    <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">4</span>
                    <p className="uppercase text-lg font-bold">3D Artists</p>
                </div>
            </div>
        </>
    );
}

const Team = () => {
    return (
        <div className="w-full flex flex-col gap-10">
            <Tabs defaultValue="skills" className="w-full teams-tabs">
                <TabsList className="grid grid-cols-2 gap-3 h-auto bg-transparent mx-auto mb-8">
                    <TabsTrigger value="skills" className="btn">Skills Distribution</TabsTrigger>
                    <TabsTrigger value="leadership" className="btn">Leadership</TabsTrigger>
                </TabsList>
                <TabsContent value="skills">
                    <SkillsDistribution />
                </TabsContent>
                <TabsContent value="leadership">
                    <LeaderShip />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Team;