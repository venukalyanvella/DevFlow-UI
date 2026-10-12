import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutComponent } from './layout.component';
import { Routes ,RouterModule} from '@angular/router';


const routes :Routes = [
  {
    path:'',
    component: LayoutComponent,
  }

];


@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    MainContentComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
