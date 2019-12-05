import * as core from "@actions/core";
import * as installer from "./installer";

async function run() {
  try {
    var path = installer.Install();
    console.log(`Copied GitHubActionsMSBuildLogger to "${path}"`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
