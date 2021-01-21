"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var validator_1 = __importDefault(require("validator"));
var UserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId },
    firstname: { type: String, maxlength: 50, trim: true, required: true },
    lastname: { type: String, maxlength: 50, trim: true, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validator_1.default.isEmail,
    },
    pseudo: { type: String, unique: true, trim: true },
    password: { type: String, required: true, trim: true, minlength: 4 },
    events: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Events",
        },
    ],
}, {
    timestamps: true,
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
