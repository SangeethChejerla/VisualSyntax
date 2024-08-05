'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export function Customize({ onChange }: { onChange: (settings: any) => void }) {
  const [theme, setTheme] = useState('terminal');
  const [color, setColor] = useState('#0070f3');
  const [padding, setPadding] = useState(16);
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const handleApply = () => {
    onChange({
      theme,
      color,
      padding,
      language: selectedLanguage,
    });
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Customize</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Customize</DialogTitle>
            <DialogDescription>
              Adjust the theme, color, padding, and language to your liking.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="language" className="text-right">
                Language
              </Label>
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="JavaScript">JavaScript</SelectItem>
                  <SelectItem value="HTML">HTML</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="Java">Java</SelectItem>
                  <SelectItem value="TypeScript">TypeScript</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="theme" className="text-right">
                Theme
              </Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theme1">monokai</SelectItem>
                  <SelectItem value="theme2">twilight</SelectItem>
                  <SelectItem value="theme3">terminal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="color" className="text-right">
                Color
              </Label>
              <div className="col-span-3 grid grid-cols-5 gap-2">
                {[
                  'linear-gradient(354deg,#ff75b5,#ffb86c)',
                  'linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))',
                  'linear-gradient(90deg,#93f9b9,#1d976c)',
                  'linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))',
                  'linear-gradient(337deg,#654ea3,#da98b4)',
                  '#000',
                  '#fff',
                  'linear-gradient(270deg,#fc6767,#ec008c)',
                  'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))',
                  'linear-gradient(270deg,#514a9d,#24c6dc)',
                ].map((backgroundOption) => (
                  <div
                    key={backgroundOption}
                    className={`h-8 w-8 rounded-full cursor-pointer ${color === backgroundOption ? 'ring-2 ring-primary' : ''}`}
                    style={{
                      backgroundImage: backgroundOption.startsWith(
                        'linear-gradient',
                      )
                        ? backgroundOption
                        : undefined,
                      backgroundColor: backgroundOption.startsWith(
                        'linear-gradient',
                      )
                        ? undefined
                        : backgroundOption,
                    }}
                    onClick={() => setColor(backgroundOption)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="padding" className="text-right">
              Padding
            </Label>
            <div className="col-span-3 grid grid-cols-4 gap-2">
              {[16, 32, 48, 64].map((paddingOption) => (
                <Button
                  key={paddingOption}
                  className="px-4 py-2"
                  onClick={() => setPadding(paddingOption)}
                  style={{
                    border:
                      padding === paddingOption ? '2px solid #000' : 'none',
                  }}
                >
                  {`${paddingOption / 16}rem`}
                </Button>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleApply}>
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
