import Link from "next/link";
import { Disclosure } from "@headlessui/react";

import ChevronUpIcon from "@heroicons/react/solid/ChevronUpIcon";
import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";

import { dateTimeToString } from "../../utils/helperFunctions";

export default function SpokPastCard(props) {
  const {
    name,
    startDateTime,
    endDateTime,
    location,
    information,
    accentColor,
  } = props.quiz;

  let eventDateTime = dateTimeToString(startDateTime, endDateTime, false);

  return (
    <div className="relative flex flex-col w-full mb-10 rounded-lg p-3 bg-dark-gray items-center">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-7/12 h-full flex flex-row">
          <h3
            className="text-base text-left font-extrabold"
            style={{ color: accentColor }}
          >
            {name}
          </h3>
        </div>

        <div className="w-full md:w-5/12 h-full flex flex-row md:flex-col items-end">
          <div className="inline-flex items-center">
            <CalendarIcon
              className="h-3 w-3 sm:h-5 sm:w-5 mr-1"
              style={{ color: accentColor }}
            />
            <span className="text-xs sm:text-sm font-semibold">
              {eventDateTime}
            </span>
          </div>

          <div className="inline-flex items-center mt-2">
            <LocationMarkerIcon
              className="h-3 w-3 sm:h-5 sm:w-5 mr-1"
              style={{ color: accentColor }}
            />
            <span className="text-xs sm:text-sm font-semibold">{location}</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex flex-row w-full h-8 rounded-lg justify-between items-center p-2"
                style={{ backgroundColor: accentColor }}
              >
                <span className="text-xs uppercase font-extrabold">Više</span>
                <ChevronUpIcon
                  className={`${open ? "" : "transform rotate-180"} w-5 h-5 `}
                />
              </Disclosure.Button>

              <Disclosure.Panel>{information}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
