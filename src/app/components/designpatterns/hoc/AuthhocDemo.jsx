'use client';

const { default: withAuth } = require('./withAuth');

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
    </div>
  );
}

const AuthPage1 = withAuth(Page1);
const AuthPage2 = withAuth(Page2);

export default function AuthhocDemo() {
  return (
    <div>
      Auth Demo
      <AuthPage1 />
      <AuthPage2 />
    </div>
  );
}
