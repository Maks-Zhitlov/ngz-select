import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgzSelectComponent } from './ngz-select.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgzSelectConfig } from './ngz-select.config';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgzSelectComponent],
  declarations: [NgzSelectComponent]
})
export class NgzSelectModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgzSelectModule,
      providers: [NgzSelectConfig]
    };
  }
}
