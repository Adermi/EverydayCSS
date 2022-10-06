import React from 'react';
import Link from 'next/link';
import style from './index.module.less';
import Button from '../Button/index';

const Layout = (props) => {
  return (
    <div style={{ height: '100vh' }} {...props}>
      <Button className={style.btn}></Button>
      {props.children}
    </div>
  );
};

export default Layout;
