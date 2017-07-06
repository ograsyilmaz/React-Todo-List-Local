var path =require('path');
var webpack=require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports={
devtool:'source-map',
entry:['./src/App/comp.jsx'],
output:{
    path : path.join(__dirname,'public'),
filename:'bundle.js'
},
resolve: {
 modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".json","jsx"],
},
module:{
    loaders:
     [{
         test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,

        },
        { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }]
},
plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
]



};