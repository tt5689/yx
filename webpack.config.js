const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATH = {
    // 这的key值随便取
    app:path.join(__dirname,'src/main.js'),//入口文件
    build:path.join(__dirname,'dist')
}
module.exports = {
    //定义当前的坏境
    mode:'development',
    //定义入口文件
    entry:{
        // 这里面的key决定了出口文件的名称
        app:PATH.app
    },
    // 定义出口文件
    output:{
        //entry里面的key值是什么name的值就是什么
        filename:"[name].js",
        path:PATH.build
    },
    // 涉及到js中怎么引入css 图片 js中es6 es7的东西怎么让游览器识别 就和模块打包有关module
    module:{
        //打包规则
        rules:[
            //一个对象相当于一个打包规则
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"]//css都要接受use处理 先用sass解析 从右到左 从下到上 loader需要安装
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        //代码的转换  将游览器不识别的js转换成浏览器识别的
                        presets:["@babel/env"]
                    }
                },
                exclude:__dirname+'./node_modules'//排除node_modules的文件
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2000
                    }
                }
            },
            // 配置iconfont
            {
                test:/\.(eot|woff|ttf|svg|woff2)$/,
                use:{
                    loader:"url-loader"
                }
            },
            {
                test:/\.(vue)$/,
                loader:"vue-loader"
            }
        ]
    },
    //插件都要在这里实例
    plugins:[
        new HtmlWebpackPlugin({
            template:"index.html",//模板文件，定义在与当前文件同级的文件下
            filename:"index.html",//模板文件打包到dist文件的文件名字
            title:"tt-Vue"
        }),
        new VueLoaderPlugin()
    ],
    // 服务端代理跨域配置 http://m.maoyan.com/ajax/movieOnInfoList?token=
    devServer:{
        proxy:{ //跨域配置项
            // 当遇到这个路径的时候,将你的本地域名替换成target中的域名
            "/xhr":{
                target:"https://m.you.163.com",//目标
                changeOrigin:true//允许跨域代理
            }
        }
    }
}