import { createGlobalStyle } from 'styled-components';

import { media, targetWidth } from './utils/responsive.utils';

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: -apple-system, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  body > * {
    box-sizing: border-box;
    scrollbar-width: initial;
    scrollbar-color: ${({ theme }) =>
      `${theme.colors.muted} ${theme.colors.dusty}`};
  }

  a:visited {
    text-decoration: none;
  }

  /* ***************************************************** */
  /* ******************** Scroll bar ***** *************** */
  /* ***************************************************** */
  ::-webkit-scrollbar {
    width: 0.7vw;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--sp-bg-color);
    opacity:0.5;
    position:absolute;
    left:0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--sp-font-color);
    border-radius: 3px;
    opacity:0.5;
    filter: brightness(0px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color:  ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-button:single-button {
    background: radial-gradient(var(--sp-font-color), 45%, transparent);
    display: block;
    background-size: 10px;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:hover {
    background-color:  ${({ theme }) => theme.colors.primary};
  }



  /* ***************************************************** */
  /* ****************  Media query hidding *************** */
  /* ***************************************************** */

    @media(max-width: ${targetWidth.xs}px){
    .sp-hide-xs { display: none !important; }
    }
    @media(max-width: ${targetWidth.sm}px){
    .sp-hide-sm { display: none !important; }
    }
    @media(max-width: ${targetWidth.md}px){
    .sp-hide-md { display: none !important; }
    }
    @media(max-width: ${targetWidth.lg}px){
    .sp-hide-lg { display: none !important; }
    }
    @media(max-width: ${targetWidth.xl}px){
    .sp-hide-xl { display: none !important; }
    }
    ${media.xs}{
     .sp-show-xs { display: none !important; }
    }
    ${media.sm}{
     .sp-show-sm { display: none !important; }
    }
    ${media.md}{
     .sp-show-md { display: none !important; }
    }
    ${media.lg}{
     .sp-show-lg { display: none !important; }
    }
    ${media.xl}{
     .sp-show-xl { display: none !important; }
    }

  /* ******************************************************************* */
  /* ***********************  Vars declaration  ************************ */
  /*         NB: The bg-text-color are created to be adapted             */
  /*           to the bg color, it is meant to be overrided              */
  /* ******************************************************************* */

  :root {
    /* ***************************************************** */
    /* *******************  Static vars  ******************* */
    /* ***************************************************** */

    --sp-color-dark: ${({ theme }) => theme.colors.dark};
    --sp-color-muted: ${({ theme }) => theme.colors.muted};
    --sp-color-dusty: ${({ theme }) => theme.colors.dusty};
    --sp-color-light: ${({ theme }) => theme.colors.light};

    --sp-color-primary: ${({ theme }) => theme.colors.primary};
    --sp-color-secondary: ${({ theme }) => theme.colors.secondary};
    --sp-color-tertiary: ${({ theme }) => theme.colors.tertiary};
    --sp-color-quaternary: ${({ theme }) => theme.colors.quaternary};

    --sp-color-info: ${({ theme }) => theme.colors.info};
    --sp-color-success: ${({ theme }) => theme.colors.success};
    --sp-color-warning: ${({ theme }) => theme.colors.warning};
    --sp-color-danger: ${({ theme }) => theme.colors.danger};

    --sp-color-soft-primary: ${({ theme }) => theme.colors.primary_soft};
    --sp-color-soft-secondary: ${({ theme }) => theme.colors.secondary_soft};
    --sp-color-soft-tertiary: ${({ theme }) => theme.colors.tertiary_soft};
    --sp-color-soft-quaternary: ${({ theme }) => theme.colors.quaternary_soft};
    --sp-color-soft-info: ${({ theme }) => theme.colors.info_soft};
    --sp-color-soft-success: ${({ theme }) => theme.colors.success_soft};
    --sp-color-soft-warning: ${({ theme }) => theme.colors.warning_soft};
    --sp-color-soft-danger: ${({ theme }) => theme.colors.danger_soft};

    --sp-box-shadow: ${({ theme }) => theme.boxShadow.low};
    --sp-box-shadow-hight: ${({ theme }) => theme.boxShadow.hight};
    --sp-radius: ${({ theme }) => theme.radius.low};
    --sp-radius-hight: ${({ theme }) => theme.radius.hight};

    /* ****************************************************** */
    /* *******************  Dynamic vars  ******************* */
    /* ****************************************************** */

    --sp-bg-color: var(--sp-color-light);
    --sp-font-color: var(--sp-color-dark);
    --sp-soft-color: var(--sp-color-muted);

    /* ****************************************************** */
    /* ******************* Usefull classes ************ ***** */
    /* ****************************************************** */

   .sp-column {
      flex-direction: column;
    }

   .sp-center {
      place-items: center;
      place-content: center;
    }
   .sp-end {
      place-items: center;
      place-content: flex-end;
    }
   .sp-start {
      place-items: center;
      place-content: flex-start;
    }

    .sp-rounded,
    .sp-rounded:after {
        border-radius: 100%;
    }
    .sp-curved,
    .sp-curved:after {
        border-radius: 2em;
    }
    .sp-square,
    .sp-square:after {
        border-radius: 0;
    }
    .sp-unboxed {
        border: none !important;
        box-shadow: none !important;
    }
   .sp-radius {
      border-radius: var(--sp-radius);
    }
   .sp-radius-hight {
      border-radius: var(--sp-radius-hight);
    }
   .sp-shadow {
      box-shadow: var(--sp-box-shadow);
    }
   .sp-shadow-hight {
      box-shadow: var(--sp-box-shadow-hight);
    }
   .sp-text-shadow {
      text-shadow: 0.5px 0px 0px var(--sp-color-dark);
    }
   .sp-disabled {
      background-color: var(--sp-color-dusty);
      --sp-bg-color: var(--sp-color-dusty);
      --sp-soft-color: var(--sp-color-light);
      --sp-font-color: var(--sp-color-muted) !important;
    }

    /* ****************************************************** */
    /* ****************  Background color  ****************** */
    /* ****************************************************** */

   .sp-light {
      background-color: var(--sp-color-light);
      --sp-bg-color: var(--sp-color-light);
      --sp-soft-color: var(--sp-color-muted);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-light {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-soft-color: var(--sp-color-dusty);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-soft-light {
      background-color: var(--sp-color-dusty);
      --sp-bg-color: var(--sp-color-dusty);
      --sp-soft-color: var(--sp-color-muted);
      --sp-font-color: transparent;
    }
   .sp-silent-light {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-soft-color: var(--sp-color-light);
      --sp-font-color: var(--sp-color-dusty);
    }

   .sp-dark {
      background-color: var(--sp-color-dark);
      --sp-bg-color: var(--sp-color-dark);
      --sp-soft-color: var(--sp-color-dusty);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-dark {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-soft-color: var(--sp-color-muted);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-soft-dark {
      background-color: var(--sp-color-muted);
      --sp-bg-color: var(--sp-color-muted);
      --sp-soft-color: var(--sp-color-dusty);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-silent-dark {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-soft-color: var(--sp-color-dusty);
      --sp-font-color: var(--sp-color-muted);
    }

    ${() =>
      ['primary', 'secondary', 'tertiary', 'quaternary'].map(
        (colorName) => `
       .sp-${colorName} {
          background-color: var(--sp-color-${colorName});
          --sp-bg-color: var(--sp-color-${colorName});
          --sp-soft-color: var(--sp-color-soft-${colorName});
          --sp-font-color: var(--sp-color-light);
        }
       .sp-hollow-${colorName} {
          background-color: transparent;
          --sp-bg-color: transparent;
          --sp-soft-color: var(--sp-color-soft-${colorName});
          --sp-font-color: var(--sp-color-${colorName});
        }
       .sp-soft-${colorName} {
          background-color: var(--sp-color-soft-${colorName});
          --sp-bg-color: var(--sp-color-soft-${colorName});
          --sp-soft-color: var(--sp-color-light);
          --sp-font-color: var(--sp-color-${colorName});
        }
       .sp-silent-${colorName} {
          background-color: transparent;
          --sp-bg-color: transparent;
          --sp-soft-color: var(--sp-color-muted);
          --sp-font-color: var(--sp-color-soft-${colorName});
        }
          `,
      )}
    }


`;
