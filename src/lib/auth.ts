import { Environment } from "@/config/environment";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: Environment.GITHUB_CLIENT_ID,
            clientSecret: Environment.GITHUB_CLIENT_SECRET,
          }),
    ]
};


