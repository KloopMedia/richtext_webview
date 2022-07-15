import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

function App() {
  const [text, setText] = useState('');


  useEffect(() => {
    window.addEventListener('flutter_rich_text_event', (e) => {
      console.log('RICH TEXT', e.detail);
      const decoded = Buffer.from(e.detail, 'base64').toString();
      setText(decoded);
    });

    return () => {
      window.removeEventListener('flutter_rich_text_event', () => { });
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default App;
