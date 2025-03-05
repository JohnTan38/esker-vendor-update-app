import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <a href="https://freeimage.host/">
        <img
          src="https://iili.io/33KBhn2.jpg"
          
          alt='33KBhn2.jpg'
          width="48"
          height="28"
          
          aria-label="Logo"
        />

        Esker App
        </a>
        
      
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    
  ],
};

