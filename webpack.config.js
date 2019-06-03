const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval', //빠르게..
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'], //'./WordRelay,jsx'는 webpack에서 알아서 의존관계 파악하므로 적지않아도 된다
    }, 
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'], // class react에 constructor없이 state = {} 쓸수 있게 해준다
            }
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'), //path.join는 경로를 합쳐준다. __dirname: 현재폴더
        filename: 'app.js'
    },

}