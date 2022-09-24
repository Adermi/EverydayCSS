import React from 'react';
import style from './index.module.less';

const Index = () => {
  return (
    <div className={style.box}>
      <div className={style.center}>
        <div className={style.red}>
          <div className={style.rect}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;