import { Product } from '@/constants/data';
import { fakeProducts } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { DataTable as ChurchTable } from '@/components/ui/table/data-table';
import { columns } from './product-tables/columns';

type ChurchListingPage = {};

export default async function ChurchListingPage({}: ChurchListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const categories = searchParamsCache.get('categories');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  const data = await fakeProducts.getProducts(filters);
  const totalChurches = data.total_products;
  const churches: Product[] = data.products;

  return (
    <ChurchTable columns={columns} data={churches} totalItems={totalChurches} />
  );
}
