import { Router } from "express";
import { RankingController } from "../controllers/rankingController";
const router = Router();

const rankingController = new RankingController();
router.post("/ranking", rankingController.handle);
router.get("/ranking", rankingController.show);

export { router };
