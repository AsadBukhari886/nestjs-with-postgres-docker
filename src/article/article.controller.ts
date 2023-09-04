import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('article')
@ApiTags('Articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articleService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
