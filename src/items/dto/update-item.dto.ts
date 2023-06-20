import { CreateCommentDto } from './create-comment.dto';

export class UpdateItemDto {
  public: boolean;
  comments: CreateCommentDto[];
}
