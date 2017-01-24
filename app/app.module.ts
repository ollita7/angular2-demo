
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }  from './components/main/main.component';
import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { UserListComponent } from './components/user/list/user.list.component';
import { UserDetailComponent } from './components/user/detail/user.detail.component';

const appRoutes: Routes = [
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'users', component: UserListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(appRoutes)],
  declarations: [ MainComponent, HeaderComponent, FooterComponent, PageNotFoundComponent, UserListComponent, UserDetailComponent ],
  bootstrap:    [ MainComponent]
})
export class AppModule { }