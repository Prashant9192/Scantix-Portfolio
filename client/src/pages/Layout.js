import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Other common elements like a footer or sidebar can go here */}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default Layout;
