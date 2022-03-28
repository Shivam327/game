import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { LeagueEntity } from './entities/leagues.entity';
import { LeagueOperationService } from './league-operation.service';
import { LeagueService } from './leagues.service';

@ApiTags('Levels')
@Controller('levels')
export class LeagueController {
  constructor(
    private readonly leagueService: LeagueService,
    private readonly leagueOperationService: LeagueOperationService,
  ) {}

  @ApiCreatedResponse({ type: CreateLeagueDto })
  @ApiOperation({ summary: 'Create Level' })
  @Post()
  create(@Body() league: CreateLeagueDto, @Req() req): Promise<any> {
    return this.leagueOperationService.createLeague(
      league,
      req?.user?.username,
    );
  }

  @ApiCreatedResponse({ type: CreateLeagueDto })
  @ApiOperation({ summary: 'Get All levels' })
  @Get()
  getAll(@Req() req: any): Promise<LeagueEntity[]> {
    return this.leagueService.getAll();
  }

  @ApiCreatedResponse({})
  @ApiOperation({ summary: 'Get Level by Name' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<LeagueEntity> {
    return this.leagueService.findById(id);
  }

  @ApiCreatedResponse({})
  @ApiOperation({ summary: 'Update Level by ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLevelDto: UpdateLeagueDto,
    @Req() req,
  ): Promise<any> {
    return this.leagueOperationService.updateLeague(
      id,
      updateLevelDto,
      req?.user?.username,
    );
  }

  @ApiCreatedResponse({})
  @ApiOperation({ summary: 'Delete Level by ID' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.leagueService.remove(id);
  }
}
