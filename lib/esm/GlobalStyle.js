"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("./mediaQueries");
exports.default = (0, styled_components_1.createGlobalStyle) `
  body {
    box-sizing: border-box;
    font-family: -apple-system, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  body > * {
    box-sizing: border-box;
  }

  a:visited {
    text-decoration: none;
  }

  /* ***************************************************** */
  /* ****************  Media query hidding *************** */
  /* ***************************************************** */

    @media(max-width: ${mediaQueries_1.targetWidth.xs}px){
    .sp-hide-xs { display: none !important; }
    }
    @media(max-width: ${mediaQueries_1.targetWidth.sm}px){
    .sp-hide-sm { display: none !important; }
    }
    @media(max-width: ${mediaQueries_1.targetWidth.md}px){
    .sp-hide-md { display: none !important; }
    }
    @media(max-width: ${mediaQueries_1.targetWidth.lg}px){
    .sp-hide-lg { display: none !important; }
    }
    @media(max-width: ${mediaQueries_1.targetWidth.xl}px){
    .sp-hide-xl { display: none !important; }
    }
    ${mediaQueries_1.media.xs}{
     .sp-show-xs { display: none !important; }
    }
    ${mediaQueries_1.media.sm}{
     .sp-show-sm { display: none !important; }
    }
    ${mediaQueries_1.media.md}{
     .sp-show-md { display: none !important; }
    }
    ${mediaQueries_1.media.lg}{
     .sp-show-lg { display: none !important; }
    }
    ${mediaQueries_1.media.xl}{
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

    /* ****************************************************** */
    /* ******************* Usefull classes ************ ***** */
    /* ****************************************************** */

   .sp-column {
      display: flex;
      flex-direction: column;
    }

   .sp-center {
      display: flex;
      flex-flow: column;
      place-items: center;
      place-content: center;
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
        border: none;
        box-shadow: none;
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
      --sp-font-color: var(--sp-color-muted) !important;
    }

    /* ****************************************************** */
    /* ****************  Background color  ****************** */
    /* ****************************************************** */

   .sp-light {
      background-color: var(--sp-color-light);
      --sp-bg-color: var(--sp-color-light);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-light {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-light);
    }
   .sp-soft-light {
      background-color: var(--sp-color-dusty);
      --sp-bg-color: var(--sp-color-dusty);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-soft-light {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-dusty);
    }

   .sp-dark {
      background-color: var(--sp-color-dark);
      --sp-bg-color: var(--sp-color-dark);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-dark {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-soft-dark {
      background-color: var(--sp-color-muted);
      --sp-bg-color: var(--sp-color-muted);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-soft-dark {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-muted);
    }

   .sp-primary {
      background-color: var(--sp-color-primary);
      --sp-bg-color: var(--sp-color-primary);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-primary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-primary);
    }
   .sp-soft-primary {
      background-color: var(--sp-color-soft-primary);
      --sp-bg-color: var(--sp-color-soft-primary);
      --sp-font-color: var(--sp-color-primary);
    }
   .sp-hollow-soft-primary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-soft-primary);
    }

   .sp-secondary {
      background-color: var(--sp-color-secondary);
      --sp-bg-color: var(--sp-color-secondary);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-secondary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-secondary);
    }
   .sp-soft-secondary {
      background-color: var(--sp-color-soft-secondary);
      --sp-bg-color: var(--sp-color-soft-secondary);
      --sp-font-color: var(--sp-color-secondary);
    }
   .sp-hollow-soft-secondary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-soft-secondary);
    }

   .sp-tertiary {
      background-color: var(--sp-color-tertiary);
      --sp-bg-color: var(--sp-color-tertiary);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-tertiary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-tertiary);
    }
   .sp-soft-tertiary {
      background-color: var(--sp-color-soft-tertiary);
      --sp-bg-color: var(--sp-color-soft-tertiary);
      --sp-font-color: var(--sp-color-tertiary);
    }
   .sp-hollow-soft-tertiary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-soft-tertiary);
    }

   .sp-quaternary {
      background-color: var(--sp-color-quaternary);
      --sp-bg-color: var(--sp-color-quaternary);
      --sp-font-color: var(--sp-color-dark);
    }
   .sp-hollow-quaternary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-quaternary);
    }
   .sp-soft-quaternary {
      background-color: var(--sp-color-soft-quaternary);
      --sp-bg-color: var(--sp-color-soft-quaternary);
      --sp-font-color: var(--sp-color-quaternary);
    }
   .sp-hollow-soft-quaternary {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-soft-quaternary);
    }

   .sp-info {
      background-color: var(--sp-color-info);
      --sp-bg-color: var(--sp-color-info);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-info {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-info);
      --sp-font-color: var(--sp-color-info);
    }
   .sp-soft-info {
      background-color: var(--sp-color-soft-info);
      --sp-bg-color: var(--sp-color-soft-info);
      --sp-font-color: var(--sp-color-info);
    }
   .sp-hollow-soft-info {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-soft-info);
      --sp-font-color: var(--sp-color-soft-info);
    }

   .sp-success {
      background-color: var(--sp-color-success);
      --sp-bg-color: var(--sp-color-success);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-success {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-success);
      --sp-font-color: var(--sp-color-success);
    }
   .sp-soft-success {
      background-color: var(--sp-color-soft-success);
      --sp-bg-color: var(--sp-color-soft-success);
      --sp-font-color: var(--sp-color-success);
    }
   .sp-hollow-soft-success {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-soft-success);
      --sp-font-color: var(--sp-color-soft-success);
    }

   .sp-warning {
      background-color: var(--sp-color-warning);
      --sp-bg-color: var(--sp-color-warning);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-warning {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-warning);
      --sp-font-color: var(--sp-color-warning);
    }
   .sp-soft-warning {
      background-color: var(--sp-color-soft-warning);
      --sp-bg-color: var(--sp-color-soft-warning);
      --sp-font-color: var(--sp-color-warning);
    }
   .sp-hollow-soft-warning {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-soft-warning);
      --sp-font-color: var(--sp-color-soft-warning);
    }

   .sp-danger {
      background-color: var(--sp-color-danger);
      --sp-bg-color: var(--sp-color-danger);
      --sp-font-color: var(--sp-color-light);
    }
   .sp-hollow-danger {
      background-color: transparent;
      --sp-bg-color: transparent;
      --sp-font-color: var(--sp-color-danger);
    }
   .sp-soft-danger {
      background-color: var(--sp-color-soft-danger);
      --sp-bg-color: var(--sp-color-soft-danger);
      --sp-font-color: var(--sp-color-danger);
    }
   .sp-hollow-soft-danger {
      background-color: transparent;
      --sp-bg-color: var(--sp-color-soft-danger);
      --sp-font-color: var(--sp-color-soft-danger);
    }

    ${({ theme }) => Object.entries(theme.colors).map(([colorName, colorValue]) => `.sp-color-${colorName} {
          --sp-font-color: ${colorValue};
       }`)}
    }
`;
