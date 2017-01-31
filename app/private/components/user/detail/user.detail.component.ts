import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user.service';

@Component({
  templateUrl: './app/private/components/user/detail/user.detail.component.html',
  providers: [UserService]
})
export class UserDetailComponent {
    public user: any = {
        name: null,
        age: 0,
        email: null
    };

    public constructor(private userService: UserService,  private route: ActivatedRoute){
        this.route.params
          .switchMap((params: Params) => this.userService.get(+params['id']))
          .subscribe((user:any) => {
            this.user = user
          });
    }

    ngOnInit(): void {

    }
}