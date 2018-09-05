import path from 'path';
import webpack from 'webpack';
import WebpackCleanupPlugin from 'webpack-cleanup-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackBundleAnalyze from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

const cleanupPlugin = new WebpackCleanupPlugin({
    exclude: [".gitignore"],
});

const manifestPlugin = new ManifestPlugin();

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[contenthash].css",
    chunkFilename: "[contenthash].css"
});


const analyzePlugin = new WebpackBundleAnalyze.BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    openAnalyzer: false,
    generateStatsFile: true
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/html/index.html'),
    inject: 'head'
});

const scriptExtHtmlWebpackPlugin = new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
});

const sourceRootPath = 'src/';

const config = {
    entry: {
        index: path.resolve(__dirname, sourceRootPath + '/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[chunkhash].js'
    },
    resolve: {
        modules: [path.resolve(__dirname, sourceRootPath), 'node_modules'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                }

            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(gif|png|jpg|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        cleanupPlugin,
        manifestPlugin,
        miniCssExtractPlugin,
        htmlWebpackPlugin,
        scriptExtHtmlWebpackPlugin,
        analyzePlugin
    ],
    node: {
        net: 'empty',
        dns: 'empty'
    }
};


export default config;