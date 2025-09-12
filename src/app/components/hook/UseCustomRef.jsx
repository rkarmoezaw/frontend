'use client';

export default function UseCustomRef(value) {
  let ref = {
    current: value,
  };
  return ref;
}
