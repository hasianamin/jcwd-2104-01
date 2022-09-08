module.exports = {
  apps: [
    {
      name: "JCWD-2104-01", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/src/index.js",
      env: {
        PORT: 8401,
      },
      time: true,
    },
  ],
};
