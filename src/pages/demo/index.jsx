import React from 'react';
import style from './index.module.less';

const Index = () => {
  const [state, setState] = React.useState(style.aBtn);

  return (
    // <div className={style.frame}>
    //   <div className={style.center}>
    //     <div className={style[`text-front`]}>Hover</div>
    //   </div>
    //   <div className={style[`text-back`]}>Hover</div>

    // </div>

    <button
      className={state}
      onClick={(e) => setState(state === style.aBtn ? style.bBtn : style.aBtn)}
    >
      点我
    </button>
  );
};

export default Index;
