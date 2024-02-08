import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout'; 
import { MatDividerModule } from '@angular/material/divider';
import { MentionsComponent } from './mentions/mentions.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutmeComponent,
    NavbarComponent,
    MentionsComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    NavbarComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    AboutmeComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
