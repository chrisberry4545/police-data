const _buildDir = 'dist';
const _srcDir = _buildDir + '/src';

const config = {
    preWatchTasks: [
        'copy-folders',
        'svgstore',
        'browser-sync',
    ],
    watchTasks: [
        'unit-tests',
        'tslint',
        'watch:build',
    ],
    buildTasksDev: [
        'copy-folders',
        'rollup-dev'
    ],
    buildTasksDist: [
        'clean',
        'copy-folders',
        'rollup-dist',
    ],
    clientEntryPoint: _srcDir + '/client/kite.client.window.js',
    dir: {
        build: _buildDir,
        src: _srcDir,
        test: _srcDir,
        coverageOutput: 'coverage',
        sourceMaps: 'sourcemaps',
    },
    filesToBuild: [
        '**/*.ts',
        '!node_modules/**',
        '!example/**',
        '!dist/**',
        '!build-scripts/**',
    ],
    filesToClean: [
        './dist/*',
        '!./dist/vendor.es2015.js',
        '!./dist/vendor.d.ts'
    ],
    filesToWatch: [
        './src/**/*.ts',
        './src/**/*.{pug,html,scss}',
        './styles/**/*.scss',
        './examples/browser-app/app.client.js',
        './examples/node-app/app.server.js',
    ],
    foldersToCopy: [
        './polyfills',
    ],
    svgConfig: {
        svgPath: './assets/images/*.svg',
        inHtmlPath: './index.html',
    },
    bsConfig: {
        server: {
            baseDir: './dist'
        }
    },
    outputFileName: 'kite.js',
    rollup: {
        configDev: './rollup-config/rollup.config.dev.js',
        configDist: './rollup-config/rollup.config.js',
        configVendor: './rollup-config/rollup.config.vendor.js',
    },
    tsConfig: 'tsconfig.json',
    webpackConfig: 'webpack.config.js',
};

module.exports = config;
