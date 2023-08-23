import { useEffect } from 'react';

import { useRouter } from 'next/router';

const useRouterChangeStart = (callback) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', callback);

    return () => {
      router.events.off('routeChangeStart', callback);
    };
  }, [callback, router]);
};

export default useRouterChangeStart;
