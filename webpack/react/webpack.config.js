module.exports = {
    entry: './src/main.js',
    output: {
        filename: './out/bundle.js'
    },
    module: {
        rules: [
            {
                // file pattern
                test: '/js$/',
                // plugin
                loader: 'babel-loader',
                // option for the plugin
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}