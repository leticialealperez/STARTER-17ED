import { Product } from '../models/product';
import { Rating } from '../models/rating';
import { User } from '../models/user';


export interface RatingRepository {
    create: (newRating: Rating) => void;
    listAllByProduct: (product: Product) => void;
    listAllByUser: (user: User) => void;
}