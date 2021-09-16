export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}
export interface User {
    id: null;
    name: string;
    email: string;
    password: string
    role: UserRole.CONTENT_WRITER;
}
