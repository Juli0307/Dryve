import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <div style={{ width: '100%' }}>
      <Topbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
