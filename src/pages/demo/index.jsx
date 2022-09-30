import React from 'react';
import style from './index.module.less';

const Index = () => {
  return (
    <div className={style.frame}>
      <div className={style.center}>
        <div className={style[`text-front`]}>Hover</div>
      </div>
      <div className={style[`text-back`]}>Hover</div>
    </div>
  );
};

export default Index;
