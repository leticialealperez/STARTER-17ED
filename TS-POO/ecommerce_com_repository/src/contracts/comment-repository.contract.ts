import { Comment } from '../models/comment';
import { Product } from '../models/product';
import { User } from '../models/user';

export interface CommentRepository {
    create: (newComment: Comment) => void;
    listAllByProduct: (product: Product) => void;
    listAllByUser: (user: User) => void;
    updateCommentByProduct: (product: Product, idComment: string, newContent: string) => void
}