// vite.config.js
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const resolvePath = str => resolve(__dirname, str);

export default defineConfig({
    plugins: [
        typescript({
            'target': 'es6',
            'rootDir': resolvePath('./src'),
            'declaration': true,
            exclude: resolvePath('./node_modules/**'),
            allowSyntheticDefaultImports: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'nitro-renderer',
            fileName: 'nitro-renderer'
        }
    },
    resolve: {
        alias: {
            '@nitrots/api': resolve(__dirname, 'packages/api/src'),
            '@nitrots/assets': resolve(__dirname, 'packages/assets/src'),
            '@nitrots/avatar': resolve(__dirname, 'packages/avatar/src'),
            '@nitrots/camera': resolve(__dirname, 'packages/camera/src'),
            '@nitrots/communication': resolve(__dirname, 'packages/communication/src'),
            '@nitrots/configuration': resolve(__dirname, 'packages/configuration/src'),
            '@nitrots/events': resolve(__dirname, 'packages/events/src'),
            '@nitrots/localization': resolve(__dirname, 'packages/localization/src'),
            '@nitrots/room': resolve(__dirname, 'packages/room/src'),
            '@nitrots/session': resolve(__dirname, 'packages/session/src'),
            '@nitrots/sound': resolve(__dirname, 'packages/sound/src'),
            '@nitrots/utils': resolve(__dirname, 'packages/utils/src')
        }
    },
    server: {
        host: '127.0.0.1'
    }
});
