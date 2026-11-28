import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  setAuthError,
  setStatus,
  setUser,
} from "../features/auth/authSlice.js";
import { login, register } from "../services/auth.service.js";

const useAuth = () => {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector((state) => state.auth);

  const registerHandler = async (userData) => {
    try {
      dispatch(clearAuthError());
      dispatch(setStatus("loading"));
      const response = await register(userData);
      return response;
    } catch (error) {
      dispatch(
        setAuthError(
          error.response?.data?.message || "Registration failed. Please try again.",
        ),
      );
      throw error;
    }
  };

  const loginHandler = async (userData) => {
    try {
      dispatch(clearAuthError());
      dispatch(setStatus("loading"));
      const response = await login(userData);
      dispatch(setUser(response.user));
      return response;
    } catch (error) {
      dispatch(
        setAuthError(
          error.response?.data?.message || "Login failed. Please try again.",
        ),
      );
      throw error;
    }
  };
  return { registerHandler, loginHandler, status, loading, error };
};

export default useAuth;
