module.exports = {
    scripts: {
        files: './sencha/**/*.js',
        tasks: ['dev', 'forever:dev:restart'],

        options: {
            debounceDelay: 250
        }
    }
};