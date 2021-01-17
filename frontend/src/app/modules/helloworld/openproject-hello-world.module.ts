import { NgModule } from "@angular/core";
import { OpenprojectCommonModule } from "../common/openproject-common.module";
import { HelloWorldButtonComponent } from "./hello-world.component";

@NgModule({
  imports: [
    OpenprojectCommonModule
  ],
  declarations: [HelloWorldButtonComponent],
  exports: [HelloWorldButtonComponent],
})
export class OpenProjectHelloWorldModule {}
