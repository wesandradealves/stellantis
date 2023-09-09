import React from 'react';
import { Container, ToggleDiv } from './styles';
import { Colors } from '../../styles';

const Toggle = ({ id, inputId, setActive, active }) => {
  const windowSize = window.innerWidth;

  return (
    <>
      <Container id={id}>
        <label className="label">
          <ToggleDiv
            bg={windowSize > 769 ? '#060F27' : Colors.beige100}
          >
            <input
              onChange={e => console.log(e)}
              checked={active}
              id={inputId}
              className="toggle-state"
              type="checkbox"
              value="check"
              onClick={setActive}
            />
            <div className="toggle-inner">
              <div className="indicator"></div>
            </div>
            <div className="active-bg"></div>
          </ToggleDiv>
        </label>
      </Container>
    </>
  );
};

export default Toggle;
