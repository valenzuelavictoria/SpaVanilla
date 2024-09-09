const path = require('path'); //importa la libreria path/require es como import de py
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
entry: './index.js', //archivo de entrada
output: {
path: path.resolve(__dirname, 'dist'), //carpeta donde se guarda el proyecto
filename: 'main.js' //nombre del archivo de salida
},
resolve: {
extensions: ['.js'], //extensiones que vamos a utilizar
},
module: {
rules: [
{
test: /\.js?$/, //expresion regular para idenificar los archivos js
exclude: /node_modules/,//excluir la carpeta node_modules
use: {
loader: 'babel-loader', //utilizar el loader de babel
}
}
]
},
plugins: [
new HtmlWebpackPlugin(
{
inject: true,
template: './public/index.html', //archivo html de entrada
filename: './index.html', //archivo html de salida
}
),
new CopyWebpackPluguin({
patterns: [{ from: './src/styles/styles.css', //archivo css de entrada
to: '' }],
})
]
}