'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar linha"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'NOME'
  },
  {
    accessorKey: 'country',
    header: 'CIDADE'
  },
  {
    accessorKey: 'email',
    header: 'E-MAIL'
  },
  {
    accessorKey: 'job',
    header: 'MINISTÉRIO'
  },
  {
    accessorKey: 'gender',
    header: 'GÊNERO'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
