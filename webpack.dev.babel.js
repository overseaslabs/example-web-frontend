/*
 * |--------------------------------------------------
 * | Development amendment for the common config
 * |--------------------------------------------------
 */

import merge from 'webpack-merge';
import common from './webpack.common.babel';
import webpack from 'webpack';

const config = merge(common, {
    mode: 'development',
    devtool: 'source-map',
});

export default config;