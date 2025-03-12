import { useState, useEffect } from 'react';

interface User {
  email: string
  idcongty: string,
  idnguoidung: string,
  sodienthoai: string,
  ten: string,
  tencongty: string
}

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  return user;
}
