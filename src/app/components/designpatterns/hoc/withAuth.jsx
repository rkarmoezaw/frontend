import UseAuthenticated from './UseAuthenticated';

function AccessDenied() {
  return (
    <div>
      <h1>AccessDenied</h1>
    </div>
  );
}
export default function withAuth(Component) {
  return function () {
    const isAuth = UseAuthenticated();
    return <div>{isAuth ? <Component /> : <AccessDenied />}</div>;
  };
}
