import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useActivePage = () => {
  const [activePage, setActivePage] = useState('Page1');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const routeToPageMap = {
        '/': 'Page1',
        '/page2': 'Page2',
        '/page3': 'Page3',
        '/page4': 'Page4',
      };
      
      setActivePage(routeToPageMap[router.pathname] || 'Page1');
    }
  }, [router.pathname]); // Add router.pathname as a dependency

  return activePage;
};

export default useActivePage;
