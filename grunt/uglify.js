module.exports = {
    dev: {
        options: {
            beautify: true,
            mangle: false,
            sourceMap: true,
            sourceMapIncludeSources: true
        },
        files: {
            './.build/uglify-output/app.js': ['<%= sencha_dependencies_all_app %>']
        }
    },
    prod: {
        options: {
            beautify: false,
            mangle: true,
            sourceMap: true,
            sourceMapIncludeSources: false
        },
        files: {
            './.build/uglify-output/app.js': ['<%= sencha_dependencies_all_app %>']
        }
    }

};