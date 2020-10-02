module.exports = {
  publicPath: "",
  devServer: {
    proxy: {
      // proxy all requests starting with /api to backend
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
      "/files": {
        target: "http://localhost",
        changeOrigin: true,
        pathRewrite: {
          "^/files": "/admin/files",
        },
      },
    },
  },
};
