import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './app/private/components/user/list/user.list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit{
    public users: Array<any>;

    constructor(private userService: UserService){
        this.users = [];
    }

    ngOnInit(): void {
        this.userService.list().subscribe((response)=>{
            this.users = response;
        });
    }
}