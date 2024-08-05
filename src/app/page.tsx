'use client';
import CodeEditor from '@/components/CodeEditor';
import { Customize } from '@/components/customize';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Home() {
  const [editorSettings, setEditorSettings] = useState({
    theme: 'monokai',
    color: '#0070f3',
    padding: 16,
    language: 'JavaScript',
  });

  const [filename, setFilename] = useState('App');
  const codeEditorRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!codeEditorRef.current) return;

    const canvas = await html2canvas(codeEditorRef.current);
    const dataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `${filename || 'code'}.png`; // Use the filename state
    link.click();
  };

  return (
    <div className="App">
      <div className="flex justify-center">
        <Customize onChange={(settings) => setEditorSettings(settings)} />
        <Button onClick={handleExport} className="flex gap-2 items-center">
          <Download size={16} /> Export as Image
        </Button>
      </div>
      <div ref={codeEditorRef}>
        <CodeEditor
          language={editorSettings.language}
          theme={editorSettings.theme}
          background={editorSettings.color}
          currentPadding={`${editorSettings.padding}px`}
          title={filename} // Pass filename as title
          onTitleChange={setFilename} // Update filename in the parent component
        />
      </div>
    </div>
  );
}
