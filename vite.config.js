import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: "./static",

	plugins: [
		tsConfigPaths({
			extensions: [".js", ".ts", "jsx", ".tsx", "svelte", "vue", "json"],
		}),
	],

	// TODO: Until there's a better integration with Jest, remove it along with
	// dotenv as dependency
	// Source: https://github.com/vitejs/vite/issues/1955
	define: {
		"process.env.VARIABLE": `"${process.env.VARIABLE}"`
	},
});
