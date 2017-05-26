# ES6TS
#npm init ---> This will create package.json
#npm install -g webpack
#        This require webpack.config.js to be cofigured.
#        Eg.
#            module.exports = {
#              entry: {
#                a:  './Controller/Base1.js',
#                b: './Controller/Register.js'
#              },
#              output: {
#                  //path: path.join(__dirname, "dist"),
#                  filename: '[name].bundle.js'
#              },
#              module: {
#                  loaders: [
#                      { test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/ }
#                 ]
#              }
#          };
#npm install --save-dev babel-loader
#npm install --save-dev babel-core
#webpack
