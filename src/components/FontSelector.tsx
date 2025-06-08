
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FontSelectorProps {
  label: string;
  selectedFont: string;
  onFontChange: (font: string) => void;
}

const fonts = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Source Sans Pro',
  'Poppins',
  'Nunito',
  'Playfair Display',
  'Merriweather',
  'Lora',
  'PT Serif',
  'Crimson Text',
  'EB Garamond',
  'Libre Baskerville',
  'Oswald',
  'Raleway',
  'Ubuntu',
  'Fira Sans',
  'Work Sans'
];

const FontSelector: React.FC<FontSelectorProps> = ({ label, selectedFont, onFontChange }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <Select value={selectedFont} onValueChange={onFontChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a font" />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem key={font} value={font} className="font-medium">
              <span style={{ fontFamily: font }}>{font}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {/* Font Preview */}
      <div className="p-3 bg-muted rounded border">
        <p 
          className="text-sm text-muted-foreground"
          style={{ fontFamily: selectedFont }}
        >
          Preview: The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  );
};

export default FontSelector;
