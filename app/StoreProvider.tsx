'use client'

import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { fetchAppConfig } from '@/lib';
import { persistStore } from 'redux-persist';

persistStore(store);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (mounted && window.origin) {
      store.dispatch(fetchAppConfig(window.origin));
    }
    setMounted(true);
  }, [mounted]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}