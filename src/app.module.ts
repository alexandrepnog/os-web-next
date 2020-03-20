import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { CatsModule } from './cats/cats.module';

@Module({
  imports: [],
  // imports: [
  //   MongooseModule.forRoot(
  //      'mongodb+srv://admin:manager@cluster0-04j02.mongodb.net/webnelson?retryWrites=true&w=majority',
  //     'mongodb+srv://douglas:27017/oswebnelson?retryWrites=true&w=majority',
  //   ),
  //   CatsModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
