'use client'

import { createSlice } from '@reduxjs/toolkit';
import { fetchMe, fetchMeCases } from '../thunks/users';
export type usersType = {
    status?: 'idle' | 'loading' | 'successful',
    name?: string,
    email?: string,
    id?: string,
    error?: any,
}
const initialState: usersType = {
    status: 'idle',
    name: "",
    email: "",
    id: "",
    error: null,
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchMe.pending, fetchMeCases.pending)
      .addCase(fetchMe.fulfilled, fetchMeCases.fulfilled)
      .addCase(fetchMe.rejected, fetchMeCases.rejected);
    }
});
export default usersSlice.reducer;