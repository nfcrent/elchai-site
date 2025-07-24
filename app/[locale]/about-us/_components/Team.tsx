import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

interface LeaderShipData {
  name: string;
  position: string;
  image: string;
  linkedIn?: string;
}

const LeaderShip = () => {
  const t = useTranslations("ABOUT");

  const LeaderShipData = [
    {
      name: "Flavio Elia",
      position: t("leadership.CEO"),
      image: "/images/IMG_8864.webp",
      /* linkedIn: "https://www.linkedin.com/in/flavio-elia/" */
      linkedIn: null
    },
    {
      name: "Stefano Curzio",
      position: t("leadership.CFO"),
      image: "/images/Stefano-CFO.jpeg",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Sukhchain Singh",
      position: t("leadership.CTO"),
      image: "/images/sukhchain.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Usama Ghazanfer",
      position: t("leadership.ITLead"),
      image: "/images/usama.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Peshwar",
      position: t("leadership.CM"),
      image: "/images/peshwar.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Diana",
      position: t("leadership.BM"),
      image: "/images/diana.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Charles",
      position: t("leadership.AIM"),
      image: "/images/Charles-AIM.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },
    {
      name: "Khalayan",
      position: t("leadership.AIM"),
      image: "/images/Khalyan-AIM.webp",
      /* linkedIn: "https://www.linkedin.com/" */
      linkedIn: null
    },

  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      {LeaderShipData.map((item, index) => {

        return (
          <React.Fragment key={index}>
          {index === 5 && <div></div>}
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-2 bg-linear-to-r from-transparent to-transparent hover:from-eblue hover:to-epurple transition-all hover:transition-all rounded-xl"
          >
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={768}
                height={768}
                className="object-cover object-center w-full h-full max-w-[300px]"
              />
            </div>
            <div className="flex items-start justify-between gap-3 w-full max-w-[300px]">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.position}</p>
              </div>

              {item.linkedIn && (
                <a
                  href={item.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const SkillsDistribution = () => {
  const t = useTranslations("ABOUT.team.skills");

  const skills = [
    { value: 22, label: t("backend") },
    { value: 16, label: t("frontend") },
    { value: 10, label: t("uiux") },
    { value: 12, label: t("blockchain") },
    { value: 10, label: t("unity") },
    { value: 4, label: t("devops") },
    { value: 4, label: t("pm") },
    { value: 4, label: t("artists") }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-8 gap-8 lg:gap-4 expertise-list">
      {skills.map((item, index) => (
        <div key={index} className="text-center space-y-3">
          <span className="font-bold text-4xl block bg-linear-to-r from-eblue to-epurple text-transparent uppercase bg-clip-text">
            {item.value}
          </span>
          <p className="uppercase text-lg font-bold">{item.label}</p>
        </div>
      ))}
    </div>
  );
};


const Team = () => {
  const t = useTranslations("ABOUT.team.tabs");

  return (
    <div className="w-full flex flex-col gap-10">
      <Tabs defaultValue="leadership" className="w-full teams-tabs">
        <TabsList className="h-auto bg-transparent mx-auto mb-8">
          <TabsTrigger value="leadership" className="btn">{t("leadership")}</TabsTrigger>
          <TabsTrigger value="skills" className="btn">{t("skills")}</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <SkillsDistribution />
        </TabsContent>
        <TabsContent value="leadership">
          <LeaderShip />
        </TabsContent>
      </Tabs>
    </div>
  );
};


export default Team;
