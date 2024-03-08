import { randomUUID } from 'crypto';
import { CommentsRepositoryInMemory } from '../repositories/comments.repository';
import { RatingsRepositoryInMemory } from '../repositories/ratings.repository';
import { Comment } from './comment';
import { Rate, Rating } from './rating';
import { User } from './user';


export class Product {
    private _id: string = randomUUID();

    constructor (
        public name: string,
        public value: number
    ) {}

    
    public get id() : string {
        return this._id;
    }
    

    public show():void {
        console.log(`${this.name} (R$ ${this.value.toFixed(2).replace('.', ',')})`);
        this.showDetails();
        console.log(`\n---------------------- \n`);
    }

    private showDetails():void {
        this.showRatings();
        this.showComments();
    }

    private showComments(): void {
        console.log('COMMENTS');
        new CommentsRepositoryInMemory().listAllByProduct(this);
    }

    private showRatings(): void {
        console.log('RATINGS');
        new RatingsRepositoryInMemory().listAllByProduct(this);
    }

    public addComment(content: string, user: User):void {
        const newComment: Comment = new Comment(user, this, content);
        new CommentsRepositoryInMemory().create(newComment);
    }
    
    public addRating(rate: Rate, user: User): void {
        const newRating: Rating = new Rating(user, this, rate); 
        new RatingsRepositoryInMemory().create(newRating);
    }
}
