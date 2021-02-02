"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelEventMemory = void 0;
class CancelEventMemory {
    constructor(cancelEventRepo) {
        this.cancelEventRepo = cancelEventRepo;
    }
    async cancel(id) {
        await this.cancelEventRepo.cancel(id);
    }
}
exports.CancelEventMemory = CancelEventMemory;
