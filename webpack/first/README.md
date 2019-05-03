# Simple Packing

## Package

```bash
webpack main.js
```

## Test

```bash
node dist/main.js
```

## Other

### Configuration

webpack can be configured with .js file
If the following content is saved as `webpack.config.js`,
`webpack` command automatically load the configuration.

```js
module.exports = {
    entry: './main.js',
    output: {
        filename: 'out/test.js'
    }
}
```

If the configuration is saved with another name, such as `file.js`,
it can be used as `webpack --config file.js`.

### Command

* `webpack`: build for development
* `webpack -p`: build for production
* `webpack --watch`: build for development with watching feature. it enables incremental building.