module.exports = {
    all: {
        options: {
            pageRoot: './sencha',
            appJs: 'app.js',
            pageToProcess: 'index.html',
            <!-- This never works with true for me... -->
            includeAllScriptTags: false
        }
    }
};