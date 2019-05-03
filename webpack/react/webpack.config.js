module.exports = {
    entry: './src/main.js',
    // output: {
    //     filename: './out/bundle.js'
    // },
    module: {
        rules: [
            {
                // file pattern
                test: '/js$/',
                exclude: '/node_modules',
                // plugin
                //loader: 'babel-loader',
                // option for the plugin
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}