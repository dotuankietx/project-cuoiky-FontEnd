import { NgModule } from "@angular/core";
import {NavBarComponent} from "./nav-bar/nav-bar.component"
import { SideBarComponent } from "./side-bar/side-bar.component";
import { FooterComponent } from './footer/footer.component';
@NgModule({
    declarations:[NavBarComponent,SideBarComponent, FooterComponent],
    exports:[NavBarComponent,SideBarComponent,FooterComponent]
})
export class ComponentsModule{}