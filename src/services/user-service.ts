import { Con, DBConnection } from './db-connection';
import { Collection } from 'mongodb';
import { User } from './common/user';

export class UserService {

    get db():Collection<User> {
        return this.con.db.collection("users");
    }

    constructor(private con: DBConnection) { }

    login(email: string, pass: string) {
        return this.db.findOne({
            email: email,
            password: pass
        });
    }

    signin(user: User) {
        return this.db.findOne({ email: user.email })
            .then(usr => {
                if (usr == null) {
                    return this.db.insertOne(user);
                } else {
                    return Promise.reject("Usuario ya existente");
                }
            });
    }

}

export const userService = new UserService(Con);