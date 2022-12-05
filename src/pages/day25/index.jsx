import React, { useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const Index = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <div className={style.map}>
          <svg width={300} height={300} viewBox="0 0 400 400">
            <path d="M161.061341,399.999994 C161.061341,399.999994 191.270445,391.453331 205.135883,365.931812 C219.001321,340.410293 200.432398,333.765052 214.613679,309.426833 C228.79496,285.088614 250.056003,267.776851 262.826394,266.922116 C275.596785,266.067381 268.157228,295.720245 275.715421,305.337232 C283.273615,314.954218 275.976179,326.217927 303.147406,318.226259 C330.318634,310.234591 337.441809,308.749917 354.803656,282.075606 C372.165503,255.401296 353.503439,227.118217 363.183533,215.005256 C372.863628,202.892294 400.000001,171.927011 400.000001,171.927011 L400.000001,399.999994 L161.061341,399.999994 Z M8.33144441e-07,274.813084 C8.33144441e-07,274.813084 39.2929748,253.427701 69.7020648,222.975932 C100.111155,192.524163 111.329013,178.897167 120.245786,154.398535 C129.162559,129.899902 108.904134,115.269131 115.056957,98.3643901 C121.20978,81.459649 135.217027,74.9407179 149.468681,74.1092913 C163.720334,73.2778646 154.420375,103.542195 180.702766,94.5346817 C206.985157,85.5271688 208.897554,56.1953712 227.012818,47.5333294 C245.128081,38.8712876 253.356729,68.8621277 278.808059,63.1798791 C304.259388,57.4976304 304.842006,36.4943955 317.091607,32.0191906 C329.341207,27.5439856 334.697225,18.5903589 367.296171,25.5675291 C399.895117,32.5446994 399.999998,49.0022571 399.999998,49.0022571 L400,-5.40012479e-13 L2.47316295e-05,-1.96109795e-12 L8.33144441e-07,274.813084 Z"></path>
          </svg>
        </div>

        <div
          className={cn(style.mark, {
            [style.hidden]: showCard,
          })}
          onClick={(e) => setShowCard(true)}
        >
          <svg width={48} height={72} viewBox="0 0 48 72">
            <path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
          </svg>
          <div className={style.shadow}></div>
        </div>

        <div
          className={cn(style.card, {
            [style.active]: showCard,
          })}
          onClick={(e) => setShowCard(false)}
        >
          <div className={style.img}></div>
          <div className={style.content}>
            <p>Phil's Surfshop</p>
            <p className={style.gray}>High Street 19</p>
            <p className={style.gray}>8579 Arkney</p>
          </div>
          <div className={style.btn}>
            <div className={style.save}>Save</div>
            <span className={style.line}></span>
            <div className={style.route}>Route</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
