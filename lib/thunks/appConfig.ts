'use client'

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWithTimeout} from '../requests';
import { AppConfigType } from '@/globalTypes';

import isEmpty from 'lodash/isEmpty';

type DataUpdateAppConfig = {
    newConfig: AppConfigType,
    url: string,
}

export const fetchAppConfig = createAsyncThunk('appConfig/fetchAppConfig', async (url: string, thunkAPI?: any) => {
    try {
        if (url) {
            const requestInit = {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await fetchWithTimeout(`${url}/api/config`, requestInit);
            const responseData = await response.json()
            return responseData;
        }
        return null;
    } catch (error) {
        console.log('error in fetchAppConfig', error)
    }
});

export const fetchAppConfigCases = {
    fulfilled: (state, action) => {
        if (action.payload.status === 200) {
            state = action.payload.data;
            return state;
        }
    },
    rejected: (state, action) => {
    },
    pending: (state, action) => {
    },
};
export const updateAppConfig = createAsyncThunk('appConfig/updateAppConfig', async (data: DataUpdateAppConfig, thunkAPI) => {
    try {
        const requestInit = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: isEmpty(data.newConfig) ? {} : JSON.stringify(data.newConfig),
        }
        const response = await fetchWithTimeout(`${data.url}/api/config`, requestInit);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log('error in updateAppConfig', error);
    }
});
export const updateAppConfigCases = {
    fulfilled: (state, action) => {
        if (action.payload.status === 200) {
            state = action.payload.data;
            return state;
        }
    },
    rejected: (state, action) => {
    },
    pending: (state, action) => {
    },
};