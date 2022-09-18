import React from 'react';
import cn from 'classnames';
import { useMouse, useSetState } from 'ahooks';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const mouse = useMouse();
  const [state, setState] = useSetState({
    x: '50%',
    y: '50%',
  });

  return (
    <Layout
      className={style.frame}
      onMouseMove={(e) => {
        setState({
          x: mouse.clientX,
          y: mouse.clientY,
        });
      }}
      onMouseLeave={(e) => {
        setState({
          x: '50%',
          y: '50%',
        });
      }}
    >
      <div
        className={style.center}
        style={{
          left: state.x,
          top: state.y,
        }}
      ></div>
    </Layout>
  );
};

export default Index;
