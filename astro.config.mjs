// @ts-check

import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), mdx({
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	})],
});
