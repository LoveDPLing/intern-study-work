var webpack = require('webpack');
const path = require('path');
module.exports = {
  mode:'development',
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open:true,
    port:7000
 },
    module: {
      rules: [
        { 
             test: /\.css$/,
             use: ['style-loader','css-loader']},
             {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader']
             },
             {
	            test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
	            use: [{
	                loader: 'expose-loader',
	                options: 'jQuery'
	            }, {
	                loader: 'expose-loader',
	                options: '$'
	            }]
            },
      ]  
     } 
};