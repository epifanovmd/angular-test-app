import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const components = [];

@NgModule({
  declarations: [...components],
  imports: [FormsModule, CommonModule],
  exports: [...components],
  providers: [],
  bootstrap: [],
})
export class UiComponentsModule {}
