import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/carousel';

const events = [
  {
    id: 1,
    title: 'Culto de Celebração',
    image:
      'https://i.pinimg.com/736x/43/d2/db/43d2dbcf46377c615513d1beb0b879e6.jpg',
    date: '17/12/23 às 19:30'
  },
  {
    id: 2,
    title: 'Culto de Jovens',
    image:
      'https://i.pinimg.com/736x/71/e3/b7/71e3b757946797a5c35397e0c47ec11e.jpg',
    date: '16/12/23 às 20:00'
  },
  {
    id: 3,
    title: 'Escola Bíblica',
    image:
      'https://i.pinimg.com/736x/ae/93/6b/ae936bf41a710fdae4e13db4e64b271d.jpg',
    date: '17/12/23 às 09:00'
  },
  {
    id: 4,
    title: 'Culto de Oração',
    image:
      'https://i.pinimg.com/736x/a2/19/90/a21990526a31dda8f661e03c408c5782.jpg',
    date: '19/12/23 às 19:30'
  },
  {
    id: 5,
    title: 'Ensaio do Coral',
    image:
      'https://i.pinimg.com/736x/58/53/90/5853906f2f18edf4ec0676d2a4b6e66c.jpg',
    date: '20/12/23 às 20:00'
  },
  {
    id: 6,
    title: 'Culto de Louvor',
    image:
      'https://i.pinimg.com/736x/42/07/5e/42075ed612e29f6b6e0c67fdc8ebb3f3.jpg',
    date: '21/12/23 às 19:30'
  },
  {
    id: 7,
    title: 'Encontro de Jovens',
    image:
      'https://i.pinimg.com/736x/88/ae/9e/88ae9ebf85ab39859bf96a9852415836.jpg',
    date: '22/12/23 às 20:00'
  }
];

export function UpcomingEvents() {
  return (
    <div className="space-y-6">
      <Carousel className="w-full">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Próximos Eventos</h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static !h-8 !w-8 translate-y-0 rounded-sm border-none hover:bg-accent" />
            <CarouselNext className="static !h-8 !w-8 translate-y-0 rounded-sm border-none hover:bg-accent" />
          </div>
        </div>
        <CarouselContent className="-ml-4">
          {events.map((event) => (
            <CarouselItem
              key={event.id}
              className="basis-full pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Card className="overflow-hidden border-none">
                <div className="relative aspect-[4/5]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="text-base font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
