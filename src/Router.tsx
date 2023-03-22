import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { NewUsers } from './pages/Add';
import { DefaultLayout } from './layouts/DeafultLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/new" element={<NewUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
