import { IInfo } from "./IInfo";

export class Info implements IInfo {
    id!: number;
    name!: string;
    rating!: number;
    typeof!: string;
    image!: string;
    distance!: number;
    time!: string;
    price!: number;
}