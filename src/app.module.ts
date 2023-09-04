import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [PrismaModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
