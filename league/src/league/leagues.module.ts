import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueEntity } from './entities/leagues.entity';
import { LeagueOperationService } from './league-operation.service';
import { LeagueController } from './league.controller';
import { LeagueService } from './leagues.service';

@Module({
  imports: [TypeOrmModule.forFeature([LeagueEntity])],
  controllers: [LeagueController],
  providers: [LeagueService, LeagueOperationService],
})
export class LeagueModule {}
