import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// 这玩意儿在某个生命周期里会创建并初始化数据库
import { User } from './user.entity';
/* 
  @Module
  @Module({
    imports,      这个模块需要的Provider列表, 并且所在模块导出了Provider
    exports,      由本模块提供, 导出为其它模块可用的Provider
    controller,   控制器
    providers,    由Injector实例化的Provider, 可以至少在这个模块中共享
  })
*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '884443',
      database: 'nestdb',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
