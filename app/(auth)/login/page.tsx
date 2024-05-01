'use client'
import { LoginForm } from '@/components';
import { fetchMe, useAppDispatch } from '@/lib';
import { getDeviceId, detectOS } from '@/utils/deviceInfo';
import { useEffect, useState } from 'react';

export default function Login() {
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (mounted) {
      const deviceId = getDeviceId();
      const deviceType = detectOS();
      //@ts-ignore
      global.deviceId = deviceId;
      //@ts-ignore
      global.deviceType = deviceType;
    }
    setMounted(true);
  }, [mounted]);
  const fetchUser = async () => {
    await dispatch(fetchMe());
  }

  return (
    <>
      <button className="bg-slate-50" onClick={fetchUser}>Users</button>
      <LoginForm/>
    </>
  )
}