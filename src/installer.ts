import * as path from "path";
import * as process from "process";
import { copySync } from "fs-extra";

export function Install() {
  const loggerPath = path.join(
    path.dirname(__filename),
    "..",
    "GitHubActionsMSBuildLogger.dll"
  );
  const targetLoggerPath = path.join(
    process.cwd(),
    "..",
    "GitHubActionsMSBuildLogger.dll"
  );

  copySync(loggerPath, targetLoggerPath);

  return targetLoggerPath;
}
