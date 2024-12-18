export type Event = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  color?: string;
};

export type EventFormValues = Omit<Event, 'id'> & {
  startTime?: string;
  endTime?: string;
};

export type Calendar = {
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: string) => void;
};

export const eventColors = [
  { name: 'Azul', value: '#2563eb' },
  { name: 'Verde', value: '#16a34a' },
  { name: 'Vermelho', value: '#dc2626' },
  { name: 'Roxo', value: '#9333ea' },
  { name: 'Amarelo', value: '#ca8a04' },
  { name: 'Laranja', value: '#ea580c' }
];
