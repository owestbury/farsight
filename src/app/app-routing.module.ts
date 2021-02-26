import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { ButtonComponent } from './components/button/button.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'input', component: InputComponent },
  { path: 'table', component: TableComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'textarea', component: TextareaComponent },
  { path: 'select', component: SelectComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
