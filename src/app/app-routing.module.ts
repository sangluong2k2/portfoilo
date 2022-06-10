import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {path: "", component: WebsiteLayoutComponent},
  {path: "admin", component: AdminLayoutComponent},
  {path: "blog", component: BlogComponent},
  {path: "work", component: WorkComponent},
  {path: "**", component:WebsiteLayoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
