export function generateGoogleCalendarUrl(event: {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}) {
  const formatGoogleDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.append('action', 'TEMPLATE');
  url.searchParams.append('text', event.title);
  url.searchParams.append('details', event.description);
  url.searchParams.append('location', event.location);
  url.searchParams.append('dates', `${formatGoogleDate(event.startDate)}/${formatGoogleDate(event.endDate)}`);
  
  return url.toString();
}

export function generateIcsContent(event: {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}) {
  const formatIcsDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SanaBalance//Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@sanabalance.ch
DTSTAMP:${formatIcsDate(new Date())}
DTSTART:${formatIcsDate(event.startDate)}
DTEND:${formatIcsDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
}

export function downloadIcsFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
