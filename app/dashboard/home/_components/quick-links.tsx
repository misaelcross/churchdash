import { Card } from '@/components/ui/card';
import { Book, Calendar, CreditCard, Heart, Music, Video } from 'lucide-react';

const links = [
  {
    id: 1,
    title: 'Dízimos e Ofertas',
    icon: Heart,
    href: '#'
  },
  {
    id: 2,
    title: 'Bíblia',
    icon: Book,
    href: '#'
  },
  {
    id: 3,
    title: 'Harpa',
    icon: Music,
    href: '#'
  },
  {
    id: 4,
    title: 'Vídeos',
    icon: Video,
    href: '#'
  },
  {
    id: 5,
    title: 'Calendário',
    icon: Calendar,
    href: '#'
  },
  {
    id: 6,
    title: 'Cartão Membro',
    icon: CreditCard,
    href: '#'
  }
];

export function QuickLinks() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Links Rápidos</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Card
              key={link.id}
              className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 p-4 transition-colors hover:bg-accent"
            >
              <Icon className="h-8 w-8" />
              <span className="text-center text-sm font-medium">
                {link.title}
              </span>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
