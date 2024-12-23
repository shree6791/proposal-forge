export const authConfig = {
  pages: {
    signIn: '/credentials',
    signUp: '/credentials',
    error: '/error',
    verifyRequest: '/verify-request',
    newUser: '/welcome'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const isProtected = 
        nextUrl.pathname.startsWith('/inputproposal') || 
        nextUrl.pathname.startsWith('/result');
      
      if (isProtected && !isLoggedIn) {
        return false;
      }
      
      return true;
    },
  },
};