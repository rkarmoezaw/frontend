'use client';

import UseAuthenticated from './UseAuthenticated';

function Page1() {
  const isAuth = UseAuthenticated();
  console.log(isAuth);
  return <div>{isAuth ? 'Page 1' : <AccessDenied />}</div>;
}

function Page2() {
  const isAuth = UseAuthenticated();
  return <div>{!isAuth ? 'Page 2' : <AccessDenied />}</div>;
}

function AccessDenied() {
  return (
    <div>
      <h1>AccessDenied</h1>
    </div>
  );
}

export default function Whyhoc() {
  return (
    <div>
      Why HOC
      <Page1 />
      <Page2 />
    </div>
  );
}
