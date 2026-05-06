export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    images: string[];
    category: string;
    stock: number;
    createAt: Date;

} 