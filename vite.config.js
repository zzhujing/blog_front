import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const pathSrc = fileURLToPath(new URL('./src', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),

            ],
        }),

        Components({
            resolvers: [
                ElementPlusResolver(),],
        }),

    ],
    resolve: {
        alias: {
            '@': pathSrc
        }
    }
})
