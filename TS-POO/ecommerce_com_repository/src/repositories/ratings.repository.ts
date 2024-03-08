import { RatingRepository } from '../contracts/rating-repository.contract';
import { ratings } from '../databases/ratings.database';
import { Product } from '../models/product';
import { Rating } from '../models/rating';
import { User } from '../models/user';

export class RatingsRepositoryInMemory implements RatingRepository {

    public create(newRating: Rating): void {
        ratings.push(newRating)
    }

    public listAllByProduct(product: Product): void {
        const ratingsFiltered = ratings.filter((rating) => rating.product === product);

        ratingsFiltered.forEach((rating) => {
            let star = '';

            for(let i=1; i <= rating.rate; i++) {
                star += '⭐'
            }

            console.log(`\t[${rating.from.username}] ${star}`)
        })

    }

    public listAllByUser(user: User): void {
        const ratingsFiltered = ratings.filter((rating) => rating.from === user);

        ratingsFiltered.forEach((rating) => {
            let star = '';

            for(let i=1; i <= rating.rate; i++) {
                star += '⭐'
            }

            console.log(`\t[${rating.from.username}] ${star}`)
        })

    }
}