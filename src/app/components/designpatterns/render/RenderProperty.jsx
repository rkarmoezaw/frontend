'use client';

function ListItems({ items, render }) {
  return <div>{items.map((item, i) => render(item, i))}</div>;
}

export default function RenderProperty() {
  let items = ['apple', 'banana', 'orange'];
  return (
    <div>
      Render Property
      <ListItems items={items} render={(item, i) => <div key={i}>{item}</div>} />
      <ListItems items={items} render={(item, i) => <h2 key={i}>{item}</h2>} />
      <ListItems items={items} render={(item, i) => <h1 key={i}>{item}</h1>} />
    </div>
  );
}
