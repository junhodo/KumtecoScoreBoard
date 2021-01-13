const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const RefreshWebpackPlug = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: "kumteko-score-board-setting",
    mode: 'development',    // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['babel-polyfill', './src/index'],
    }, // 입력 (index.jsx, root.jsx 는 불러옴)
    module: {   // module = loaders
        rules: [
            {
                test: /\.jsx?/,  // js, jsx파일 적용
                // 룰
                loader: 'babel-loader',
                // babel 옵션
                options: {
                    presets: [{
                        presets: [
                            // 최신 문법 못쓰는 옛날 버전 or 처리량 속도 늘어나는 문제
                            // https://github.com/browserslist/...
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ['> 5% in KR', 'last 2 chrome versions'],   // 호환범위
                                },
                                debug: false,
                            }],
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            'react-refresh/babel',
                        ]
                    }],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new RefreshWebpackPlug(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }, // 출력 (dist/app.js)

    devServer: {
        https: true,
        publicPath: '/dist/',
        hot: true,
    }
};

