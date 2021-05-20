import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "./public/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    base: "/", // 生产环境下的公共路径
    outDir: "dist", // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
    plugins: [vue()],

    productionSourceMap: false,
    // 服务端渲染
    // ssr: false,

    // 引入第三方的配置
    // optimizeDeps: {
    //     include: ["moment", "axios"],
    // },
    server: {
        open: true, // 启动服务后是否打开浏览器
        overlay: {
            // 错误信息展示到页面
            warnings: true,
            errors: true,
        },
        // host: '0.0.0.0',
        port: 4002, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                secure: false,
                target: "http://localhost:4288/",
                logLevel: "debug",
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            },
        },
    },
});
