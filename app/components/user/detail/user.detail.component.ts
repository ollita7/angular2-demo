import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user.service';

@Component({
  templateUrl: './app/components/user/detail/user.detail.component.html',
  providers: [UserService]
})
export class UserDetailComponent {
    public user: any;

    public constructor(private userService: UserService,  private route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => this.userService.get(+params['id']))
          .subscribe(user => this.user = user);
    }
}