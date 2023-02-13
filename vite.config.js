/*
 * @Description:
 * @Author: 孟兵
 * @Date: 2022-07-05 09:28:56
 * @LastEditTime: 2022-09-02 15:05:13
 * @LastEditors: 孟兵
 * @FilePath: \vite-project\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
