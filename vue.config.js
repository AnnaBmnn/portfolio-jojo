module.exports = {
    plugins: 
        { 
            // static image files
            test: /\.(png|jpg|svg)$/, 
            loader: 'file-loader',
            options: { 
              name: '[name].[ext]',
              outputPath: 'images/'
            }
        }

}