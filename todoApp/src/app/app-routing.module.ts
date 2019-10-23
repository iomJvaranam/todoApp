import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/auth/signup/signup.module#SignupPageModule' },
  { path: 'forgot', loadChildren: './pages/auth/forgot/forgot.module#ForgotPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'add-todo', loadChildren: './pages/todos/add-todo/add-todo.module#AddTodoPageModule' },
  { path: 'list-todo', loadChildren: './pages/todos/list-todo/list-todo.module#ListTodoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
