export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone M4 APAK sjkhadjashdjklh',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone new one',
    price: 299,
    description: '',
  },
];
