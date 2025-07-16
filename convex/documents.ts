import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getDocuments = query({
  args: {},
  handler: async (ctx) => {
    const identity = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    if (identity === undefined) {
      return [];
    }

    return await ctx.db.query("documents")
    .withIndex("by_token_identifier", (q) => q.eq("tokenIdentifier", identity)).collect();
  },
});

export const createDocument = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    if (identity === undefined) {
      return [];
    }

    const document = await ctx.db.insert("documents", {
      title: args.title,
      tokenIdentifier: identity,
    });
    return document;
  },
});