module.exports = {
  apps: [
    {
      name: "web",
      cwd: "/home/ubuntu/Devops_CI_CD/apps/web",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "http-server",
      cwd: "/home/ubuntu/Devops_CI_CD/apps/http-server",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "ws-server",
      cwd: "/home/ubuntu/Devops_CI_CD/apps/ws-server",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};