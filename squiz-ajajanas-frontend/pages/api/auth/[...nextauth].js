import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
          // Persist the OAuth access_token and or the user id to the token right after signin
          if (account) {
            token.accessToken = account.access_token
            token.id = profile.id
          }
          console.log(token);
          return token 
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            
            console.log(session);
            return session
          }

      },
    secret: process.env.JWT_SECRET
});



