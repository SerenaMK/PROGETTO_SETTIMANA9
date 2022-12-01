import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
