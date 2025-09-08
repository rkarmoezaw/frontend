'use client';

function Parent() {
  return (
    <div>
      Parent
      <Child />
    </div>
  );
}

function Child() {
  return (
    <div onClick={() => console.log('You Clicked div')}>
      <button
        onClick={e => {
          e.stopPropagation();
          console.log('You Clicked button');
        }}
      >
        Click
      </button>
    </div>
  );
}

export default function PropagationDemo() {
  return (
    <div>
      <Parent />
    </div>
  );
}
