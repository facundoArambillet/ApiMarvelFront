import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RequestTimeComponent } from './components/request-time/request-time.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "characters", component: CharactersComponent},
  {path: "loading", component: LoadingComponent},
  {path: "request", component: RequestTimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
