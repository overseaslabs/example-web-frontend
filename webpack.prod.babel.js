import merge from 'webpack-merge';
import common from './webpack.common.babel';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';

const uglifyJsPlugin = new UglifyJSPlugin({
    uglifyOptions: {
        output: {
            comments: false
        }
    }
});

const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({
    cssProcessorOptions: {discardComments: {removeAll: true}},
});

const config = merge(common, {
    mode: 'production',
    plugins: [
        uglifyJsPlugin,
        optimizeCssAssetsPlugin
    ]
});

export default config;