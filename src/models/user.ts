export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}
export interface User {
    id: null;
    email: '';
    role: UserRole.CONTENT_WRITER;
}
