"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs_extra_1 = require("fs-extra");
function Install() {
    const loggerPath = path.join(path.dirname(__filename), "GitHubActionsMSBuildLogger.dll");
    const targetLoggerPath = path.join(__dirname, "..", "GitHubActionsMSBuildLogger.dll");
    fs_extra_1.copySync(loggerPath, targetLoggerPath);
    return targetLoggerPath;
}
exports.Install = Install;
