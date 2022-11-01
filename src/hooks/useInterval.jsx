import React, { useEffect, useRef } from 'react';

function useInterval(f, delay, deps) {
  const fn = useRef(f);
  const timeRef = useRef(null);
  const timeSliceRef = useRef(null);

  useEffect(() => {
    if (stop.current) return;

    let diff = 0;

    if (timeSliceRef.current == null) {
      timeSliceRef.current = new Date().getTime();
    } else {
      const timeSlice = new Date().getTime();
      const d = timeSlice - timeSliceRef.current - delay;
      diff = d > 0 ? d : 0;
    }

    timeRef.current = setTimeout(() => {
      fn.current();
    }, delay - diff);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef);
      }
    };
  }, [deps]);

  const clear = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  };

  return clear;
}

export default useInterval;
export { useInterval };
