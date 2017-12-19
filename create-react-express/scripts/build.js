const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", args, opts);

// mongodb://heroku_f7tc4xrb:c6llvtogd9prujuj85nk5lub75@ds047692.mlab.com:47692/heroku_f7tc4xrb