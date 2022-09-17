import React from 'react';
import Link from 'next/link';
import style from './index.module.less';

const Layout = (props) => {
  return (
    <div style={{ height: '100vh' }} {...props}>
      <div className={style.returnBtn}>
        <Link href={'/'}>{'< 返回'}</Link>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
