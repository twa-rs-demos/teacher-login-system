var path = require('path');

module.exports = {

    entry: {
        file:'./components/TeacherLoginApp.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    }
};