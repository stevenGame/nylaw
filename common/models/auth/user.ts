export enum UserRole {
    admin = 1,
    demo = 2,
    report = 4,
    unknow = 0
}
export interface IUser {
    id: number
    name: string;
    email: string;
    createBy: number;
    createdUser: string;
    createdAt: Date;
    role: UserRole;
    avatar: string;
}

export interface ILoginUser {
    username: string; // email or username
    password: string;
}