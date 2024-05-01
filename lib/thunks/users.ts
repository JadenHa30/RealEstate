'use client'

import { post, get } from '@/lib/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersType } from '../reducers/users';

export const fetchMe = createAsyncThunk('users/fetchMe', async (_, thunkAPI) => {
    try {
        const response = await get('users/me', '', {}, { isContentTypeJson: true, requestOptions: { credentials: 'include' } });
        const responseData = await response.json();
        console.log('responseData', responseData)
        return responseData;
    } catch (error) {
        console.log('error in fetchAccess', error);
    }
});

export const fetchMeCases = {
    fulfilled: (state: usersType, action: any) => {
        state.status = 'successful';
        const { payload } = action;
        console.log('user payload', payload)
        if (payload.code !== 200) {
            return state.error = action.payload;
        }
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        return state;
    },
    rejected: (state: usersType, action: any) => {
        state.status = 'idle';
    },
    pending: (state: usersType, action: any) => {
        state.status = 'loading';
    },
};