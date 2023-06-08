import { css, Global } from '@emotion/react';
import React from 'react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  :root {
    --color-black: rgba(0, 0, 0, 0.79);
    --color-white: rgb(255, 255, 255);
    --text-error: rgba(255, 0, 0, 0.79);
    --bg-error: rgba(255, 0, 0, 0.1);
    --border-error: rgba(255, 0, 0, 0.79);
    --color-orange: rgba(255, 255, 4, 0.79);
  }

  .dark {
    --text-primary: var(--color-white);
    --text-warning: var(--color-orange);
    --bg-primary: var(--color-black);
  }

  .light {
    --text-primary: var(--color-black);
    --text-warning: var(--color-orange);
    --bg-primary: var(--color-white);
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
