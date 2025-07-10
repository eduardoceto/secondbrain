import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getDocuments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("documents").collect();
  },
});

export const createDocument = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const document = await ctx.db.insert("documents", {
      title: args.title,
    });
    return document;
  },
});