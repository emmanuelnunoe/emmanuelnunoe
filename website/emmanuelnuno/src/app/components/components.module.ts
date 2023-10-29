import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ServicesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutmeComponent,
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    ServicesComponent
  ]
})
export class ComponentsModule { }
