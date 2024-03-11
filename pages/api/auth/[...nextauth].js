import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'a41c374cb8e2da755b08',
            clientSecret: '17fd2ac6b6364ca5540d089072677d98a651940a',
        }),
    ],
    secret : '1234qwer',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 