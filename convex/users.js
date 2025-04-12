import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string(),
    },
    handler: async (ctx, args) => {
        // if user exist ?
        const userData = await ctx.db.query('users')
            .filter(q => q.eq(q.field('email'), args.email))
            .collect()
        // if user not exist 

        if (userData?.length == 0) {
            const result = await ctx.db.insert('users', {
                name: args.name,
                email: args.email,
                picture: args.picture,

            });
            return result
        }

        return userData[0];
    }

})