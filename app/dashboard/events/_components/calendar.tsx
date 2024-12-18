'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

interface Event {
  title: string;
  date: string;
}

export function Calendar() {
  const [events, setEvents] = useState<Event[]>([
    { title: 'Evento 1', date: '2024-12-01' },
    { title: 'Evento 2', date: '2024-12-05' }
  ]);

  const handleDateClick = (info: DateClickArg) => {
    const title = prompt('Digite o título do evento:');
    if (title) {
      const newEvent: Event = { title, date: info.dateStr };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6 shadow-md">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia'
        }}
        height="auto"
        editable
        selectable
        eventDisplay="block"
      />
    </div>
  );
}

export default Calendar;
