import React from 'react';
import Link from 'next/link';
import style from './index.module.less';

const Layout = (props) => {
  return (
    <div style={{ height: '100vh' }} {...props}>
      <div className={style.returnBtn}>
        <Link href={'/'} className={style.return}>
          {'返回'}
        </Link>
        <svg viewBox="0 0 120 60" className={style.border}>
          <polyline
            points="120,0 120,60 0,60 0,0 120,0"
            className={style.bgLine}
          ></polyline>
          <polyline
            points="120,0 120,60 0,60 0,0 120,0"
            className={style.hlLine}
          ></polyline>
        </svg>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
