const path = require('path')
const webpack = require('webpack')
//process.env.NODE_ENV = 'production'; 배포

module.exports = {
  name: 'ResponseCheck',
  mode: 'development', //실서비스 : production
  devtool: 'eval', //개발용, hidden-source-map : 배포용
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./index'], //'./WordRelay,jsx'는 webpack에서 알아서 의존관계 파악하므로 적지않아도 된다
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  //browserslist <--구글 검색
                  browsers: ['> 1% in KR', 'last 2 chrome versions'], //한국에서 점유율 1%이상, 최신 2단계 크롬 버전
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties', // class react에 constructor없이 state = {} 쓸수 있게 해준다
            'react-hot-loader/babel', // hot-loader 사용시 반드시 추가할것
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }), //loader options에 다 debug: true를 자동으로 넣어준다
  ],
  output: {
    path: path.join(__dirname, 'dist'), //path.join는 경로를 합쳐준다. __dirname: 현재폴더
    filename: 'app.js',
    publicPath: '/dist/', // dist 폴더에 빌드하고 싶으면 설정, 설정 후 반드시 npm run dev 재시작하기
  },
}
