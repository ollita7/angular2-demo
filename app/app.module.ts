
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainPrivateComponent }  from './private/components/main/main.private.component';
import { MainComponent }  from './components/main/main.component';
import { HeaderComponent }  from './private/components/header/header.component';
import { FooterComponent }  from './private/components/footer/footer.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './private/components/user/list/user.list.component';
import { UserDetailComponent } from './private/components/user/detail/user.detail.component';
import { ProjectListComponent } from './private/components/project/list/project.list.component';
import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'private', component: MainPrivateComponent,
        children: [
            {path: 'user/:id', component: UserDetailComponent},
            {path: 'users', component: UserListComponent},
            {path: 'projects', component: ProjectListComponent},
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpModule,
      JsonpModule,
      FormsModule
  ],
  declarations: [ MainComponent, MainPrivateComponent, HeaderComponent, FooterComponent, PageNotFoundComponent, LoginComponent, HeaderComponent, FooterComponent, UserListComponent,
                ProjectListComponent, UserDetailComponent],
  bootstrap:    [ MainComponent]
})
export class AppModule { }