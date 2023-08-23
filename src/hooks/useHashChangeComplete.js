import { useEffect } from 'react';

import { useRouter } from 'next/router';

const useHashChangeComplete = (callback) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('hashChangeComplete', callback);

    return () => {
      router.events.off('hashChangeComplete', callback);
    };
  }, [callback, router]);
};

export default useHashChangeComplete;
