import { IUser } from './IUser';

export class User implements IUser {
    name!: string;
    email!: string;
    phone!: string;
}