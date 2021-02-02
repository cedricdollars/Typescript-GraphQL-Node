"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEventMemory = void 0;
class AddEventMemory {
    constructor(addEventRepository) {
        this.addEventRepository = addEventRepository;
    }
    async save(event) {
        await this.addEventRepository.save(event);
    }
}
exports.AddEventMemory = AddEventMemory;
