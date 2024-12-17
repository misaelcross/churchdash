import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Painel',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Conteúdo',
      menus: [
        {
          href: '',
          label: 'Postagens',
          active: pathname.includes('/posts'),
          icon: SquarePen,
          submenus: [
            {
              href: '/posts',
              label: 'Todas as Postagens'
            },
            {
              href: '/posts/new',
              label: 'Nova Postagem'
            }
          ]
        },
        {
          href: '/categories',
          label: 'Categorias',
          active: pathname.includes('/categories'),
          icon: Bookmark
        },
        {
          href: '/tags',
          label: 'Etiquetas',
          active: pathname.includes('/tags'),
          icon: Tag
        }
      ]
    },
    {
      groupLabel: 'Configurações',
      menus: [
        {
          href: '/users',
          label: 'Usuários',
          active: pathname.includes('/users'),
          icon: Users
        },
        {
          href: '/account',
          label: 'Conta',
          active: pathname.includes('/account'),
          icon: Settings
        }
      ]
    }
  ];
}
