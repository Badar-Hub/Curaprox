module.exports = {
  publicPath: "",
  devServer: {
    proxy: {
      // proxy all requests starting with /api to backend
      "/api": {
        target: "http://localhost:8085",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
