import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { LeagueService } from './leagues.service';

@Injectable()
export class LeagueOperationService {
  constructor(private readonly leagueService: LeagueService) {}

  async createLeague(
    createLeague: CreateLeagueDto,
    username: string,
  ): Promise<any> {
    let doesExits = await this.leagueService.findByName(createLeague.name);
    if (doesExits) {
      throw new HttpException(
        `League with name '${createLeague.name}' already exists`,
        HttpStatus.CONFLICT,
      );
    }
    const league = await this.leagueService.create(createLeague);
    league.updated_by = username;

    const { id, name } = await this.leagueService.save(league);
    return { id, message: `League with ${name} created Successfully` };
  }

  async updateLeague(
    id: string,
    updateLeague: UpdateLeagueDto,
    username: string,
  ): Promise<any> {
    let doesExits = await this.leagueService.findById(id);

    if (!doesExits) {
      throw new HttpException(
        `Level with name '${updateLeague.name}' Doesn't exists`,
        HttpStatus.NOT_FOUND,
      );
    }
    if (doesExits.name.toLowerCase() === updateLeague.name.toLowerCase()) {
      throw new HttpException(
        `Level with name '${updateLeague.name}' already exists`,
        HttpStatus.CONFLICT,
      );
    }
    updateLeague.updated_by = username;
    const { name } = await this.leagueService.update(id, updateLeague);
    return {
      id,
      message: `Level with name '${name}' updated Successfully`,
    };
  }
}
