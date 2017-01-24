import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public users: Array<any> = [
                        {id: 1, name: "Ronaldo", mail: "ronaldo@cavepot.com", age: 40},
                        {id: 2, name: "Romario", mail: "romario@cavepot.com", age:45},
                        {id:3, name: "Forlan", mail: "forlan@cavepot.com", age:39},
                        {id:4, name: "Recoba", mail: "recoba@cavepot.com", age:40}
                    ];;

    public construtor(){
    }

    public list():Array<any>{
        return this.users;
    }

    public get(id: number): any{
        return this.users.filter(user => user.id == id);
    }

    public add(user: any):Array<any>{
        this.users.push(user);
        return this.users;
    }

    public remove(id: number): Array<any>{
        return this.users;
    }
}