import { UserRepository } from '../contracts/user-repository.contract';
import { users } from '../databases/users.database';
import { User } from '../models/user';


export class UserRepositoryInMemory implements UserRepository {

    public create(newUser: User): void {
        const existe = users.some((user) => user.email === newUser.email);

        if(existe) {
            throw Error('Email já cadastrado')
        }
        
        users.push(newUser);
    }

    public getByUsername(username: string): User {
        const userFound = users.find((user) => user.username === username);

        if(!userFound) {
            throw Error('Usuário não encontrado')
        }

        return userFound
    }

    public checkUsernameAlreadyRegister(username: string): boolean {
        const exists = users.some((user) => user.username === username);

        return exists
    }
}