import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getDocuments = query({
  args: {},
  handler: async (ctx) => {
    const identity = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
    if (identity === undefined) {
      throw new ConvexError("Not authenticated");
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
      throw new ConvexError("Not authenticated");
    }

    const document = await ctx.db.insert("documents", {
      title: args.title,
      tokenIdentifier: identity,
    });
    return document;
  },
});