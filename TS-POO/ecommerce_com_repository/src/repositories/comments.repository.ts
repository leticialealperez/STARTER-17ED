import { CommentRepository } from '../contracts/comment-repository.contract';
import { comments } from '../databases/comments.database';
import { Comment } from '../models/comment';
import { Product } from '../models/product';
import { User } from '../models/user';

export class CommentsRepositoryInMemory implements CommentRepository {
    
    public create(newComment: Comment): void {
        comments.push(newComment)
    }

    public listAllByProduct(product: Product): void {
        const commentsFiltered = comments.filter((comment) => comment.product === product);

        commentsFiltered.forEach((comment) => {
            console.log(`\t[${comment.from.username}] - ${comment.content}`)
        })

    }
    

    public listAllByUser(user: User): void {
        const commentsFiltered = comments.filter((comment) => comment.from === user);

        commentsFiltered.forEach((comment) => {
            console.log(`\t[${comment.from.username}] - ${comment.content}`)
        })
    }

    public updateCommentByProduct(product: Product, idComment: string, newContent: string): void {
        const commentFound = comments.find((comment) => comment.id === idComment && comment.product === product);
        
        if(!commentFound) {
            throw Error('Comment not found')
        }

        commentFound.content = newContent
    }

}