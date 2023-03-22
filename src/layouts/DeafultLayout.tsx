import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import { Topbar } from '../components/topbar';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <div>
      <Topbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}
