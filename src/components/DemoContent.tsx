
import React from 'react';

interface DemoContentProps {
  headingFont: string;
  bodyFont: string;
}

const DemoContent: React.FC<DemoContentProps> = ({ headingFont, bodyFont }) => {
  const headingStyle = { fontFamily: headingFont };
  const bodyStyle = { fontFamily: bodyFont };

  return (
    <div className="bg-card border border-border rounded-lg p-8 space-y-8">
      {/* Article Header */}
      <article className="space-y-6">
        <header className="space-y-4">
          <h1 
            className="text-4xl font-bold text-foreground leading-tight"
            style={headingStyle}
          >
            The Art of Typography in Modern Web Design
          </h1>
          
          <p className="text-muted-foreground" style={bodyStyle}>
            Published on March 15, 2024 • 5 min read
          </p>
        </header>

        {/* Article Content */}
        <div className="prose max-w-none space-y-6">
          <p className="text-lg text-foreground leading-relaxed" style={bodyStyle}>
            Typography is the foundation of effective web design. It's not just about making text readable; 
            it's about creating hierarchy, establishing mood, and guiding the user's eye through your content 
            in a meaningful way.
          </p>

          <h2 
            className="text-2xl font-semibold text-foreground mt-8 mb-4"
            style={headingStyle}
          >
            The Power of Font Pairing
          </h2>

          <p className="text-foreground leading-relaxed" style={bodyStyle}>
            Choosing the right combination of fonts can dramatically impact how your message is perceived. 
            A well-paired heading and body font creates visual harmony while maintaining excellent readability. 
            The key is finding fonts that complement each other without competing for attention.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50">
            <p 
              className="text-lg italic text-foreground"
              style={bodyStyle}
            >
              "Typography is a beautiful group of letters, not a group of beautiful letters."
            </p>
            <cite className="text-sm text-muted-foreground mt-2 block" style={bodyStyle}>
              — Matthew Carter
            </cite>
          </blockquote>

          <h3 
            className="text-xl font-semibold text-foreground mt-6 mb-3"
            style={headingStyle}
          >
            Best Practices for Web Typography
          </h3>

          <ul className="space-y-2 text-foreground" style={bodyStyle}>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Maintain sufficient contrast between text and background colors
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Use appropriate line heights for better readability (1.4-1.6 for body text)
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Limit the number of fonts to 2-3 maximum per design
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Consider the emotional impact of your font choices
            </li>
          </ul>

          <h3 
            className="text-xl font-semibold text-foreground mt-6 mb-3"
            style={headingStyle}
          >
            Font Loading Performance
          </h3>

          <p className="text-foreground leading-relaxed" style={bodyStyle}>
            Modern web fonts should be optimized for performance. Use font-display: swap to ensure 
            text remains visible during font load, and consider using variable fonts to reduce 
            the number of font files needed for different weights and styles.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg mt-6">
            <h4 
              className="text-lg font-semibold text-foreground mb-3"
              style={headingStyle}
            >
              Quick Font Testing Checklist
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm" style={bodyStyle}>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Readability Tests:</p>
                <p className="text-muted-foreground">✓ Various screen sizes</p>
                <p className="text-muted-foreground">✓ Different lighting conditions</p>
                <p className="text-muted-foreground">✓ Multiple paragraph lengths</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Visual Harmony:</p>
                <p className="text-muted-foreground">✓ Consistent spacing</p>
                <p className="text-muted-foreground">✓ Appropriate contrast</p>
                <p className="text-muted-foreground">✓ Clear hierarchy</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DemoContent;
