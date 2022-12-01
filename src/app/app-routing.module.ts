import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "post/attivi",
        component: PostAttiviComponent,
        children: [
            {
                path: ":id",
                component: DettagliComponent
            }
        ]
    },
    {
        path: "post/inattivi",
        component: PostInattiviComponent
    },
    {
        path: "users",
        component: UsersComponent,
        children: [
            {
                path: ":id",
                component: UserInfoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
