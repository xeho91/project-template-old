/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

/** @type { import("ts-jest/dist/types").InitialOptionsTsJest } */
const config = {
	automock: false,
	clearMocks: true,

	globals: {
		"ts-jest": {
			useESM: true,
		},
	},

	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths, {
			prefix: "<rootDir>/",
		}),
		".+\\.(css|scss|svg)$": "identity-obj-proxy",
	},

	preset: "ts-jest/presets/js-with-ts",

	roots: ["<rootDir>"],

	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

	transform: {
		"^.\\.(js|jsx|ts|tsx)$": "ts-jest",
	},
	transformIgnorePatterns: ["node_modules/(?!@iconify-icons)"],

	testEnvironment: "jsdom",

	verbose: true,
};

module.exports = config;
