export function FormatDate(inputDateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateObject = new Date(inputDateString);

  const day = dateObject.getDate();
  const suffix = getDaySuffix(day);

  return dateObject
    .toLocaleDateString("en-US", options)
    .replace(/\d+/g, (match) => {
      return match == day.toString() ? day + suffix : match;
    });
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
