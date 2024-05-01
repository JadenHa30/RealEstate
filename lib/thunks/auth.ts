'use client'

import { post } from '@/lib/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
type DataType = {
    email: string,
    password: string,
    deviceInfo: {
        deviceId: string,
        deviceType: string,
    }
}
export const fetchAccess = createAsyncThunk('auth/fetchAccess', async (data: DataType, thunkAPI) => {
    try {
        const response = await post('auth/signin', data, {}, {});
        const responseData = await response.json();
        console.log('responseData', responseData)
        return responseData;
    } catch (error) {
        console.log('error in fetchAccess', error);
    }
});

export const fetchAccessCases = {
    fulfilled: (state, action) => {
        state.status = 'successful';
        const { payload } = action;
        if (payload.code !== 200) {
            return state.error = action.payload;
        }
    },
    rejected: (state, action) => {
        state.status = 'idle';
    },
    pending: (state, action) => {
        state.status = 'loading';
    },
};