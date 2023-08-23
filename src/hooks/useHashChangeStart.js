import { useEffect } from 'react';

import { useRouter } from 'next/router';

const useHashChangeStart = (callback) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('hashChangeStart', callback);

    return () => {
      router.events.off('hashChangeStart', callback);
    };
  }, [callback, router]);
};

export default useHashChangeStart;
