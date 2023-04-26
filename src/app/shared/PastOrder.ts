import { Cart } from "./Cart";
import { IPastOrders } from "./IPastOrders";

export class PastOrder implements IPastOrders {
    id!: number;
    location!: string;
    total!: number;
    delivered!: boolean;
    date!: string;
    time!: string;
    items!: Cart[];
    instructions?: string;
}