import { randomUUID } from 'crypto';
import { comments } from '../databases/comments.database';
import { ratings } from '../databases/ratings.database';
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
        
        const productComments = comments.filter((comment) => comment.product === this);

        productComments.forEach((comment) => {
            console.log(`\t[${comment.from.username}] - ${comment.content}`)
        });
    }

    private showRatings(): void {
        console.log('RATINGS');

        const productRatings = ratings.filter((rating) => rating.product === this);

        productRatings.forEach((rating) => {
            let star = '';

            for(let i=1; i <= rating.rate; i++) {
                star += '⭐'
            }

            console.log(`\t[${rating.from.username}] ${star}`)
        })
    }

    public addComment(content: string, user: User):void {
        const newComment: Comment = new Comment(user, this, content);
        comments.push(newComment);
    }

    public updateComment(idComment: string, newContent: string): void {
        const commentFound = comments.find((comment) => comment.id === idComment && comment.product === this);
        
        if(!commentFound) {
            throw Error('Comment not found')
        }

        commentFound.content = newContent
    }
    
    public addRating(rate: Rate, user: User): void {
        const newRating: Rating = new Rating(user, this, rate); 
        ratings.push(newRating);
    }
}
