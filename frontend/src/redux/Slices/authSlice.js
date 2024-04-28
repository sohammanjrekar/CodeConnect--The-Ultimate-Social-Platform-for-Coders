// Import necessary modules
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') || null : null,
  isAuthenticated: typeof window !== 'undefined' ? localStorage.getItem('token') ? true : false : false,
  userId: null, // Add userId field to store the user ID
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
};

// Define asynchronous thunk for login
export const loginAsync = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/account/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      // If authentication fails, return error message
      return rejectWithValue(data.detail);
    }

    const token = data.token.access;
    const userId = data.user_id;

    localStorage.setItem('token', token);

    return { token, userId };
  } catch (error) {
    throw new Error(error.message);
  }
});

// Define asynchronous thunk for signup
export const signupAsync = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/account/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const data = await response.json();
    const token = data.access; // Extract 'access' token from the response

    localStorage.setItem('token', token); // Store the token in localStorage

    return { token }; // Return the token
  } catch (error) {
    throw new Error(error.message);
  }
});

// Define asynchronous thunk for logout
export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  try {
    // Send a request to logout
    const response = await fetch('http://127.0.0.1:8000/account/logout/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the token in the request headers
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    localStorage.removeItem('token'); // Remove the token from localStorage
  } catch (error) {
    throw new Error(error.message);
  }
});

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.userId = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { setToken, setUser, clearToken } = authSlice.actions;
export default authSlice.reducer;
