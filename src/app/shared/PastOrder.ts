import { IPastOrders } from "./IPastOrders";

export class PastOrder implements IPastOrders {
    id!: number;
    name!: string;
    location!: string;
    total!: number;
    delivered!: boolean;
    date!: string;
    time!: string;
    amount!: number;
}