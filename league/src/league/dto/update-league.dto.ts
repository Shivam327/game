import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateLeagueDto } from './create-league.dto';

export class UpdateLeagueDto extends PartialType(CreateLeagueDto) {
  @ApiProperty({ type: String, name: 'Name' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ type: String, name: 'description' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ type: Number, name: 'Order' })
  @IsOptional()
  @IsNumber()
  order: number;

  @ApiProperty({ type: String, name: 'updated_by' })
  @IsString()
  @IsOptional()
  updated_by: string;
}
