import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLeagueDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  virtual_money: string;

  @ApiProperty()
  minimum_number_of_trade: number;

  @ApiProperty()
  short_sell: number;

  @ApiProperty()
  buy: boolean;

  @ApiProperty()
  sell: false;

  @ApiProperty()
  maximum_number_of_trade: number;

  @ApiProperty()
  maximum_concentration: number;

  @ApiProperty()
  etf: boolean;

  @ApiProperty()
  duration: boolean;

  @ApiProperty()
  minimum_market_price: number;

  @ApiProperty()
  bokerage: number;
  @ApiProperty()
  name: string;
}
