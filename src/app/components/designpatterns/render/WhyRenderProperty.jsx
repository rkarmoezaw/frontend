'use client';

function ListItems({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}

export default function WhyRenderProperty() {
  let items = ['apple', 'orange', 'banana'];
  return (
    <div>
      Why Render Property
      <ListItems items={items} />
    </div>
  );
}
