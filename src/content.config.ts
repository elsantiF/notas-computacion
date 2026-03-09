import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
	loader: glob({ base: "notes", pattern: "**/*.mdx" }),
	schema: z.object({
		id: z.number(),
		title: z.string(),
		date: z.date(),
		author: z.array(z.string()),
	}),
});

export const collections = { notes };
