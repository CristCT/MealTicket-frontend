import React from 'react';

function useLocalStorage(key: string, initialValue: string | null = null) {
  const [storedValue, setStoredValue] = React.useState<string | null>(() => {
    try {
      if (typeof window === 'undefined') {
        console.warn('LocalStorage is not available on the server');
        return initialValue;
      }
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value: string | null) => {
    try {
      if (typeof window !== 'undefined') {
        setStoredValue(value);
        if (value === null) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, value);
        }
      }
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useToken() {
  const [token, setToken] = useLocalStorage('token');
  return { token, setToken };
}
