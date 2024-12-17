import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Maria Oliveira</p>
          <p className="text-sm text-muted-foreground">
            maria.oliveira@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 1.999,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">João Lima</p>
          <p className="text-sm text-muted-foreground">joao.lima@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 39,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabel Nunes</p>
          <p className="text-sm text-muted-foreground">
            isabel.nunes@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 299,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wilson Keller</p>
          <p className="text-sm text-muted-foreground">wilson@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 99,00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Dias</p>
          <p className="text-sm text-muted-foreground">sofia.dias@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 39,00</div>
      </div>
    </div>
  );
}
