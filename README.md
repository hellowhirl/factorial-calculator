# factorial-calculator

<img src="./readme_images/final_factorial_banner_red.png" width="500">

### Summary

This is a Final Fantasy I themed factorial calculator. See GitHub pages link:
https://hellowhirl.github.io/factorial-calculator/

### What is a factorial?

A factorial operation takes the product of all positive integers less than or equal to a number (n), denoted as n!.

### Example:

6! = 1 x 2 x 3 x 4 x 5 x 6

- Result = 720

=====================================

## Available Scripts

In the project directory, you can run:

### `npm run-script build`

Builds the app for production to the `dist` folder.<br>

## Notes about webpack

Below settings along with setting will tell webpack to stop minimying our "main.js" file

- `webpack --config webpack.config.js`
- `mode: "development"`
- `devtool: none`

For hot reloading use:

- `webpack-dev-server`

We use 'loaders' to handle other types of files besides JavaScript in Webpack

- packages that we install which determine how certain files should be pre-processed as they are loaded (imported)

### Loaders

There is a certain order to using "style-loader" and "css-loader"

- css-loader: translate CSS to JavaScript
- style-loader: takes JS from css-loader and injects it into the DOM

* \*However, the "use" array actually loads them in reverse order, so should be ["style-loader", "css-loader"]
