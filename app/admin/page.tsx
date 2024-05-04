"use client"

import React, { useState } from 'react';
import { selectAppConfig } from '@/lib';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Formik, Field } from 'formik';
import { Input, Button } from '@/components';
import { searchTestId } from '@/utils/testId';
import map from 'lodash/map';
import { themeStyles } from '../globalStyle';

type FormValues = {
    building: string,
    floorArea: number | null,
    district: string,
    ward: string,
    street: string,
    basement: number | null,
    direction: string,
    rank: number | null,
    areaFrom: number | null,
    areaTo: number | null,
    priceFrom: number | null,
    priceTo: number | null,
    manager: string,
    phone: number | null,
    staff: string,
}

const Dropdown = ({ setFieldValue, data = [], title, htmlFor, value }) => {
    const [label, setLabel] = useState("--Select an option--")
    return (
       <div className="flex flex-col mx-5 mb-7 align-middle self-center justify-center h-full w-[300px]">
            <label
                htmlFor={htmlFor}
                className={`${themeStyles.primaryText} block text-sm font-medium`}
            >
                {title}
            </label>
            <div className="relative h-full w-full mt-1 mb-9 hover:bg-gray-100 hover:cursor-pointer">
                <Field
                    className="absolute transition-opacity left-0 top-0 z-10 w-full px-4 py-3 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    name={value}
                    as="select"
                    onChange={(val) => {
                        setLabel(val.target.value);
                        setFieldValue(value, val.target.value);
                    }}
                >
                    <option value="">--Select an option--</option>
                    {data.length > 0 && map(data, (item, index) => (
                        <option className="py-2" value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </Field>
            </div>
        </div>
    )
}

export default function BuildingManagement() {
    const dispatch = useAppDispatch();
    const appConfig = useAppSelector(selectAppConfig);
    const { search } = appConfig.admin || {};
    const initialValues: FormValues = {
        building: '',
        floorArea: null,
        district: '',
        ward: '',
        street: '',
        basement: null,
        direction: '',
        rank: null,
        areaFrom: null,
        areaTo: null,
        priceFrom: null,
        priceTo: null,
        manager: '',
        phone: null,
        staff: '',
    }

    const handleSearch = (values: any, actions: any) => {
        console.log('values', values)
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSearch}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <form className="w-[85%] flex flex-col m-auto mt-80 mb-80" onSubmit={handleSubmit}>
                        <div className="flex flex-row flex-wrap">
                            {
                                map(search, (item, index) => {
                                    if (item.name === "district" || item.name === "staff") {
                                        return (
                                            <Dropdown
                                                key={item.name + index}
                                                value={item.name}
                                                data={item.options}
                                                setFieldValue={setFieldValue}
                                                htmlFor={item.htmlFor}
                                                title={item.title}
                                            />
                                        )
                                    } 
                                    return (
                                        <Input
                                            key={item.name + index}
                                            title={item.title}
                                            htmlFor={item.htmlFor}
                                            type={item.type}
                                            id={searchTestId[item.name]}
                                            name={item.name}
                                            style="mt-1 text-black shadow-lg block w-[300px] px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            containerStyle="ml-5 mr-5"
                                            placeholder={item.placeholder}
                                            value={values[item.name]}
                                            onChange={handleChange}
                                        />
                                    )
                                })
                            }
                        </div>
                        <Button
                            title="Search"
                            type="submit"
                            onClick={handleSubmit}
                            style="w-[50%] flex self-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </form>
                )}
            </Formik>
            <div>
                
            </div>
        </div>
    );
}