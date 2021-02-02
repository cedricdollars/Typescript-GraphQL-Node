"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEventMemory = void 0;
class LoadEventMemory {
    constructor(loadEventRepository) {
        this.loadEventRepository = loadEventRepository;
    }
    async load(id) {
        const event = await this.loadEventRepository.load(id);
        return event;
    }
    async getAll() {
        return await this.loadEventRepository.getAll();
    }
}
exports.LoadEventMemory = LoadEventMemory;
