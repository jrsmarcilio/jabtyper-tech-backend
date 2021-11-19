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
exports.RankingService = void 0;
const typeorm_1 = require("typeorm");
const RankingRepositories_1 = require("../repositories/RankingRepositories");
class RankingService {
    execute({ username, wps }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rankingRepository = (0, typeorm_1.getCustomRepository)(RankingRepositories_1.RankingRepositories);
            if (!username)
                throw new Error("Username incorrect.");
            const usernameAlreadyExists = yield rankingRepository.findOne({
                username,
            });
            if (usernameAlreadyExists && usernameAlreadyExists.wps < wps) {
                const updatedRank = yield rankingRepository.save({
                    username: usernameAlreadyExists.username,
                    wps: wps,
                });
                return updatedRank;
            }
            else if (usernameAlreadyExists && usernameAlreadyExists.wps > wps) {
                throw new Error("Mantemos sua pontuação anterior. Sua pontuação atual foi inferior.");
            }
            else {
                const addRank = rankingRepository.create({ username, wps });
                yield rankingRepository.save(addRank);
                return addRank;
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const rankingRepository = (0, typeorm_1.getCustomRepository)(RankingRepositories_1.RankingRepositories);
            const ranking = yield rankingRepository.find();
            if (!ranking)
                throw new Error("No record in ranking.");
            return ranking;
        });
    }
}
exports.RankingService = RankingService;
