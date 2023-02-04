import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// MAIN
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));
export const PageList = Loadable(lazy(() => import('../pages/PageList')));
export const InvitationPage = Loadable(lazy(() => import('../pages/InvitationPage')));


