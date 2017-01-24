import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './app/components/user/list/user.list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit{
    public users: Array<any>;

    public constructor(private userService: UserService){

    }

    ngOnInit(): void {
        this.users = this.userService.list();
    }
}