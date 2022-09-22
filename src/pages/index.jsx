import React from 'react';
import Link from 'next/link';

let style = {
  display: 'flex',
  position: 'fixed',
  top: '20px',
  left: '30%',
  fontSize: '26px',
  flexDirection: 'column',
  gap: '10px',
};

let days = [
  'Day36',
  'Day37',
  'Day38',
  'Day39',
  'Day40',
  'Day41',
  'Day42',
  'Day43',
  'Day44',
  'Day45',
  'Day46',
  'Day47',
  'Day48',
  'Day49',
  'Day49-2',
  'Day50',
  'Day51',
  'Day52',
  'Day101',
  'Demo',
];

const Index = () => {
  return (
    <div style={style}>
      {days.map((day, i) => (
        <Link href={`/${day.toLocaleLowerCase()}`} key={i}>
          {day}
        </Link>
      ))}
    </div>
  );
};

export default Index;
