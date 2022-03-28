import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import BaseEntity from '../../entites/base.entity';
@Entity()
export class LeagueEntity extends BaseEntity {
  // Game Type: Game Setting | User Setting
  @Column({ name: 'game_type' })
  public gameType: string;

  // Name of the Game
  @Column()
  public name: string;

  // Virtual money to Start Game with
  @Column({ name: 'virtual_money' })
  public virtualMoney: number;

  // Minimum no Trades to Start the Game (Default:1)
  @Column({ default: 1 })
  public minimum_number_of_trades: number;

  // Is Short Selling Allowed (Default:True)
  @Column({ default: true, name: 'short_sell' })
  public shortSell: boolean;

  // Maximum number of Trades
  @Column({ name: 'maximum_no_of_trades' })
  public maximumNoOfTrades: number;

  // Maximum number of stocks one can buy
  @Column({ name: 'maximum_no_of_concentration' })
  public maximumNoOfConcentration: number;

  // Is ETF allowed
  @Column({ default: false })
  public etf: boolean;

  // Cash allowed to Hold above threshold
  @Column({ name: 'cash_holding_allowed' })
  public cashHoldingAllowed: number;

  // days after which game can join
  @Column({ name: 'join_midway_days' })
  public join_midway_days: number;

  // Minimum price of stocks
  @Column()
  public minimumMarketPriceOfStocks: number;

  // Brokerage Charge
  @Column()
  public brokerage: number;

  //Interest when cash is Ideal
  @Column({ name: 'penal_interest' })
  public penalInterest: number;

  // see Each other portfolio (Yes or No)
  @Column({ name: 'see_each_other_portfolio' })
  public seeEachOtherPortfolio: boolean;

  // see Each other history (Yes or No)
  @Column({ name: 'see_each_other_trade_history' })
  public seeEachOtherTradeHistory: boolean;

  // interest on cash above threshold
  @Column({ name: 'interest_on_cash' })
  public interestOnCash: number;

  // Thematic League (Yes or No)
  @Column({ name: 'thematic_league' })
  public thematicLeague: boolean;

  // Customized Banner
  @Column({ name: 'customisedBanner' })
  public customisedBanner: boolean;

  // Notification
  @Column()
  public notification: boolean;

  //if Game-Type = User Default = 15days
  @Column()
  public duration: number;

  //Minimum number of players required (Default:1)
  @Column({ default: 1, name: 'minimum_number_of_players' })
  public minimumNumberOfPlayers: number;

  //Price Money
  @Column({ name: 'price_amount' })
  public priceAmount: number;
}
