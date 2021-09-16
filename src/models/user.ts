export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}
export interface User {
    _id: null;
    name: string;
    email: string;
    role: UserRole.CONTENT_WRITER;
}
