



jest.mock('../Firebase/firebaseConfig.js', () => {
    const analytics = jest.fn().mockReturnValue({
      logEvent: jest.fn(),
    });
  
    const auth: any = jest.fn().mockReturnValue({
      signInWithRedirect: jest.fn(),
      getRedirectResult: jest.fn().mockResolvedValue({
        credential: {
          providerId: 'Google',
        },
        user: {
          getIdToken: jest.fn().mockResolvedValue('abc1234'),
        },
        additionalUserInfo: {
          profile: {
            email: 'jarlingduqueduarte@gmail.com',
            name: 'Jarling Veronica Duque Duarte',
          },
        },
      }),
    });
  
    auth.GoogleAuthProvider = class {
      addScope = jest.fn();
    };
  
    return { auth, analytics };
  });