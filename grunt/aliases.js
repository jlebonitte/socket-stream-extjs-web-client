module.exports = {
    'dev': [
        'clean:all',
        'sencha_dependencies:all',
        'uglify:dev',
        'copy:all'
    ],
    'prod': [
        'clean:all',
        'sencha_dependencies:all',
        'uglify:prod',
        'copy:all'
    ],
    'watch': [
        'watch'
    ]
};