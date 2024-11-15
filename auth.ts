import NextAuth from "next-auth";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { auth, handlers, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/auth/login"
    },
    events: {

    },
    callbacks: {
        async signIn({ user, account }) {
            // if (account?.provider === "credentials"){
            //     return true
            // }
            // return false
            return true
        },
        async session({ session, token }) {
            // Adding userId to the session from the JWT token
            if (token?.sub) {
                session.user.id = token.sub;  // Or use token.userId if that's where the userId is stored
            }
            return session;
        },

        // JWT callback: Here we are adding the userId to the JWT token
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;  // Assuming user.id contains the userId
            }
            return token;
        }
    },
    // TODO : figure out callbacks, sessions, jwt etc. goodluck
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})