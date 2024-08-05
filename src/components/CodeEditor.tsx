'use client';
import React, { useEffect } from 'react';
import AceEditor from 'react-ace';

// languages
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-typescript';

// themes
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-twilight';

import { getExtension, initialCode } from '@/lib/getExtension';

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
  title: string; // Use title for displaying the filename
  onTitleChange: (title: string) => void; // Callback to update title in the parent component
}

function CodeEditor({
  language,
  theme,
  background,
  currentPadding,
  icon,
  title,
  onTitleChange,
}: CodeEditorProps) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState<number | null>(500);
  const [code, setCode] = React.useState(initialCode);
  const [extension, setExtension] = React.useState('.js');

  useEffect(() => {
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div
      className="code-block"
      style={{
        background: background,
        width: width,
        height: height || 500,
        padding: currentPadding,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          background: background,
          color: '#fff',
          borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '4px 4px 0 0',
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          style={{
            background: 'transparent',
            color: '#fff',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
            padding: '0',
            margin: '0',
          }}
        />
        <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{extension}</span>
      </div>

      <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
        <img src={icon} className="absolute right-0 w-[33px] mr-2" alt="" />
      </div>

      <AceEditor
        value={code}
        name="UNIQUE_ID_OF_DIV"
        fontSize={16}
        theme={theme}
        mode={language.toLowerCase()}
        showGutter={false}
        wrapEnabled={true}
        height={`calc(${height}px - ${
          currentPadding ? currentPadding : 0
        } - 52px)`}
        showPrintMargin={false}
        highlightActiveLine={false}
        editorProps={{ $blockScrolling: true }}
        className="ace-editor-container"
        onChange={handleCodeChange}
      />
    </div>
  );
}

export default CodeEditor;
