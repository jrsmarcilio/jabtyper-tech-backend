import { Request, Response } from "express";
import { RankingService } from "../services/RankingService";

class RankingController {
  async handle(request: Request, response: Response) {
    const { username, wps } = request.body;
    const rankingService = new RankingService();
    const addRank = await rankingService.execute({ username, wps });
    return response.json(addRank);
  }

  async show(request: Request, response: Response) {
    const rankingService = new RankingService();
    const ranking = await rankingService.findAll();
    return response.json(ranking);
  }
}
export { RankingController };
