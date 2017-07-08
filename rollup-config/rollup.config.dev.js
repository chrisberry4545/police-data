import runPlugins from './rollupPlugins';

export default {
    entry: 'src/app/main/main.browser.ts',
    dest: 'dist/kite/main.js',
    format: 'iife',
    sourceMap: true,
    moduleName: 'vendor',
    plugins: runPlugins(),
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        'rxjs/add/operator/map',
        'rxjs/observable/forkJoin',
        'rxjs/observable/fromPromise',
        'rxjs/operator/map',
    ],
    globals: {
        '@angular/common' : 'vendor._angular_common',
        '@angular/compiler' : 'vendor._angular_compiler',
        '@angular/core' : 'vendor._angular_core',
        '@angular/http' : 'vendor._angular_http',
        '@angular/platform-browser' : 'vendor._angular_platformBrowser',
        '@angular/platform-browser-dynamic' : 'vendor._angular_platformBrowserDynamic',
        '@angular/router' : 'vendor._angular_router',
        '@angular/forms' : 'vendor._angular_forms',
        'rxjs/add/operator/map': 'vendor._rxjsAddOperatorMap',
        'rxjs/operator/map': 'vendor._rxjsOperatorMap',
        'rxjs/observable/forkJoin': 'vendor._rxjsObservableForkJoin',
        'rxjs/observable/fromPromise': 'vendor._rxjsObservableFromPromise',
    }
}
