import devConfig from './kite.rollup.config.dev.js';
import runPlugins from './rollupPlugins';

const productionConfig = Object.assign({},
    devConfig,
    {
        sourceMap: false,
        plugins: runPlugins({ production: true }),
        external: devConfig.external,
        globals: devConfig.globals
    }
);

export default productionConfig;
