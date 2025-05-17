import Link from "next/link";
import Image from "next/image";
import { CardStyleOne } from "@/inc/Containers";
import { FaChevronCircleRight } from "react-icons/fa";

export interface Guide {
  title: string;
  description: string;
  image: string;
  slug: string;
  url: string;
  content: Record<string, any>;
}

export function GuideItem({
  title,
  description,
  image,
  url,
}: Omit<Guide, "content">) {
  return (
    <>
      <Link href={url}>
        <div className="space-y-5">
          <Image
            src={image}
            alt={title}
            width={768}
            height={768}
            className="aspect-[4/3] rounded-xl object-cover object-center w-full"
          />
          <h2 className="font-bold text-xl">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
}

interface GuidesFoooterProps {
  title: string;
  description: string;
  link: string;
}

export function GuidesFooterCard({
  description,
  link,
  title,
}: GuidesFoooterProps) {
  return (
    <div className="main-container">
      <CardStyleOne>
        <div className="pt-7 pb-10">
          <h2
            className="main-title no-decoration mb-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="max-w-[703px] text-center mx-auto mb-8">
            {description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href={"/contact-us"} className="btn btn-main">
              {link} <FaChevronCircleRight />
            </Link>
          </div>
        </div>
      </CardStyleOne>
    </div>
  );
}

export function GuidesContent({
  content,
}: {
  content: Pick<Guide, "content">;
}) {
  return (
    <div className="content">
      {Object.entries(content).map(
        ([key, value]: [key: string, value: any]) => {
          if (typeof value === "string") {
            if (key.includes("heading")) {
              return (
                <h2 key={key} className="text-2xl font-semibold mt-6 mb-2">
                  {value}
                </h2>
              );
            }

            if (value.includes("<strong>")) {
              return (
                <ul key={key} className="list-disc ml-6 mb-4">
                  <li dangerouslySetInnerHTML={{ __html: value }} />
                </ul>
              );
            }

            return (
              <p key={key} className="mb-4">
                {value}
              </p>
            );
          }
          if (typeof value === "object") {
            return (
              <div key={key}>
                {value.heading && (
                  <h2 className="text-2xl font-semibold mt-6 mb-2">
                    {value.heading}
                  </h2>
                )}
                {value.text && <p className="mb-4">{value.text}</p>}
              </div>
            );
          }

          return null;
        },
      )}
    </div>
  );
}
