import React, { useRef } from 'react';

export default function useLatest(val) {
  const ref = useRef(val);
  ref.current = val;

  return ref;
}

// useLatest可以避免什么问题，清看：https://codesandbox.io/s/od60ky?file=/App.tsx:0-469
