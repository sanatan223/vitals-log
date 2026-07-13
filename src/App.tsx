import React, { useEffect, useState } from 'react';

interface ApiResponse {
  status: string;
  message: string;
}

export default function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch server health');
        return res.json();
      })
      .then((data: ApiResponse) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading layout skeletons...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>VitalsLog Frontend</h1>
      <p>Backend Status: <strong>{data?.status}</strong></p>
      <p>Server Message: <em>{data?.message}</em></p>
    </div>
  );
}