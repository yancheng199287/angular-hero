import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- 在绑定ngModel之前导入表单模块 import the FormsModule before binding with [(ngModel)]，ngModel它属于一个可选模块FormsModule。 我们必须选择使用那个模块。
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
