import { ChangeEvent, MouseEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import initTheme from '../theme';
import { checkIsKeyof } from '../utils/typeguard.utils';

import { Styled } from './styles/Styled';
import { StyledButton } from './styles/StyledButton';
import { StyledForm } from './styles/StyledForm';
import { StyledInput } from './styles/StyledInput';
import { StyledLink } from './styles/StyledLink';

function ThemeModifier() {
  const [tmpTheme, setTmpTheme] = useState(initTheme());
  const [isOpened, setOpened] = useState(false);
  const { setNextTheme } = useTheme();

  const updateColor = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    if (checkIsKeyof(tmpTheme.colors, key)) {
      setTmpTheme((prev) => ({
        ...prev,
        colors: { ...prev.colors, [key]: e.target.value },
      }));
    }
  };

  const resetTheme = () => {
    setTmpTheme(initTheme());
  };

  const handleClick = () => {
    setNextTheme(tmpTheme);
  };

  const handleShow = (e: MouseEvent) => {
    e.preventDefault();
    setOpened(true);
  };

  if (!isOpened)
    return (
      <>
        <StyledLink
          as="a"
          style={{
            fontSize: '0.8rem',
            fontStyle: 'italic',
            marginBottom: '1rem',
            textDecoration: 'underline',
          }}
          href="#"
          onClick={handleShow}>
          (Change Theme)
        </StyledLink>
        <br />
      </>
    );

  return (
    <Styled
      style={{ opacity: isOpened ? '1' : '0', transition: 'opacity, 0.3s' }}>
      <StyledForm>
        <Styled
          $responsive={{
            display: 'grid',
            columnGap: '1em',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            rowGap: '1em',
          }}>
          {Object.entries(tmpTheme.colors).map(([k, v]) => (
            <Styled
              key={k}
              as="label"
              $responsive={{ flexDirection: 'column', alignItems: 'center' }}>
              <StyledInput
                $responsive={{
                  width: '5rem',
                  height: '2.5rem',
                  boxShadow: 'none',
                }}
                key={k}
                type="color"
                value={v}
                onChange={(e) => updateColor(k, e)}
              />
              <Styled as="span">{k}</Styled>
            </Styled>
          ))}
        </Styled>
        <br />
        <Styled
          $responsive={{
            display: 'grid',
            columnGap: '1rem',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}>
          <StyledButton
            type="button"
            className="sp-success"
            onClick={handleClick}>
            Save colors
          </StyledButton>
          <StyledButton
            type="button"
            className="sp-info"
            onClick={() => setOpened(false)}>
            Hide menu
          </StyledButton>
          <StyledButton
            type="button"
            className="sp-warning"
            onClick={resetTheme}>
            Reset colors
          </StyledButton>
        </Styled>
      </StyledForm>
    </Styled>
  );
}

export default ThemeModifier;
