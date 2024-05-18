// useActivePage.js
import { useEffect, useState } from 'react';

const useActivePage = () => {
  const [activePage, setActivePage] = useState('Page1');

  useEffect(() => {
    // Import useRouter dynamically to avoid SSR issues
    const useRouter = () => import('next/router').then((mod) => mod.useRouter);
    const fetchRouter = async () => {
      const router = await useRouter();
      const { pathname } = router();
      const routeToPageMap = {
        '/': 'Page1',
        '/page2': 'Page2',
        '/page3': 'Page3',
        '/page4': 'Page4',
      };
      setActivePage(routeToPageMap[pathname] || 'Page1');
    };

    fetchRouter();
  }, []);

  return activePage;
};

export default useActivePage;
