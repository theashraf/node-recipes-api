import json from "rollup-plugin-json"
import babel from "rollup-plugin-babel"
import replace from "rollup-plugin-replace"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import minify from "rollup-plugin-babel-minify"
import path from "path"

const pkg = require("./package.json")

const external = Object.keys(pkg.dependencies)

export default {
	input: path.join(__dirname, "index.js"),
	plugins: [
		json(),
		resolve(),
		babel({
			exclude: "node_modules/**",
			runtimeHelpers: true
		}),
		commonjs(),
		replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
		minify({
			comments: false
		})
	],
	external,
	output: [
		{
			file: path.join(__dirname, "build/index.js"),
			format: "cjs"
		}
	]
}
