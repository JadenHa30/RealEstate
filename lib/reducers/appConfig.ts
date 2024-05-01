'use client'

import { createSlice } from '@reduxjs/toolkit';
import { updateAppConfig } from '../thunks';
import { fetchAppConfig, fetchAppConfigCases, updateAppConfigCases } from '../thunks/appConfig';
import { AppConfigType } from '@/globalTypes';

const initialState: AppConfigType = {
    endpoints: {
        local: '',
        remote: '',
    },
    darkMode: false,
    navigation: {
        navbar: [
            {
                title: '',
                screen: '',
            }
        ] 
    }
}
const appConfigSlice = createSlice({
    name: 'appConfig',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAppConfig.pending, fetchAppConfigCases.pending)
        .addCase(fetchAppConfig.fulfilled, fetchAppConfigCases.fulfilled)
        .addCase(fetchAppConfig.rejected, fetchAppConfigCases.rejected)
        .addCase(updateAppConfig.pending, updateAppConfigCases.pending)
        .addCase(updateAppConfig.fulfilled, updateAppConfigCases.fulfilled)
        .addCase(updateAppConfig.rejected, updateAppConfigCases.rejected);
    }
});
export default appConfigSlice.reducer;