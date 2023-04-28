import { Product } from '../models/Product';

export class Cart {
    id: number;
    fullName: string;
    address: string;
    creditCardNumber: number;
    total: number;
    items: Product[];

    constructor() {
        this.id = 1;
        this.fullName = '';
        this.address = '';
        this.creditCardNumber = 1;
        this.total = 1;
        this.items = []
    }
}