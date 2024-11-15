import NextAuth from "next-auth";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {auth, handlers, signIn, signOut} = NextAuth({
    pages: {
        signIn: "/auth/login"
    },
    events:{
        
    },
    callbacks:{
        async signIn({user, account}) {
            // if (account?.provider === "credentials"){
            //     return true
            // }
            // return false
            return true
        }
    },
    // TODO : figure out callbacks, sessions, jwt etc. goodluck
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
})