import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { LeagueEntity } from './entities/leagues.entity';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(LeagueEntity)
    private readonly leagueRepository: Repository<LeagueEntity>,
  ) {}

  async create(level: CreateLeagueDto): Promise<LeagueEntity> {
    return await this.leagueRepository.create(level);
  }

  async save(level: LeagueEntity): Promise<LeagueEntity> {
    return await this.leagueRepository.save(level);
  }

  async getAll(): Promise<LeagueEntity[]> {
    return await this.leagueRepository.find();
  }

  async findByName(name: string): Promise<LeagueEntity> {
    return await this.leagueRepository.findOne({ name });
  }

  async findById(id: string): Promise<LeagueEntity> {
    return await this.leagueRepository.findOne({ id });
  }

  async count(id: string): Promise<any> {
    return await this.leagueRepository.count();
  }

  async update(id: string, updateLevelDto: UpdateLeagueDto): Promise<any> {
    await this.leagueRepository.update(id, updateLevelDto);
    return this.findById(id);
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.leagueRepository.delete(id);
    return { message: 'Deleted Successfully' };
  }
}
