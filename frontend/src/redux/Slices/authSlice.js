// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') || null : null,
  isAuthenticated: typeof window !== 'undefined' ? localStorage.getItem('token') ? true : false,
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
};

// Define the asynchronous thunk for signup
export const signupAsync = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const response = await fetch('http://localhost:8000/api/signup/', {
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
    const token = data.token.access;

    localStorage.setItem('token', token); // Store the token in localStorage

    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
});

// Define the asynchronous thunk for login
export const loginAsync = createAsyncThunk('auth/login', async (userData) => {
  try {
    const response = await fetch('http://localhost:8000/api/login/', {
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
    const token = data.token.access;

    localStorage.setItem('token', token); // Store the token in localStorage

    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
});

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload); // Store the token in localStorage
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token'); // Remove the token from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { setToken, clearToken } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
