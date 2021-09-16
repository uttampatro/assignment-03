import {User} from './user';

export interface Blog {
    id: string;
    title: string;
    article: string;
    createdBy: User;
    createdAt: Date;
}
