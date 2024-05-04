"use client"

import React from 'react';
import { fetchAccess, selectAccount } from '@/lib';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Formik } from 'formik';
import { Input } from '../Input';
import { loginTestId } from '@/utils/testId';
import { Button } from '../Button';

type FormValues = {
    email: string;
    password: string;
}

export function LoginForm() {
    const dispatch = useAppDispatch();
    const login = useAppSelector(selectAccount);
    const runLogin = async (values: any, actions: any) => {
        const data = {
            ...values,
            deviceInfo: {
                //@ts-ignore
                deviceId: global.deviceId,
                //@ts-ignore
                deviceType: global.deviceType,
            }
        }
        await dispatch(fetchAccess(data));
    };
    const initialValues: FormValues = {
        email: '',
        password: '',
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={runLogin}
        >
            {({ values, handleChange, handleSubmit }) => (
                <form className="w-96 flex flex-col m-auto mt-80 mb-80" onSubmit={handleSubmit}>
                    <Input 
                        title="Email"
                        htmlFor="login-email"
                        require
                        type="email"
                        id={loginTestId.email}
                        name="email"
                        style="mt-1 text-black block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <Input 
                        title="Password"
                        htmlFor="login-password"
                        type="password"
                        id={loginTestId.password}
                        name="password"
                        style="mt-1 text-black block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <Button
                        title="Login Now"
                        type="submit"
                        onClick={handleSubmit}
                        style="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </form>
            )}
        </Formik>
    );
}