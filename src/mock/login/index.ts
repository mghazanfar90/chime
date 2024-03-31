export const mockApiLogin = async (data: { email: string, password: string }): Promise<UserData> => {
  const { email, password } = data;
  // Dummy user data
  const userData: UserData = {
    email: 'ghazanfar@chime.com',
    password: '123456',
    token: 'YwDdheZuYYg8I4SzhO8T2EvLp28zsuOLGGR10DaEoksph25hPG7yzGktiQsfAdjR'
  };

  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === userData.email && password === userData.password) {
    return userData;
  } else {
    throw new Error('Invalid username or password');
  }
};
