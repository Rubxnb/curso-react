import { ROL } from './rol';

export class User{
    userName = '';
    email = '';
    password = '';
    role = ROL.USER;

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}