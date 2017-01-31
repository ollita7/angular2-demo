import { Component } from '@angular/core';
import { LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
    providers: [LoginService]
})
export class LoginComponent{
    public email: string;
    public password: string;

    constructor(private router: Router, private loginService: LoginService){
        this.email = "";
        this.password = "";
    }

    public login(){
        this.loginService.login(this.email, this.password)
        .subscribe(response => {
            if(response.length > 0 ){
                this.router.navigate(["private/users"]);
            } else {
                alert("user or password");
            }
        })
    }
}