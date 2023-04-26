export interface IPastOrders {
    id: number;
    name: string;
    location: string;
    total: number;
    delivered: boolean;
    date: string;
    time: string;
    amount: number;
}