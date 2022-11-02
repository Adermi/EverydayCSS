import React, { useEffect, useRef } from 'react';

function useInterval(fn, delay, immediate, deps) {
  const fnRef = useRef(fn);
  const timeRef = useRef(null);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const diffRef = useRef(0);
  let stopRef = useRef(false);

  useEffect(() => {
    if (stopRef.current) return;

    if (startTimeRef.current == null) {
      startTimeRef.current = new Date().getTime();
    }

    timeRef.current = setTimeout(() => {
      countRef.current++;
      diffRef.current =
        new Date().getTime() - startTimeRef.current - countRef.current * delay;
      fnRef.current();
    }, delay - diffRef.current);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef);
      }
    };
  }, [deps]);

  const clear = () => {
    stopRef.current = true;
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  };

  return clear;
}

export default useInterval;
export { useInterval };
