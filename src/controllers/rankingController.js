"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingController = void 0;
const RankingService_1 = require("../services/RankingService");
class RankingController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, wps } = request.body;
            const rankingService = new RankingService_1.RankingService();
            const addRank = yield rankingService.execute({ username, wps });
            return response.json(addRank);
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const rankingService = new RankingService_1.RankingService();
            const ranking = yield rankingService.findAll();
            return response.json(ranking);
        });
    }
}
exports.RankingController = RankingController;
