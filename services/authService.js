export const loginUser = async (email, password) => {
  try {
    const res = await fetch('https://your-api.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('Login failed');
    const data = await res.json();

    localStorage.setItem('token', data.token); // or use cookie
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
