import React from 'react';
import style from './index.module.less';
import Link from 'next/link';

export default function Button({ href = '/', children, size }) {
  return (
    <div className={style.returnBtn}>
      <Link href={href} className={style.return}>
        {children || '返回'}
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
  );
}
