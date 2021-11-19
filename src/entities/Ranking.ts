import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 } from "uuid";

@Entity("ranking")
class Ranking {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  wps: number;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;

  constructor() {
    if (!this.id) this.id = v4();
  }
}

export { Ranking };
