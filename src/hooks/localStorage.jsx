import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
  const [value, setValue] = useState(localStorage.getItem(key));

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.storageArea === localStorage && event.key === key) {
        console.log('we had a change')
        setValue(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, [key]);

  return value;
}