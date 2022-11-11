import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const elRef = useRef(null);
  const scaleRef = useRef(null);
  const rotateRef = useRef(null);
  const firstRef = useRef(true);
  const clientXYStart = useRef({
    clientXStart: 0,
    clientYStart: 0,
  });
  const rotateMax = useRef({
    rotateMaxX: 25,
    rotateMaxY: 25,
  });

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
    } else {
      return;
    }

    const el = elRef.current;
    console.log(el);
  }, []);

  // 鼠标进入
  function handlePointEnter(e) {
    clientXYStart.current.clientXStart = e.clientX;
    clientXYStart.current.clientXStart = e.clientY;

    window.requestAnimationFrame(() => {
      // 方法元素
      scaleRef.current.style.transitionDuration = '300ms';
      scaleRef.current.style.transitionTimingFunction = 'ease-out';
      scaleRef.current.style.transform = 'translate3d(0, 0, 50px)';
      // 旋转元素
      rotateRef.current.style.transitionDuration = '300ms';
      rotateRef.current.style.transitionTimingFunction = 'ease-out';
    });
  }

  // 鼠标移动
  function handlePointerMove(e) {
    // console.log('移动');
    const { clientX, clientY } = e;
    let elBoundingClientRect = e.target.getBoundingClientRect();
    const { top, left, width, height } = elBoundingClientRect;
    const { rotateMaxX, rotateMaxY } = rotateMax.current;

    const centerX = width / 2;
    const centerY = height / 2;
    const coordX = clientX - left;
    const coordY = clientY - top;

    let rotateX = (rotateMaxX * (coordY - centerY)) / (height / 2);
    let rotateY = (-1 * rotateMaxY * (coordX - centerX)) / (width / 2);

    rotateX = Math.min(Math.max(-rotateX, -rotateMaxX), rotateMaxX);
    rotateY = Math.min(Math.max(-rotateY, -rotateMaxY), rotateMaxY);

    window.requestAnimationFrame(() => {
      rotateRef.current.style.transform = `translate3d(0, 0, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  // 鼠标离开
  function handlePointerLeave(e) {
    window.requestAnimationFrame(() => {
      // 方法元素
      scaleRef.current.style.transitionDuration = '300ms';
      scaleRef.current.style.transitionTimingFunction = '';
      scaleRef.current.style.transform = 'translate3d(0, 0, 0)';
      // 旋转元素
      rotateRef.current.style.transitionDuration = '300ms';
      rotateRef.current.style.transitionTimingFunction = '';
      rotateRef.current.style.transform = `translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`;
    });
  }

  const events = {
    onMouseEnter: handlePointEnter,
    onMouseMove: handlePointerMove,
    onMouseLeave: handlePointerLeave,
  };

  return (
    <Layout className={style.frame}>
      <div
        className={cn(style.atropos, style.cusStyle)}
        ref={elRef}
        {...events}
      >
        <div className={style[`atropos-scale`]} ref={scaleRef}>
          <div className={style[`atropos-rotate`]} ref={rotateRef}>
            <div className={style[`atropos-inner`]}>
              <div className={style.box}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
