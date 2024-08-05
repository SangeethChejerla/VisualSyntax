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
}

function CodeEditor({
  language,
  theme,
  background,
  currentPadding,
  icon,
}: CodeEditorProps) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState<number | null>(500);
  const [title, setTitle] = React.useState('App');
  const [code, setCode] = React.useState(initialCode);

  const [extension, setExtension] = React.useState('.js');

  useEffect(() => {
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split('.')[0];
    setTitle(newTitle);
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
      }}
    >
      <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
        <div className="w-full bg-dark-900">
          <input
            type="text"
            value={`${title}${extension}`}
            onChange={(e) => handleTitleChange(e)}
            className="w-full text-[hsla(180,61%,52%,1)] outline-none font-medium text-center bg-transparent"
            style={{
              lineHeight: '1.8rem',
            }}
          />
        </div>

        <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
          <img src={icon} className="absolute right-0 w-[33px] mr-2" alt="" />
        </div>
      </div>
      <AceEditor
        value={code}
        name="UNIQUE_ID_OF_DIV"
        fontSize={16}
        theme={theme}
        mode={language.toLocaleLowerCase()}
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
