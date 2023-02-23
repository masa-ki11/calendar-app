import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2022-02-23' },
        { title: 'event 2', date: '2022-02-24' }
      ]}
    />
  );
}

export default Calendar;
