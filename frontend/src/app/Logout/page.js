// components/LogoutButton.js
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../redux/slices/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <div>
      {isAuthenticated && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
