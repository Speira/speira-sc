import { styled } from 'styled-components';

/**
 * `StyledAlert` is a styled component that provides a visual alert style.
 * It's designed with a transition effect to provide smooth appearance and disappearance,
 * and has default styling for the alert content and close button.
 *
 * @example
 * ```jsx
 * // Default closed alert
 * <StyledAlert>This is an alert message!</StyledAlert>
 * ```
 *
 * @example
 * ```jsx
 * // Opened alert using the "open" class
 * <StyledAlert className="open">This is an opened alert message!</StyledAlert>
 * ```
 *
 * @example
 * ```jsx
 * // Alert with title and close button
 * <StyledAlert className="open close">
 *   <strong>Title</strong>
 *   This is an alert message with a title and close button!
 *   <button className="close-alert">&times;</button>
 * </StyledAlert>
 * ```
 *
 * @styled-components
 */
export const StyledAlert = styled.section.attrs<{ $opened: boolean }>(
  ({ $opened }) => ({
    style: {
      opacity: $opened ? '1' : '0',
    },
  }),
)<{ $opened?: boolean }>`
  background-color: var(--sp-bg-color);
  margin: 0px;
  padding: 0.9em;
  border-radius: var(--sp-radius);
  box-shadow: 0px 0px 3px 0px var(--sp-font-color);
  color: var(--sp-font-color);
  display: grid;
  grid-template-columns: auto 1.5rem;
  position: relative;
  transform-origin: top;
  transition: all 0.25s ease-out;
  transition-delay: 0.25s;
  .sp-content {
    display: flex;
    flex-flow: column;
    row-gap: 0.2rem;
    place-content: center;
    place-items: center;
    min-width: 20rem;
    max-width: 100%;
  }
  .sp-close-alert {
    background-color: transparent;
    border-radius: var(--sp-radius);
    box-shadow: 0px 0px 1px 1px var(--sp-font-color) inset;
    color: var(--sp-font-color);
    cursor: pointer;
    float: right;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0px;
    line-height: initial;
  }
  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.5em;
    font-weight: bolder;
  }
  ul {
    margin: 0 0 0.1em;
  }
`;
