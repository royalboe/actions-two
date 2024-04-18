const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('region', { required: true });
  const dist = core.getInput("dist-file", { required: true });
  
  // Upload files
  const s3Uri = `s3://${bucket}`
  exec.exec(`aws s3 sync ${dist} ${s3Uri} --region ${region}`);

  const webUrl = `http://${bucket}.s3-websit- ${region}.amazonaws.com/`
  
  // Get output values
  core.setOutput("web-url", webUrl);
}

run();