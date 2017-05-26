module.exports = {
    entry: {
        base     : './Controller/Base.js',
        derived : './Controller/Derived.js'
    },
    output: {
        //path: path.join(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};
