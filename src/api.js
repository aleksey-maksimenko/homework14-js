export function login(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jwt-token',
        user: email
      });
    }, 300);
  });
}