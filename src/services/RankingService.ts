import { getCustomRepository } from "typeorm";
import { RankingRepositories } from "../repositories/RankingRepositories";

interface IRankingRequest {
  username: string;
  wps: number;
}

class RankingService {
  async execute({ username, wps }: IRankingRequest) {
    const rankingRepository = getCustomRepository(RankingRepositories);
    if (!username) throw new Error("Username incorrect.");
    const usernameAlreadyExists = await rankingRepository.findOne({
      username,
    });
    if (usernameAlreadyExists && usernameAlreadyExists.wps < wps) {
      const updatedRank = await rankingRepository.save({
        username: usernameAlreadyExists.username,
        wps: wps,
      });
      return updatedRank;
    } else if (usernameAlreadyExists && usernameAlreadyExists.wps > wps) {
      throw new Error(
        "Mantemos sua pontuação anterior. Sua pontuação atual foi inferior."
      );
    } else {
      const addRank = rankingRepository.create({ username, wps });
      await rankingRepository.save(addRank);
      return addRank;
    }
  }

  async findAll() {
    const rankingRepository = getCustomRepository(RankingRepositories);
    const ranking = await rankingRepository.find();
    if (!ranking) throw new Error("No record in ranking.");
    return ranking;
  }
}
export { RankingService };
