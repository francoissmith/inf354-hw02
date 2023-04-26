import { ICart } from "./ICart";

export class Cart implements ICart {
    id!: number;
    name!: string;
    typeof!: string;
    distance!: number;
    price!: number;
    image!: string;
    quantity!: number;
}