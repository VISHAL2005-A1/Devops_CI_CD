module.exports = {
  apps: [
    {
      name: "http-server",
      cwd: "./apps/http-server",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    },

    {
      name: "web-server",
      cwd: "./apps/web",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    },

    {
      name: "ws-server",
      cwd: "./apps/ws-server",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};