
import React, { useState } from 'react';
import FontSelector from '../components/FontSelector';
import DemoContent from '../components/DemoContent';

const Index = () => {
  const [headingFont, setHeadingFont] = useState('Inter');
  const [bodyFont, setBodyFont] = useState('Inter');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">WebFont Tester</h1>
          <p className="text-muted-foreground mt-1">Test and compare different font combinations</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Font Controls */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Font Settings</h2>
                
                <FontSelector
                  label="Heading Font"
                  selectedFont={headingFont}
                  onFontChange={setHeadingFont}
                />
                
                <FontSelector
                  label="Body Font"
                  selectedFont={bodyFont}
                  onFontChange={setBodyFont}
                />

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Changes are applied instantly to the demo content on the right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="lg:col-span-2">
            <DemoContent headingFont={headingFont} bodyFont={bodyFont} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
