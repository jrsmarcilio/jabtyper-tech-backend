import { EntityRepository, Repository } from "typeorm";
import { Ranking } from "../entities/Ranking";

@EntityRepository(Ranking)
class RankingRepositories extends Repository<Ranking> {}
export { RankingRepositories };
