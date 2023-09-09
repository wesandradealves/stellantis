/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
// import { DataLayer } from '~/components/DataLayer';
import './Concessionaria.scss';
import sanitizeString from '../../../NewTrack/sanitizeString';
const classes = {
  gr4: 'gr-4',
  prefix1: 'prefix-1',
  suffix1: 'suffix-1',
  gr4Mobile: 'gr-4@mobile',
  prefix0Mobile: 'prefix-0@mobile',
  suffix0Mobile: 'suffix-0@mobile',
  concessionaria: 'Concessionaria',
  radio: 'radio',
  uRadio: 'u-radio',
  size24: 'size-24',
  size24Mobile: 'size-24-mobile',
  isActive: 'is-active',
  info: 'info',
  size22: 'size-22',
  size26Mobile: 'size-26-mobile',
  uMedium: 'u-medium',
  uLight: 'u-light',
};

const propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export class Concessionaria extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // DataLayer.push('FormSchedule_SelecionouConcessionaria', this.props.data.nome);
    this.props.onChange({
      target: {
        value: this.props.data.id,
      },
    });
  }

  render() {
    const { id, fantasyName, address, city } = this.props.data;

    function capitalizeFirstLetter(string) {
      string = string.toLowerCase();
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
      <div
        onClick={() => {
          DataLayer.push(
            'CustomTrack',
            'click',
            'formulario',
            'compre-o-seu',
            'radio',
            `concessionaria-${sanitizeString(
              this.props.data.fantasyName,
            )}`,
          );
          // NewDataLayer.selectEvent({
          //   element: `concessionaria-${this.props.data.fantasyName}`,
          //   elementCategory: 'campo',
          //   pageSection: 'formulario',
          //   pageSubsection: 'lead-compre-o-seu',
          //   selectedValue: `${this.props.data.dealerCode}`,
          // });
        }}
        className="gr-4 prefix-1 suffix-1 gr-4@mobile prefix-0@mobile suffix-0@mobile"
      >
        <div
          className={cls('Concessionaria')}
          style={{ margin: '3em 0' }}
          onClick={this.onClick}
        >
          <div
            className={cls('radio', 'size-24', 'size-24-mobile')}
          >
            <div
              className={cls('u-radio', {
                'is-active': this.props.value === id,
              })}
            ></div>
          </div>
          <div className={cls('info')}>
            <span>{capitalizeFirstLetter(fantasyName)}</span>

            <div className={cls('addres')}>
              {capitalizeFirstLetter(address)}
            </div>
            <div className={cls('city')}>
              {capitalizeFirstLetter(city.name)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Concessionaria.propTypes = propTypes;
export default Concessionaria;
