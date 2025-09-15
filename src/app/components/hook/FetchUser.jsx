'use client';
import UseCustomFetch from './UseCustomFetch';

export default function FetchUser() {
  const [loading, users] = UseCustomFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {loading && <div>Loading...</div>}
      {users.map(data => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
}
