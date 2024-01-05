import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    
    setEditorHtml(html);
  };

  return (
    <div className='h-1/4'>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyEditor;
