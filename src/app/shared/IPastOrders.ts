import { Cart } from "./Cart";

export interface IPastOrders {
    id: number;
    location: string;
    total: number;
    delivered: boolean;
    date: string;
    time: string;
    items: Cart[];
    instructions?: string;
}