import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import {
  //
  Page404,
  HomePage,
  MaintenancePage,
  PageList,
  InvitationPage
} from './elements';

import { invitations } from 'src/config';

// ----------------------------------------------------------------------

export default function Router() {

  const inviteLinks = invitations.map((invitee) => (
    { path: invitee[1], element: <InvitationPage name={invitee[0]} /> }
  ));


  return useRoutes([
    // Main Routes
    {
      element: <HomePage />,
      path: '',
    },
    { path: 'maintenance', element: <MaintenancePage /> },
    { path: '404', element: <Page404 /> },
    { path: 'page-list', element: <PageList /> },
    {
      children: [
        ...inviteLinks
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
