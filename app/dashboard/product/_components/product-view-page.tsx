import { fakeProducts, Product } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import ProductForm from './product-form';

type TChurchViewPageProps = {
  productId: string;
};

export default async function ChurchViewPage({
  productId
}: TChurchViewPageProps) {
  let church = null;
  let pageTitle = 'Cadastrar Nova Igreja';

  if (productId !== 'new') {
    const data = await fakeProducts.getProductById(Number(productId));
    church = data.product as Product;
    if (!church) {
      notFound();
    }
    pageTitle = `Editar Igreja`;
  }

  return <ProductForm initialData={church} pageTitle={pageTitle} />;
}
