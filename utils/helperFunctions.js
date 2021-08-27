import dayjs from "dayjs";

/**
 * Converts dates and times into an appropriate display format
 * @param {string} startDateTime Date and time when the event starts
 * @param {string|undefined} endDateTime Date and time when the event ends (can be undefined)
 * @param {boolean} allDay Indicates whether the event lasts all day
 * @returns Event date and time in a string format
 */
export const dateTimeToString = function (startDateTime, endDateTime, allDay) {
  let eventDateTime;

  if (allDay) {
    eventDateTime = dayjs(startDateTime).format("DD.MM.YYYY.");

    if (endDateTime) {
      eventDateTime =
        eventDateTime + " - " + dayjs(endDateTime).format("DD.MM.YYYY.");
    }
  } else {
    eventDateTime = dayjs(startDateTime).format("DD.MM.YYYY., HH:mm");

    if (endDateTime) {
      if (eventDateTime.startsWith(dayjs(endDateTime).format("DD.MM.YYYY."))) {
        eventDateTime =
          eventDateTime + " - " + dayjs(endDateTime).format("HH:mm");
      } else {
        eventDateTime =
          eventDateTime +
          " - " +
          dayjs(endDateTime).format("DD.MM.YYYY., HH:mm");
      }
    }
  }

  return eventDateTime;
};

/**
 * Converts a given link to a thumbnail link
 * @param {string} url Standard Cloudinary image URL
 * @returns Thumbnail URL
 */
export const getCloudinaryThumbLink = function (url) {
  let linkArr = url.split("/");
  linkArr.splice(6, 0, "t_thumb");
  let thumbLink = linkArr.join("/");

  return thumbLink;
};

/**
 * Get the event info URL
 * @param {string} link External info URL (if exists)
 * @param {string} slug Unique event ID
 * @returns An object containing the event info URL and a flag marking whether the page is external
 */
export const getEventLink = function (link, slug) {
  if (link) return { url: link, external: true };

  return { url: "/projekti/" + slug, external: false };
};

/**
 * Get the project page URL
 * @param {string} link External project URL (if exists)
 * @param {string} slug Unique project ID
 * @returns An object containing the project page URL and a flag marking whether the page is external
 */
export const getProjectLink = function (link, slug) {
  if (!link && !slug) return;

  if (link) return { url: link, external: true };

  return { url: "/" + slug, external: false };
};

/**
 * Groups a given list by a certain parameter
 * @param {*} list List of elements to group
 * @param {*} keyGetter Grouping function
 * @returns Array of grouped elements
 */
export const groupBy = function (list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  let mapSorted = new Map(
    [...map].sort((a, b) => String(a[0]).localeCompare(b[0]))
  );

  let mapArr = Array.from(mapSorted);

  return mapArr;
};
