const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
//const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        detail: './src/js/detail.js',
        collections: './src/js/collections.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {
                    'presets': ['latest']
                }
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    //{
                    //  loader: miniCssExtractPlugin.loader,
                    // options: {
                    //     hmr: process.env.NODE_ENV === 'development'
                    // }
                    //},
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|ico)$/i,
                loader: [
                    'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new uglify(),
        new htmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            title: '新闻头条',
            chunksSortMode: 'manual',
            chunks: ['index'],
            excludeChunks: ['node_modules'],
            hash: true
        }),
        new htmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            filename: 'detail.html',
            template: path.resolve(__dirname, 'src/detail.html'),
            title: '新闻详情',
            chunksSortMode: 'manual',
            chunks: ['detail'],
            excludeChunks: ['node_modules'],
            hash: true
        }),
        new htmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            filename: 'collections.html',
            template: path.resolve(__dirname, 'src/collections.html'),
            title: '我的收藏',
            chunksSortMode: 'manual',
            chunks: ['collections'],
            excludeChunks: ['node_modules'],
            hash: true
        })
        //new miniCssExtractPlugin({
        //filename: 'css/[name].css'
        //})
    ],
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        },
        host: 'localhost',
        port: 3200
    }
};

module.exports = config;