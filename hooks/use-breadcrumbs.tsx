'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [{ title: 'Painel', link: '/dashboard' }],
  '/dashboard/overview': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Visão Geral', link: '/dashboard/overview' }
  ],
  '/dashboard/employee': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Membros', link: '/dashboard/employee' }
  ],
  '/dashboard/employee/new': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Membros', link: '/dashboard/employee' },
    { title: 'Novo Membro', link: '/dashboard/employee/new' }
  ],
  '/dashboard/product': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Produtos', link: '/dashboard/product' }
  ],
  '/dashboard/product/new': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Produtos', link: '/dashboard/product' },
    { title: 'Novo Produto', link: '/dashboard/product/new' }
  ],
  '/dashboard/kanban': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Kanban', link: '/dashboard/kanban' }
  ],
  '/dashboard/profile': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Perfil', link: '/dashboard/profile' }
  ],
  '/posts': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Postagens', link: '/posts' }
  ],
  '/posts/new': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Postagens', link: '/posts' },
    { title: 'Nova Postagem', link: '/posts/new' }
  ],
  '/categories': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Categorias', link: '/categories' }
  ],
  '/tags': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Etiquetas', link: '/tags' }
  ],
  '/users': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Usuários', link: '/users' }
  ],
  '/account': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Conta', link: '/account' }
  ]
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // Handle dynamic employee routes
    if (pathname.match(/^\/dashboard\/employee\/[^/]+$/)) {
      return [
        { title: 'Painel', link: '/dashboard' },
        { title: 'Membros', link: '/dashboard/employee' },
        { title: 'Visualizar Membro', link: pathname }
      ];
    }

    // Handle dynamic product routes
    if (pathname.match(/^\/dashboard\/product\/[^/]+$/)) {
      return [
        { title: 'Painel', link: '/dashboard' },
        { title: 'Produtos', link: '/dashboard/product' },
        { title: 'Visualizar Produto', link: pathname }
      ];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
