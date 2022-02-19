import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: "https://suggest.taobao.com/",
        // target: "https://localhost:8081/",
        changeOrigin: true,
        rewrite: path => path.replace('/api', '/')
      }
    }
  }
})
