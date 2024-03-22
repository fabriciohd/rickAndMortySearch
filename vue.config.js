const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  transpileDependencies: true,
  publicPath: '/rickAndMortySearch/'
})