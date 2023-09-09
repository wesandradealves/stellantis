import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// import thunder from '../../assets/images/Icons/thunder.svg';
import {
  PorcentageText,
  ProgressContainer,
  ProgressDiv,
  // Thunder
} from './styles';

const ProgressBar = ({
  id,
  width,
  height,
  porcentage,
  maxValue,
}) => {
  const [porcentageDisplay, setPorcentageDisplay] = useState(0);

  function handleCalculatePorcentage() {
    const divMenorPorMaior = porcentage / maxValue;
    const res = divMenorPorMaior * 100;

    if (res > 100) {
      return setPorcentageDisplay(100);
    }
    return setPorcentageDisplay(res);
  }
  function roundValue(porcentageDisplayValue) {
    if (
      porcentageDisplayValue < 1 &&
      porcentageDisplayValue !== 0
    ) {
      return porcentageDisplayValue.toFixed(1);
    }
    return Math.trunc(porcentageDisplayValue);
  }

  useEffect(() => {
    handleCalculatePorcentage();
  }, [porcentage, maxValue]);

  return (
    <>
      <ProgressContainer id={id} width={width} height={height}>
        <ProgressDiv porcentage={porcentageDisplay} />
        <PorcentageText>
          {roundValue(porcentageDisplay)}%
        </PorcentageText>
        {/* <Thunder src={thunder} alt="thunder" /> */}
      </ProgressContainer>
    </>
  );
};

ProgressBar.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  chargerTime: PropTypes.number,
  maxValue: PropTypes.number.isRequired,
};

export default ProgressBar;
