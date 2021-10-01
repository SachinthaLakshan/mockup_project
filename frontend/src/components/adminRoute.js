import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  return auth && auth.token ? <Route {...rest} /> : <Redirect to="login" />;
};

export default AdminRoute;
