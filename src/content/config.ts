import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    titleTH: z.string(),
    titleEN: z.string(),
    locationTH: z.string().optional(),
    locationEN: z.string().optional(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    designDetailsTH: z.string().optional(),
    designDetailsEN: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    parity: z.number(),
  }),
});

export const collections = {
  projects: projectCollection,
};
