import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [react()],
    server: {
      proxy: {
        "/socket.io": {
          target: "http://localhost:3000",
          ws: true,
        },
      },
    },
  };
});
