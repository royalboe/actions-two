const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('region', { required: true });
  const dist = core.getInput("dist-file", { required: true });

  // Upload files
  
  core.notice('Hello form my custom JS action!')
}

run();