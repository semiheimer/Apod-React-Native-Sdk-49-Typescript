import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const formatDateForAPI = (date) => {
	const timeZone = "America/New_York";
	const zonedDate = utcToZonedTime(date, timeZone);
	return zonedDate
  };
  export const dateFormatter=(date)=>{
	const formattedDate=format(date, "yyyy-MM-dd");
	return formattedDate
  }