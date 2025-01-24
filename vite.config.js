import fs from "fs";
import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const SERVE_HOST_ENABLED = !!env.SERVE_HOST;

    let httpsConfig = false;

    if (SERVE_HOST_ENABLED) {
        try {
            httpsConfig = {
                key: fs.readFileSync(env.SERVE_HTTPS_KEY),
                cert: fs.readFileSync(env.SERVE_HTTPS_CERT),
            };
        } catch (error) {
            console.error(
                "Error reading HTTPS key or certificate files:",
                error
            );
        }
    }

    return {
        server: SERVE_HOST_ENABLED
            ? {
                  host: env.SERVE_HOST,
                  port: 5173,
                  https: httpsConfig,
              }
            : false,
        plugins: [
            laravel({
                input: [
                    "resources/css/app.css",
                    "resources/js/app.js",
                    "resources/js/app/index.jsx",
                ],
                refresh: true,
            }),
            react(),
            tailwindcss(),
        ],
    };
});
