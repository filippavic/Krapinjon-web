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
