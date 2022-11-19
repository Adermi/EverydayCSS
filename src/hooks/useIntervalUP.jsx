import { isNumber } from 'lodash';
import React, { useRef, useEffect } from 'react';
import useLatest from './useLatest';

// 调用这个函数时，存入fn函数里的执行必须有状态更新语句。该函数是状态驱动的定时器函数
export default function useIntervalUP(fn = () => {}, delay = 1000) {
  const fnRef = useLatest(fn);

  let timerRef = useRef(null);
  const clearRef = useRef(false);
  const startTimeRef = useRef(null);
  const countRef = useRef(0);
  const diffRef = useRef(0);

  useEffect(() => {
    if (!isNumber(delay) || delay < 0 || clearRef.current) return;

    if (startTimeRef.current == null) {
      startTimeRef.current = +new Date();
    }

    timerRef = setTimeout(() => {
      fnRef.current();
      countRef.current++;
      diffRef.current =
        +new Date() - startTimeRef.current - countRef.current * delay;
      console.log(diffRef.current);
    }, delay - diffRef.current);

    return () => {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
      }
    };
  });

  function clear() {
    clearRef.current = true;
  }

  return clear;
}

// 分为两种情况：
// 1. 循环修改state造成组件重新渲染
// 2. 循环不修改state，单纯想要一个准确定时器
