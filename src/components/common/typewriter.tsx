'use client';

import { useEffect, useState } from 'react';

export default function TypewriterEffect({
  message
}: {
  message: string;
}) {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const speed = 100;

  useEffect(() => {
    let i = 0;
    let currentText = '';
    setText('');
    setShowCursor(true);

    const interval = setInterval(() => {
      currentText += message.charAt(i);
      setText(currentText);

      i++;
      if (i === message.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className='flex items-center text-4xl lg:text-7xl text-white font-bold font-alatsi'>
      <h1>{text}</h1>
      {showCursor && <span className='animate-blink'>|</span>}
      <style jsx>{`
        .animate-blink {
          animation: blink 2s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
}
