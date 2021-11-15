const webpack = require('webpack');
const path = require('path');
module.exports={
    entry:"./client/index.js",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname+"/server",'public')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ]
    }

}