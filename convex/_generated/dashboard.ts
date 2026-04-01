import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) return null;

    const store = await ctx.db
      .query("stores")
      .withIndex("by_userId", (q) => q.eq("userId", user._id))
      .unique();

    return {
      userName: user.name ?? null,
      userEmail: user.email ?? null,
      storeName: store?.name ?? null,
      storeSetupCompleted: store?.setupCompleted ?? false,
    };
  },
});

export const createStore = mutation({
  args: {
    name: v.string(),
    category: v.optional(v.string()),
    currency: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError({ message: "User not authenticated", code: "UNAUTHENTICATED" });
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new ConvexError({ message: "User not found", code: "NOT_FOUND" });
    }

    const existing = await ctx.db
      .query("stores")
      .withIndex("by_userId", (q) => q.eq("userId", user._id))
      .unique();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert("stores", {
      userId: user._id,
      name: args.name,
      category: args.category,
      currency: args.currency ?? "SAR",
      setupCompleted: false,
    });
  },
});
