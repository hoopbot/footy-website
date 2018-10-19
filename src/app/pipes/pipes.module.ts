import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {OrdinalPipe} from "./ordinal.pipe";

@NgModule({
  declarations: [
    OrdinalPipe
  ],
  exports: [
    OrdinalPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PipesModule {
}
