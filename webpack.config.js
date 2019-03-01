const path             = require('path');
const webpack          = require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.jsx',//入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),//path表示我们通过webpack打包的文件，最终要放在什么位置
        publicPath:'/dist/',
        //放置在./dist文件夹中，dirname前面是两个下划线
        filename: 'js/app.jsx'
    },
    module: {
        rules: [
            //react(jsx)语法的处理
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']//env会自动根据环境打包
                    }
                }
            },
            //css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //sass文件的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片的配置
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'
                        }
                    }
                ]
            }

        ]
    },
    plugins:[
        //处理html文件
        new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/base.js'
        })],
    devServer: {
        port:8086
   },

};