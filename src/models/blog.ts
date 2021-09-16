import {User} from './user';

export interface Blog {
    _id: string;
    title: string;
    article: string;
    imageUrl: string
    createdBy: User;
    createdAt: null;
}
