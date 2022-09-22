import React, { useRef, useEffect } from 'react';
import cn from 'classnames';

import style from './index.module.less';
import Layout from '../../components/Layout';
import { useMouse, useSetState } from 'ahooks';

const Index = () => {
  const ref = useRef(null);
  const mouse = useMouse(ref.current);
  const [pos, setPos] = useSetState({
    x: mouse.elementX,
    y: mouse.elementY,
    z: 0,
  });
  useEffect(() => {
    const x = mouse.elementX;
    const y = mouse.elementY;
    // console.log(x, y);
    if (x >= 400 || x <= 0 || y >= 200 || y <= 0) {
      setPos({ x: 0, y: 0, z: 0 });
      return;
    }

    console.log(x, y);

    if (x < 200 && y < 100) {
      setPos({ x: 10, y: -10, z: 100 });
    } else if (x > 200 && y < 100) {
      setPos({ x: 10, y: 10, z: 100 });
    } else if (x < 200 && y > 100) {
      setPos({ x: -10, y: -10, z: 100 });
    } else if (x > 200 && y > 100) {
      setPos({ x: -10, y: 10, z: 100 });
    } else {
      setPos({ x: 0, y: 0, z: 0 });
    }
  }, [mouse]);

  return (
    <Layout className={style.frame}>
      <div
        className={style.center}
        onMouseLeave={(e) => {
          setPos({ x: 0, y: 0, z: 0 });
        }}
      >
        <div
          className={style.card}
          ref={ref}
          style={{
            transform: `translateZ(${pos.z}px) rotateX(${pos.x}deg) rotateY(${pos.y}deg)`,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default Index;
