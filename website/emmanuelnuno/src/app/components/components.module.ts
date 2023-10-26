import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ServicesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutmeComponent,
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    ServicesComponent
  ]
})
export class ComponentsModule { }
