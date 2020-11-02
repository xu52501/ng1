import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableBarComponent } from '../component/tableBar/tableBar.component';
import { ApiService } from '../code/services/apiServices';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],

  // providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用

  // imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。

  // exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。

  // 属于本 NgModule 的组件、指令、管道
  declarations: [
    HomeComponent,
    TableBarComponent,
  ],

  // @Injectable 把Console声明为可注入的服务， 这样就可以在别的组件中通过依赖注入的方式来使用
  // 接下来需要在angular的根模块NgModule的providers中声明这个服务。 比如默认app.module.ts中的AppModule类。
  // 导入组件
  // import { HeroService } from '../hero.service';


  // 在该类的构造函数中导入HeroService
  // constructor(private heroService: HeroService) { }

  // 使用注入组件的函数
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  providers: [
    ApiService
  ],
})

export class HomeModule {}
