import Link from "next/link";

import { dateTimeToString, getEventLink } from "../utils/helperFunctions";

export default function PastEventCard(props) {
  const { name, slug, startDateTime, endDateTime, allDay, infoLink } =
    props.event.fields;

  let eventDateTime = dateTimeToString(startDateTime, endDateTime, allDay);
  let link = getEventLink(infoLink, slug);

  return (
    <div className="relative flex flex-col md:flex-row w-full h-24 md:h-12 my-2 rounded-lg p-2">
      <div className="w-full md:w-7/12 h-full flex flex-row items-center">
        <h3 className="text-sm text-left font-semibold">{name}</h3>
      </div>

      <div className="w-full md:w-5/12 h-full flex flex-row items-center">
        <h3 className="text-sm text-left w-2/3">{eventDateTime}</h3>
        <div className="w-1/3 h-full flex flex-row items-center justify-end">
          <Link href={link.url} passHref>
            <a
              className="flex items-center justify-center py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer shadow-2xl transition duration-200 ease-in-out"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              Više...
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
