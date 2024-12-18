import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Desenvolvedor Frontend',
    verified: false,
    status: 'Ativo'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Desenvolvedor Backend',
    verified: true,
    status: 'Ativo'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'Designer UI',
    verified: true,
    status: 'Ativo'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Desenvolvedor Fullstack',
    verified: false,
    status: 'Inativo'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Gerente de Produto',
    verified: true,
    status: 'Ativo'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'Engenheiro QA',
    verified: false,
    status: 'Ativo'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'Designer UX',
    verified: true,
    status: 'Ativo'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'Engenheiro DevOps',
    verified: false,
    status: 'Ativo'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Desenvolvedor Frontend',
    verified: true,
    status: 'Ativo'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Analista de Dados',
    verified: false,
    status: 'Ativo'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number;
  latitude?: number;
  job: string;
  profile_picture?: string | null;
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Início',
    url: '/dashboard/home',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['h', 'h'],
    items: []
  },
  {
    title: 'Painel',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: []
  },
  {
    title: 'Membros',
    url: '/dashboard/employee',
    icon: 'user',
    shortcut: ['e', 'e'],
    isActive: false,
    items: []
  },
  {
    title: 'Igrejas',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: []
  },
  {
    title: 'Conta',
    url: '#',
    icon: 'billing',
    isActive: true,
    items: [
      {
        title: 'Perfil',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Entrar',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: []
  }
];
