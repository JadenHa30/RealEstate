'use client'

import { createSlice } from '@reduxjs/toolkit';
import { fetchAccess, fetchAccessCases } from '../thunks/auth';
const initialState = {
    status: 'idle',
    username: "",
    accessToken: "",
    refreshToken: "",
    expiryDuration: 0,
}
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchAccess.pending, fetchAccessCases.pending)
      .addCase(fetchAccess.fulfilled, fetchAccessCases.fulfilled)
      .addCase(fetchAccess.rejected, fetchAccessCases.rejected);
    }
});
export default accountSlice.reducer;