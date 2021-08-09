import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: "./static",

	plugins: [
		tsConfigPaths({
			extensions: [".js", ".ts", "jsx", ".tsx", "svelte", "vue", "json"],
		}),
	],
});
