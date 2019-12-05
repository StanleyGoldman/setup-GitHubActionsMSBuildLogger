import * as path from 'path';
import {copySync} from 'fs-extra'

export function Install(){
  const loggerPath = path.join(path.dirname(__filename), "GitHubActionsMSBuildLogger.dll")
  const targetLoggerPath = path.join(__dirname, '..', 'GitHubActionsMSBuildLogger.dll');

  copySync(loggerPath, targetLoggerPath);

  return targetLoggerPath;
}