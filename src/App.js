import React, { useEffect, useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import {Buffer} from 'buffer';
import './App.css';

function App() {
  const [text, setText] = useState('<p>atai</p>');


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
    <div>
      <Editor
        id={"ViewerTinyMCE"}
        value={text}
        inline={false}
        disabled={true}
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
        init={{
          readonly: true,
          plugins: 'autoresize',
          toolbar: false,
          resize: false,
          menubar: false,
          image_advtab: true,
          importcss_append: true,
        }}
      />
    </div>
  );
}

export default App;
