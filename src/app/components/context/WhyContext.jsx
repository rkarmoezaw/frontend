function GrandParent({ message }) {
  return (
    <div>
      GrandParent
      <Parent message={message} />
    </div>
  );
}

function Parent({ message }) {
  return (
    <div>
      Parent
      <Child message={message} />
    </div>
  );
}

function Child({ message }) {
  return <div>{message}</div>;
}

export default function WhyContext() {
  return (
    <div>
      <GrandParent message={'Hello'} />
    </div>
  );
}
