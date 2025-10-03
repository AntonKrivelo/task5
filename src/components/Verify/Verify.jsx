import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function VerifyPage() {
  const [searchParams] = useSearchParams();
  const [msg, setMsg] = useState('examination...');
  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setMsg('not token');
      return;
    }
    fetch(`/api/verify?token=${token}`)
      .then((res) => res.text())
      .then(setMsg)
      .catch(() => setMsg('error verification'));
  }, [searchParams]);
  return <div>{msg}</div>;
}
