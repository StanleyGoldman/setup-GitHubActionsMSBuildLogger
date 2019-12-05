import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    installer.Install();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
