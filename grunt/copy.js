module.exports = {
    all: {
        files: [
            // includes files within path
            {expand: true, flatten: true, src: ['./.build/uglify-output/*'], dest: './client/code/app/', filter: 'isFile'}
        ]
    }
};