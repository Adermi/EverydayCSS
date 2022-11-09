import React from 'react';
import cn from 'classnames';
import _, { transform } from 'lodash';

import style from './index.module.less';
import Layout from '../../components/Layout';

const groups = [
  {
    gTranslate: 'translate(77.15 118.01)',
    pathTranslate: 'translate(-69.77 -87.81)',
    path: 'M57.016 79.757H64.4q2.013 0 4.027.67 2.013.672 3.355 1.343 1.343.671 2.35.671 1.006 0 1.677.336.671.335 1.007.671.336.336 1.007.671.67.336.67.671v.671q0 .336.672.672.671.335 1.007.67.335.336.335 1.007v2.349q0 .336.336.672.335.335.335.67 0 .336.336.672l.671.671q.336.336.336.671v2.35',
  },
  {
    gTranslate: 'translate(29.16 150.56)',
    pathTranslate: 'translate(-21.78 -120.36)',
    path: 'M25.474 104.588V117.005q0 .336-.336.671-.335.336-.335 1.007 0 .671-.336 1.007-.336.335-.336 1.006t-.335 1.007q-.336.336-.336 1.007v2.013q0 .671-.335 1.007-.336.335-.671.335-.336 0-.336.336t-.336.671q-.335.336-.335 1.007 0 .671-.336 1.007-.335.335-.67.335-.336 0-.336.671t-.336.671q-.336 0-.336.672 0 .67-.335 1.006-.336.336-.336.671v1.342q0 .336-.335 1.007l-.337.673',
  },
  {
    gTranslate: 'translate(88.56 157.27)',
    pathTranslate: 'translate(-81.18 -127.07)',
    path: 'M32.855 120.025H46.28q2.013 0 4.362-.335 2.35-.336 4.363-.672 2.013-.335 4.362-.335H85.205q.671 0 1.342-.336.672-.335 1.678-.335 1.007 0 1.678-.336.671-.335 1.342-.335h3.356q.671 0 1.342-.336.672-.336 1.343-.336h1.342q.671 0 1.007-.335.335-.336.67-.336h1.008q.67 0 1.342-.335.671-.336 1.342-.336t1.342-.335q.672-.336 1.343-.336h1.342q.671 0 1.342-.336.671-.335 1.343-.335h3.691q1.007 0 2.013-.336 1.007-.335 1.678-.335h4.027q.671 0 1.678-.336 1.007-.335 1.678-.335.67 0 1.006-.336.336-.336.672-.336h2.012q.337 0 .337.672v1.677q0 .336-.336 1.007-.336.671-.336 1.007 0 .335-.335.671-.336.336-.671.336-.336 0-.336.335 0 .336-.335.671-.336.336-.336.671v1.342q0 .336-.336.672-.335.335-.335.671v1.342q0 .336-.336.671-.335.336-.335.672v1.342q0 .335-.336.335-.335 0-.335.672v1.006q0 .336-.336.336t-.336.671q0 .671-.335 1.342-.336.671-.336 1.007v1.342q0 .336-.335.671-.336.336-.336.672v2.013q0 .336-.335.671-.336.336-.336.671v1.343q0 .335-.336.335-.335 0-.335.336v.67q0 .336-.336.672-.335.336-.67 1.007l-.337.672',
  },
  {
    gTranslate: 'translate(76.82 185.8)',
    pathTranslate: 'translate(-69.43 -155.6)',
    path: 'M29.5 156.267H80.172q1.006 0 1.678-.336.67-.335 1.006-.67.336-.336.671-.336H106.682q.67 0 .67.335 0 .336.336.336H109.367',
  },
  {
    gTranslate: 'translate(79.5 217.68)',
    pathTranslate: 'translate(-72.12 -187.47)',
    path: 'M70.44 130.762V132.106q0 .67.336 1.006.335.336.335.672v25.838q0 1.343.336 3.02.335 1.678.335 3.692v5.369q0 1.342.336 2.013.336.672.336 1.678 0 1.007.335 1.343.336.335.671 1.342.336 1.007.336 1.342v25.839q0 .671-.336 1.342-.335.672-.335 1.343V212.978q0 .336-.336 1.007-.335.671-.335 1.342v3.02q0 .336-.336 1.007-.336.671-.336 1.678v7.718q0 .671-.335 1.007-.336.335-.671 1.342-.336 1.007-.336 1.342V244.187',
  },
  {
    gTranslate: 'translate(47.96 224.72)',
    pathTranslate: 'translate(-40.57 -194.52)',
    path: 'M57.018 172.373v.337q0 .335-.672 1.006-.671.672-1.007 1.343-.335.67-1.006 1.006-.671.336-1.343 1.007l-1.006 1.007-1.007 1.007-1.342 1.342q-.671.671-1.343 1.678-.67 1.006-1.342 1.678-.671.67-.671 1.006 0 .336-.671.671-.671.336-1.007.672l-.671.67q-.336.336-.671 1.007-.336.672-1.007 1.343-.671.67-1.007 1.678-.335 1.006-1.342 2.013-1.007 1.007-1.007 1.678t-.67 1.007q-.672.335-1.007 1.006l-.672 1.343q-.335.67-.67 1.006-.336.336-.672 1.007-.335.671-.335 1.342t-.336 1.007l-.671.671-.671.671-.671.671q-.336.336-.336.672 0 .335-.335.67l-.672.672q-.335.335-.335.67 0 .337-.336.672-.335.336-.335 1.007 0 .67-.671 1.006-.672.336-.672 1.007 0 .671-.335.671-.336 0-.671.671-.336.672-.336 1.007 0 .336-.335.336-.336 0-.336.67 0 .672-.336.672-.335 0-.67.336-.336.335-.336.67 0 .336-.671.672l-.673.336',
  },
  {
    gTranslate: 'translate(105.68 226.4)',
    pathTranslate: 'translate(-98.29 -196.2)',
    path: 'M86.547 174.387V176.065q0 1.007.336 1.343.336.335.671 1.342.336 1.007.671 1.678.336.671 1.007 1.678.671 1.006 1.007 2.013.335 1.007 1.006 1.678.672.671 1.007 1.342.336.671.336 1.343 0 .67.335 1.677.336 1.007.671 1.678.336.671 1.007 1.343l1.007 1.006.671.671q.336.336.336.672 0 .335.67.67.672.336.672 1.007 0 .672.335 1.007.336.336.672 1.342.335 1.007.335 1.343 0 .335.671 1.006l1.007 1.007q.336.336.336.671 0 .336.335.336.336 0 .336.67v1.008q0 .335.335.335.336 0 .336.336 0 .335.335.67.336.337.336.672v.671q0 .336.336.671.335.336.67 1.007.336.671.672 1.007l.671.67q.336.336.336.672v.671q0 .336.335.671.336.336.336.671 0 .336.335.336.336 0 .336.336 0 .335.335.67.336.336.672.336.335 0 .335.336v.671q0 .336.671.671l.672.337',
  },
  {
    gTranslate: 'translate(198.63 174.39)',
    pathTranslate: 'translate(-197.25 -144.19)',
    path: 'M146.278 144.857h84.229q.336 0 .671-.335.336-.336.672-.336h2.012q.336 0 .336-.335 0-.336.336-.336H236.213',
  },
  {
    gTranslate: 'translate(176.48 189.49)',
    pathTranslate: 'translate(-169.1 -159.29)',
    path: 'M191.245 82.44V83.784q0 .67.336 2.013.336 1.342.336 4.027V110.294q0 1.006-.336 1.677-.336.672-.671 1.678-.336 1.007-.336 2.35 0 1.342-.67 3.355l-1.343 4.027q-.671 2.013-1.342 5.033-.672 3.02-1.007 4.698-.336 1.678-1.007 3.02-.67 1.343-1.007 2.685-.335 1.342-.335 2.685 0 1.342-.671 2.684-.671 1.343-1.007 2.685l-.671 2.684-.671 2.685q-.336 1.342-1.342 3.356-1.007 2.013-1.343 3.02-.335 1.006-.67 2.349-.336 1.342-.672 2.013-.336.671-.671 2.35-.336 1.677-.336 2.348 0 .671-.67 1.678-.672 1.007-1.008 2.013-.335 1.007-.335 1.678t-.336 1.678q-.335 1.007-.67 1.342-.336.336-.672 1.007-.336.671-.336 1.007 0 .335-.335.671-.336.336-.671 1.007-.336.67-.671 1.006l-.672.672q-.335.335-.67 1.342-.336 1.007-.336 1.342 0 .336-.671 1.342-.672 1.007-1.678 2.35-1.007 1.342-1.007 1.677 0 .336-.671 1.007l-1.007 1.007q-.335.335-.335 1.006 0 .672-.336 1.343l-.671 1.342-.671 1.342q-.336.671-.671 1.678-.336 1.007-.336 1.678t-.336 1.007q-.335.335-.67 1.006-.336.672-.336 1.007v1.342q0 .336-.336 1.007-.335.671-.671 1.007-.336.335-.336 1.007 0 .67-.335 1.006-.336.336-.336.671v1.007q0 .671-.335 1.342l-.671 1.343q-.336.67-.672 1.006-.335.336-.335.671 0 .336-.336 1.007-.335.671-.335 1.007 0 .335-.336 1.342-.335 1.007-.335 1.342v1.007q0 .671-.672 1.007-.67.335-1.006 1.007-.336.67-.336 1.677 0 1.007-.335 1.343l-.672.67q-.335.336-.67 1.008-.336.67-.336 1.006 0 .336-.336 1.007l-.671 1.342q-.336.671-.336 1.007 0 .336-.335 1.007-.336.67-.336 1.342 0 .671-.335 1.007-.336.335-.671 1.006l-.337.673',
  },
  {
    gTranslate: 'translate(212.72 224.05)',
    pathTranslate: 'translate(-205.34 -193.85)',
    path: 'M187.219 154.252V157.945q0 .335.335 1.006l.671 1.343q.336.67.336 1.006v.671q0 .336.335.672.336.335.336.67v11.41q0 .336.336 1.007.335.671.67 1.007.336.335.336.67V180.093q0 .336.336.671.335.336.335 1.007 0 .671.336 1.007.336.335.671 1.007.336.67.336 1.342v1.007q0 .335.335 1.342.336 1.007.671 1.678l.672 1.342q.335.671.335 1.342t.336 1.343q.335.67.67 1.006.336.336.672 1.007.336.671.671 1.007.336.335.671 1.006.336.672.671 1.007.336.336.336.671 0 .336.336 1.007.335.671 1.006 1.342t.671 1.343q0 .67.336 1.006l.671.671q.336.336.336 1.007 0 .671.67 1.342l1.008 1.007q.335.336.335.671 0 .336.336.671.335.336.335.671 0 .336.336.672.335.335.671 1.006t.336 1.007v.671q0 .336.335.671.336.336.671 1.007.336.671 1.007 1.342.671.671 1.007 1.343.335.67.67 1.006l1.008 1.007q.67.671.67 1.007 0 .335.336 1.006.336.672 1.007 1.678.671 1.007 1.007 1.343.335.335 1.006.67.672.336.672 1.007 0 .672.67 1.007.672.336 1.007.671.336.336.672 1.007.335.671 1.006 1.007.671.335 1.007.67.336.336.671.336.336 0 .671.336.336.336.336.671 0 .336.335.336h.672q.335 0 .67.67l.337.673',
  },
  {
    gTranslate: 'translate(281.18 132.11)',
    pathTranslate: 'translate(-273.8 -101.9)',
    path: 'M287.89 93.179l-.671.672q-.672.67-1.343 1.678-.67 1.006-1.678 1.677-1.006.672-1.342 1.343-.335.67-1.342 1.006-1.007.336-1.342.672-.336.335-.671.335-.336 0-.672.336l-.67.67-.672.672q-.335.336-1.007.671-.67.336-1.006.671l-.671.671q-.336.336-.672.336-.335 0-.67.336-.336.335-.672.335-.335 0-.335.336 0 .335-.336.335h-.671q-.336 0-.671.671-.336.672-.671.672-.336 0-.672.335-.335.336-.67.336-.336 0-1.007.335-.672.336-1.007.671-.336.336-.671.336-.336 0-.671.335-.336.336-.672.336h-.67q-.336 0-.672.336-.335.335-.671.335h-3.021',
  },
  {
    gTranslate: 'translate(286.21 161.3)',
    pathTranslate: 'translate(-278.83 -131.1)',
    path: 'M251.647 131.434h.337q.335 0 1.342.336 1.007.336 2.013.336h21.477q1.007 0 2.013-.336 1.007-.335 2.014-.335h2.013q1.007 0 1.678-.336t1.007-.336h8.053q.336 0 .672-.335.335-.336.67-.336h11.076',
  },
  {
    gTranslate: 'translate(283.53 202.91)',
    pathTranslate: 'translate(-276.14 -172.71)',
    path: 'M279.165 118.682v18.122q0 .67-.336 1.342-.335.671-.335 1.678v5.705q0 .67-.336 1.006-.335.336-.335 1.007 0 .671-.336 1.342-.335.671-.335 1.678t-.336 1.678q-.336.671-.336 1.342t-.335 1.678l-.671 2.014q-.336 1.006-.336 2.013v3.691q0 .671-.335 1.678-.336 1.007-.336 1.678t-.671 1.678-.671 1.678V199.22q0 .671.335 1.007.336.335.336 1.006v1.007q0 .336.335 1.007.336.67.336 1.006v3.356q0 .336.336.671.335.336.335 1.007v17.451',
  },
  {
    gTranslate: 'translate(262.05 208.28)',
    pathTranslate: 'translate(-254.67 -178.08)',
    path: 'M265.742 144.856l-.335.673q-.336.67-.336 1.006v1.678q0 .671-.336 1.678-.335 1.007-.67 1.678-.336.67-.672 1.678-.335 1.006-.335 1.678 0 .67-.336 1.677-.336 1.007-.671 1.343-.336.335-.336 1.006t-.335 1.343q-.336.67-.336 1.342v3.356q0 .67-.335 1.342-.336.671-.336 1.342t-.671 1.342q-.671.672-.671 1.343v2.684q0 .671-.336 1.007-.335.336-.335.671 0 .336-.336 1.007-.336.671-.336 1.007 0 .335-.335 1.342-.336 1.007-.336 1.342v1.678q0 .671-.335 1.007-.336.335-.671 1.006-.336.672-.336 1.007v1.007q0 .671-.336 1.007-.335.335-.335 1.006t-.336 1.343q-.335.67-.335 1.342 0 .671-.336 1.342-.335.671-.335 1.342 0 .672-.336 1.007-.336.336-.336 1.007 0 .671-.335 1.007l-.671.67q-.336.336-.336.672 0 .335-.335 1.007-.336.67-.336 1.006 0 .336-.671.671-.671.336-.671.672v.67q0 .336-.336.672-.335.335-.335.67v.672q0 .336-.672.671-.67.336-.67.671 0 .336-.336.672-.336.335-.336.67 0 .336-.335.672-.336.335-.336.67 0 .337-.336.672-.335.336-.67 1.007-.336.67-.672 1.006-.335.336-.671 1.007l-.337.672',
  },
  {
    gTranslate: 'translate(301.31 207.61)',
    pathTranslate: 'translate(-293.93 -177.41)',
    path: 'M289.903 144.185V148.213q0 .671.336 1.007.335.335.335 1.007V166.669q0 .336.336 1.343.335 1.006.335 1.678v9.396q0 .67.336 1.677.336 1.007.336 1.678v1.678q0 .336.335.671.336.336.336.671 0 .336.335 1.007.336.671.336 1.342v2.014q0 .671.335 1.007.336.335.336 1.006v2.014q0 .67.336 1.342.335.671.67 1.007.336.335.336.67V200.228q0 .335.336.67.335.336.335.672v2.013q0 1.007.336 1.343l.671.67q.336.336.336 1.007v1.678q0 .336.335.671.336.336.336 1.007v.672',
  },
  {
    gTranslate: 'translate(322.45 200.56)',
    pathTranslate: 'translate(-315.07 -170.36)',
    path: 'M317.42 146.199v3.021q0 1.007-.671 1.342-.671.336-.671 1.007v1.342q0 .671-.336 1.678-.335 1.007-.671 1.342-.336.336-.336 1.007v1.342q0 .671-.335 1.342-.336.672-.336 1.007 0 .336-.335 1.007-.336.671-.336 1.007 0 .335-.335 1.006-.336.671-.336 1.343V194.523',
  },
  {
    gTranslate: 'translate(336.21 198.55)',
    pathTranslate: 'translate(-328.83 -168.35)',
    path: 'M336.212 97.877V153.247q0 .335-.336.67-.335.336-.335 1.008v7.046q0 .336-.336 1.007-.335.671-.335 1.342V178.414q0 .672-.672 1.343-.67.67-.67 1.006V195.53q0 .335.335 1.006t.335 1.007V204.925q0 1.006.336 1.677.336.672.336 1.343v1.006q0 .336.335 1.007.336.671.671 1.007.336.335.336 1.006v13.759q0 .335-.336.335-.335 0-.335.672v4.026q0 .672-.336.672-.335 0-.335.335v6.376q0 .671-.336.671h-.671q-.336 0-.336-.335v-.672q0-.335-.335-.67l-.671-.672-.671-.671q-.336-.336-.336-.671 0-.336-.336-.336-.335 0-.335-.335 0-.336-.336-.671-.335-.336-.67-1.007-.336-.671-.336-1.007 0-.335-.336-.335t-.671-.336l-.671-.671q-.336-.336-.336-.671 0-.336-.335-.336-.336 0-.336-.335 0-.336-.336-.336-.335 0-.335-.336 0-.335-.336-1.006-.335-.671-.67-.671-.336 0-.336-.336t-.336-.336q-.336 0-.336-.335 0-.336-.335-.671-.336-.336-.336-.671 0-.336-.335-.336-.336 0-.336-.336 0-.335-.335-.335-.336 0-.336-.336 0-.335-.336-1.006l-.336-.673',
  },
];

const Index = () => {
  return (
    <Layout className={style.frame}>
      <div className={style.center}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="375"
          viewBox="0 0 375 375"
        >
          <g className={style.groups}>
            {groups.map((item, i) => {
              return (
                <g
                  key={item.gTranslate}
                  transform={item.gTranslate}
                  className={cn(style.group, style[`group-${i}`])}
                >
                  <defs>
                    <filter id="glow" x="0" y="0" width="200%" height="200%">
                      <feOffset
                        result="offOut"
                        in="SourceAlpha"
                        dx="20"
                        dy="20"
                      />
                      <feGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="10"
                      />
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                  </defs>
                  <path d={item.path} transform={item.pathTranslate}></path>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </Layout>
  );
};

export default Index;
