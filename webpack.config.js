var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: './src/main.js',
   output: {
     path: path.resolve(__dirname, './dist'),
     filename: 'build.js',
     publicPath: "http://127.0.0.1:8080/dist/"
   },
   module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/  
      },
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        loader: 'babel-loader'  
       },
       { 
       	test: /\.css$/, 
       	loader: 'style-loader!css-loader'
       },
       {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
       }

    ]
  },
   resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',
            'vuex': 'vuex/dist/vuex.js',
            'vue-resource': 'vue-resource/dist/vue-resource.js',
            'vue-router': 'vue-router/dist/vue-router.js'
        }
    }
};

