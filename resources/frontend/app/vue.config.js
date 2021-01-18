module.exports = {
    // local Laravel server address for api proxy
    devServer: { proxy: 'http://localhost:8080' },

    // outputDir should be Laravel public dir
    outputDir: '../../../public/',
    publicPath: '/',

    // for production we use blade template file
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/app.blade.php'
        : 'index.html',
}
