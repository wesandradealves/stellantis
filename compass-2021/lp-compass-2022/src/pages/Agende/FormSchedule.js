/* eslint-disable */
import React from 'react';
import cls from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { form } from '@cerebral/forms';
import { TweenLite } from 'gsap/all';
// import { DataLayer } from '~/components/DataLayer';
import { LgpdParagraf } from './components/LgpdParagraf.js';
import Img from './components/Img';
import ErrorMessage from './errorMessage/ErrorMessage';
import InputConnect from './inputConnect/InputConnect';
import InputContainer from './inputContainer/InputContainer';
import Select from './select/Select';
import Concessionaria from './concessionaria/Concessionaria';
import css from './FormSchedule.scss';
import btnClosePNG from './assets/btn-close.png';
import './styles.scss';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';

export const dataPhoneType = [
  { value: 'home', name: 'Residencial' },
  { value: 'mobile', name: 'Celular' },
  { value: 'business', name: 'Comercial' },
];

export const dataTypePerson = [
  { value: 'Vendas', name: 'Pessoa Física - CPF' },
  {
    value: 'Vendas Diretas - Autonomy',
    name: 'Pessoa com Deficiência - PcD',
  },
  {
    value: 'Vendas Diretas - PJ - Micro empresário',
    name: 'Micro empresário - CNPJ',
  },
  { value: 'Vendas Diretas - Taxista', name: 'Taxista' },
  {
    value: 'Vendas Diretas - Produtor Rural',
    name: 'Produtor Rural',
  },
  { value: 'Vendas Diretas - PJ - Locadora', name: 'Locadora' },
  {
    value: 'Vendas Diretas - PJ - Auto Escola',
    name: 'Auto Escola',
  },
];

export const dataTypeVersion = [
  {
    // value: '67515R1',
    value: '15T',
    name: 'COMPASS SPORT T270 FLEX AT6',
  },
  {
    value: '12T',
    name: 'COMPASS LONGITUDE T270 FLEX AT6',
  },
  {
    value: '16T',
    name: 'COMPASS LIMITED T270 FLEX AT6',
  },
  {
    value: '1CT',
    name: 'COMPASS SERIE S T270 FLEX AT6',
  },
  {
    value: '128',
    name: 'COMPASS LONGITUDE TD350 DIESEL AT9 4X4',
  },
  {
    value: '138',
    name: 'COMPASS LIMITED TD350 DIESEL AT9 4X4',
  },
  {
    value: '118',
    name: 'COMPASS TRAILHAWK TD350 DIESEL AT9 4X4',
  },
];

const classes = {
  global: 'is-form-open',
  root: css.formSchedule,
  row: css.row,
  uLight: css.uLight,
  uBold: css.uBold,
  gr5: css.gr5,
  gr6: css.gr6,
  gr10: css.gr10,
  gr12: css.gr12,
  gr4Mobile: css['gr4@mobile'],
  size14: css.size14,
  size22: css.size22,
  size24: css.size24,
  size36: css.size36,
  size20Mobile: css.size20Mobile,
  size22Mobile: css.size22Mobile,
  size24Mobile: css.size24Mobile,
  size26Mobile: css.size26Mobile,
  size36Mobile: css.size36Mobile,
  prefix1: css.prefix1,
  prefix0Mobile: css['prefix0@mobile'],
  suffix1: css.suffix1,
  suffix0Mobile: css['suffix0@mobile'],
  btnRemove: css.btnRemove,
  btnCloseFeedback: css.btnCloseFeedback,
  btnClose: css.btnClose,
  btnAddPhone: css.btnAddPhone,
  btnSend: css.btnSend,
  autocomplete: css.autocomplete,
  autocompleteItem: css.autocompleteItem,
  contentPhone: css.contentPhone,
  inputContainer: css.inputContainer,
  ddd: css.ddd,
  phone: css.phone,
  txtLoading: css.txtLoading,
  feedbackModal: css.feedbackModal,
  block: css.block,
  container: css.container,
  formOne: css.formOne,
  text: css.text,
  separator: css.separator,
  phones: css.phones,
  textArea: css.textArea,
  formTwo: css.formTwo,
  cities: css.cities,
  textCities: css.textCities,
  isActive: css.isActive,
  concessionarias: css.concessionarias,
  errorMsgConsessionaria: css.errorMsgConsessionaria,
  hasMask: css.hasMask,
  ___: '',
  title: css.title,
  txtStatus: css.txtStatus,
};

const defaultProps = {
  className: '',
  classes,
};

export class FormSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      dealers: this.props.dealers,
      windowSize: false,
    };
    this.props = props;
    this.updatePredicate = this.updatePredicate.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.renderPhones = this.renderPhones.bind(this);
    this.onAddPhoneClick = this.onAddPhoneClick.bind(this);
    this.onRemovePhoneClick = this.onRemovePhoneClick.bind(this);
    this.renderConcessionarias =
      this.renderConcessionarias.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.onTextChanged = this.onTextChanged.bind(this);
    this.suggestionsSelected =
      this.suggestionsSelected.bind(this);
  }

  componentDidMount() {
    // DataLayer.push('FormSchedule_Abriu');
    TweenLite.to(document.querySelector('.FormSchedule'), 1, {
      scrollTo: { y: 0, autoKill: false },
    });
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
    window.scrollTo(null, 0);
    const locationSearch = window.location?.hash?.split('?')[1];
    const queryString = new URLSearchParams(
      locationSearch ?? '',
    );
    const utmValues = {
      campaign:
        queryString?.get('utmCampaign') ??
        queryString?.get('utm_campaign') ??
        '',
      content:
        queryString?.get('utmContent') ??
        queryString?.get('utm_content') ??
        '',
      medium:
        queryString?.get('utmMedium') ??
        queryString?.get('utm_medium') ??
        '',
      source:
        queryString?.get('utmSource') ??
        queryString?.get('utm_source') ??
        '',
    };
    Object.keys(utmValues).forEach(key => {
      this.props.actionSetField({
        path: `formSchedule.form.${key}`,
        value: utmValues[key] ?? '',
      });
    });
  }

  componentWillMount() {
    document.body.classList.add(classes.global);
    if (!this.props.isInit) {
      null;
      this.props.initForm();
      null;
    }
  }

  componentWillUnmount() {
    document.body.classList.remove(classes.global);
    window.removeEventListener('resize', this.updatePredicate);
  }

  onSendClick() {
    try {
      const { formSchedule } = this.props;
      if (
        !formSchedule.isValid &&
        formSchedule.concessionaria.isValid
      ) {
        TweenLite.to(
          document.querySelector('.FormSchedule'),
          1,
          {
            scrollTo: { y: 0, autoKill: false },
          },
        );
      }
      this.props.actionTouchForm({ form: 'formSchedule.form' });
      if (formSchedule.isValid) {
        DataLayer.push('FormSchedule_ClicouEnviar');
        this.props.submitForm();
      }
    } catch (error) {
      console.log({ error });
    }
  }

  renderPhones() {
    const { phone1, phone2, phone3 } = this.state;
    const list = [1, 2, 3];
    return list.map((v, k) => {
      // Força mostrar apenas uma mensagem de erro DDD/Telefone para nao quebrar o layout
      const foundErrorDDD =
        !this.props.formSchedule[`ddd`].isValid;
      if (!this.state[`phone${v}`]) {
        return null;
      }

      return (
        <div className="teste">
          <InputConnect
            filter={v => v.substr(0, 2)}
            path={`formSchedule.form.ddd${v}`}
          >
            <input
              className={cls(
                classes.size24,
                classes.size26Mobile,
                classes.ddd,
                'teste',
              )}
              placeholder="DDD"
              maxLength={2}
              type="number"
            />
          </InputConnect>

          <InputConnect
            tracking="telefone"
            filter={v => v.substr(0, 9)}
            path={`formSchedule.form.phone${v}`}
          >
            <input
              className={cls(
                classes.size24,
                classes.size26Mobile,
                classes.phone,
              )}
              placeholder="Número"
              maxLength={9}
              type="number"
            />
          </InputConnect>

          {foundErrorDDD ? (
            <ErrorMessage path={`formSchedule.form.ddd`} />
          ) : (
            <ErrorMessage path={`formSchedule.form.phone${v}`} />
          )}
        </div>
      );
    });
  }

  onAddPhoneClick() {
    if (!this.state.phone1) {
      this.setState({ phone1: true });
      this.props.addPhoneValidation({ index: 1 });
    } else if (!this.state.phone2) {
      this.setState({ phone2: true });
      this.props.addPhoneValidation({ index: 2 });
    } else if (!this.state.phone3) {
      this.setState({ phone3: true });
      this.props.addPhoneValidation({ index: 3 });
    }
  }

  onRemovePhoneClick(index) {
    const object = {};
    object[`phone${index}`] = false;
    this.setState(object);
    this.props.removePhoneValidation({ index });
  }

  renderConcessionarias() {
    if (this.props.isLoadingDealers) {
      return (
        <div className={cls(classes.gr12, classes.gr4Mobile)}>
          <div
            className={cls(
              classes.txtLoading,
              classes.size24,
              classes.uBold,
              classes.size22Mobile,
            )}
          >
            Carregando
          </div>
        </div>
      );
    }
    if (this.props.dealers.length == 0) {
      return (
        <div className={cls(classes.gr12, classes.gr4Mobile)}>
          <div
            className={cls(
              classes.txtLoading,
              classes.size24,
              classes.uBold,
              classes.size22Mobile,
            )}
          >
            Não foram encontradas concessionárias em{' '}
            {this.props.cityData.cityName}
          </div>
        </div>
      );
    }
    return this.props.dealers.map((v, k) => {
      return (
        <InputConnect
          key={k}
          path="formSchedule.form.concessionaria"
        >
          <Concessionaria data={v} />
        </InputConnect>
      );
    });
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (!suggestions.length) return;
    return (
      <ul
        className={cls('', {
          visible: suggestions.length,
        })}
      >
        {suggestions.map((x, i) => (
          <li
            className="autocomplete-item"
            // style={{ color: '#00abe5', width: '100%' }}
            key={i}
            onClick={() => this.suggestionsSelected(x)}
          >
            {x.cityName + ' - ' + x.stateCode}
          </li>
        ))}
      </ul>
    );
  }

  onTextChanged(evt) {
    let value = evt.target.value;
    if (value.length > 0) {
      fetch(
        `https://location-service.k8s.fcalatam.com.br/country/BR?cityContaining=${value}${
          value.length >= 5 ? '' : '&limit=10'
        }&includeInfluenceArea=true`,
      )
        .then(response => response.json())
        .then(res => this.setState({ suggestions: res }))
        .catch(error => console.log(error));
    }
  }

  suggestionsSelected(params) {
    this.props.setCity(params);
    this.setState({
      suggestions: [],
      value: params.cityName + ' - ' + params.stateCode,
    });
  }
  updatePredicate() {
    this.setState({ windowSize: window.innerWidth > 1020 });
  }

  render() {
    const { media, className } = this.props;
    const { phone1, phone2, phone3, windowSize } = this.state;
    const { typePerson } = this.props.formSchedule;
    //const cities = getCities();
    //const ceps = getCeps();
    /*let citiesToRender = [];
		if (cities && cities.length > 0 && ceps && ceps.length > 0 && this.state.value.length > 0) {
			if (this.state.value[0] * 1 == this.state.value[0]) {
				citiesToRender = filterCitiesByCep(cities, getCeps(), this.state.value);
			} else {
				citiesToRender = filterCities(cities, this.state.value);
			}
		}*/
    if (this.props.responseData) {
      DataLayer.push(
        'FormSchedule_Enviou',
        this.props.responseData.status,
      );
    }

    return (
      <div className="agende">
        {this.props.responseData && (
          <div>
            <div className="feedback">
              <div
                className={cls(classes.txtStatus)}
                tracking="lead-gerado"
              >
                {this.props.responseData
                  ? 'Mensagem enviada com sucesso. Agora é só aguardar o nosso contato.'
                  : 'Erro ao enviar o formulário.'}
              </div>
              <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
                <Link
                  to={
                    window.location?.search
                      ? '/' + window.location?.search
                      : '/?utm_source=receptiva_compass&utm_medium=versoes_section_&utm_campaign=receptiva_compass'
                  }
                >
                  <div
                    className={cls(
                      classes.btnCloseFeedback,
                      classes.uBold,
                    )}
                    tracking="fechar-enviado"
                    onClick={() => {
                      this.props.closeResponse({
                        form: 'formSchedule.form',
                      });
                    }}
                  >
                    <div
                      className="btn-feedback u-bold size-24 size-26-mobile"
                      onClick={() => {
                        this.onSendClick;
                        DataLayer.push(
                          'CustomTrack',
                          'click',
                          'formulario',
                          'compre-o-seu',
                          'botao',
                          'fechar',
                        );
                      }}
                    >
                      Fechar
                    </div>
                  </div>
                </Link>
              </DataLayer>
              {/* </div> */}
              <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
                <Link
                  to={
                    window.location?.search
                      ? '/' + window.location?.search
                      : '/?utm_source=receptiva_compass&utm_medium=versoes_section_&utm_campaign=receptiva_compass'
                  }
                  onClick={this.props.toggleForm}
                  className={cls(classes.btnClose)}
                  tracking="fechar-x-enviado"
                >
                  {/* <Img alt="Fechar" src={btnClosePNG} /> */}
                </Link>
              </DataLayer>
            </div>
          </div>
        )}

        <DataLayer onEvent={'FormSchedule_ClicouFechar'}>
          <Link
            to={
              window.location?.search
                ? '/' + window.location?.search
                : '/?utm_source=receptiva_compass&utm_medium=versoes_section_&utm_campaign=receptiva_compass'
            }
            onClick={this.props.toggleForm}
            className="btn-close"
            tracking="fechar"
          >
            <Img
              className="img-close"
              alt="Fechar"
              src={btnClosePNG}
            />
          </Link>
        </DataLayer>

        <div
          className={cls(
            classes.container,
            classes.size14,
            classes.size20Mobile,
          )}
        >
          <div className="row">
            <div className="form-one">
              <div className="title">
                Preencha o formulário abaixo e prepare-se
                <br />
                para conhecer todos os detalhes do seu novo Jeep
                Compass.
              </div>
              <div className="subtitle">
                Fique tranquilo, um de nossos vendedores entrará
                em contato para finalizar o seu atendimento.
              </div>
              <div className="form-row">
                <div>
                  <InputContainer label="Nome Completo*">
                    <InputConnect
                      tracking="nome"
                      path="formSchedule.form.name"
                    >
                      <input
                        onBlur={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'preencheu',
                            'formulario',
                            'compre-o-seu',
                            'campo',
                            'nome-completo',
                          )
                        }
                        className={cls(
                          classes.size24,
                          classes.size26Mobile,
                        )}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.name" />
                  </InputContainer>

                  <div className="separator" />

                  <InputContainer label="E-mail">
                    <InputConnect
                      tracking="email"
                      path="formSchedule.form.email"
                    >
                      <input
                        onBlur={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'preencheu',
                            'formulario',
                            'compre-o-seu',
                            'campo',
                            'email',
                          )
                        }
                        className={cls(
                          classes.size24,
                          classes.size26Mobile,
                        )}
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.email" />
                  </InputContainer>

                  <div className="separator" />

                  <div className="row">
                    <div style={{ width: '100%' }}>
                      <div className={cls(classes.phones)}>
                        <div className="row">
                          <div>
                            <InputContainer
                              label="Telefone"
                              tracking="telefone"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div
                            style={{
                              width: '100%',
                              display: 'flex',
                            }}
                          >
                            <InputConnect
                              filter={v => v.substr(0, 2)}
                              path={`formSchedule.form.ddd`}
                            >
                              <input
                                onBlur={() =>
                                  DataLayer.push(
                                    'CustomTrack',
                                    'preencheu',
                                    'formulario',
                                    'compre-o-seu',
                                    'campo',
                                    'ddd',
                                  )
                                }
                                style={{
                                  width: '25%',
                                  marginRight: '5%',
                                }}
                                placeholder="DDD"
                                maxLength={2}
                                type="number"
                              />
                            </InputConnect>

                            <InputConnect
                              tracking="telefone"
                              filter={v => v.substr(0, 9)}
                              path={`formSchedule.form.phone`}
                            >
                              <input
                                onBlur={() =>
                                  DataLayer.push(
                                    'CustomTrack',
                                    'preencheu',
                                    'formulario',
                                    'compre-o-seu',
                                    'campo',
                                    'telefone',
                                  )
                                }
                                style={{
                                  width: '70%',
                                }}
                                placeholder="Número"
                                maxLength={9}
                                type="number"
                              />
                            </InputConnect>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {media.mobile && <div className="separator" />}

                <div
                  className={cls(classes.gr6, classes.gr4Mobile)}
                >
                  <div className={cls(classes.row)}>
                    <div
                      className={cls(
                        classes.gr12,
                        classes.gr4Mobile,
                        classes.prefix0Mobile,
                      )}
                    >
                      <InputContainer label="CPF/CNPJ">
                        <InputConnect
                          tracking="cpf-cnpj"
                          path={'formSchedule.form.cpfCnpj'}
                          maskFormats={[
                            '999.999.999-99',
                            '99.999.999/9999-99',
                          ]}
                        >
                          <input
                            onBlur={() =>
                              DataLayer.push(
                                'CustomTrack',
                                'preencheu',
                                'formulario',
                                'compre-o-seu',
                                'campo',
                                'cpf-cnpj',
                              )
                            }
                            className={cls(
                              classes.size24,
                              classes.size26Mobile,
                              classes.hasMask,
                            )}
                            maxLength={18}
                            type="text"
                          />
                        </InputConnect>
                        <ErrorMessage path="formSchedule.form.cpfCnpj" />
                      </InputContainer>
                    </div>
                  </div>

                  <div className="separator" />

                  <div>
                    <InputContainer label="Selecione uma versão">
                      <InputConnect
                        onChange={evt => {
                          let version = '';

                          switch (evt.target.value) {
                            case '15T':
                              version =
                                'compass-sport-t270-flex';
                              break;
                            case '12T':
                              version =
                                'compass-longitude-t270-flex';
                              break;
                            case '16T':
                              version =
                                'compass-limited-t270-flex';
                              break;
                            case '1CT':
                              version =
                                'compass-serie-s-t270-flex';
                              break;
                            case '128':
                              version =
                                'compass-longitude-td350-diesel';
                              break;
                            case '6751381':
                              version =
                                'compass-limited-td350-diesel';
                              break;
                            case '138':
                              version =
                                'compass-limited-td350-diesel';
                              break;
                            case '118':
                              version =
                                'compass-trailhawk-td350-diesel';
                              break;
                          }
                          DataLayer.push(
                            'CustomTrack',
                            'select',
                            'formulario',
                            'compre-o-seu',
                            'campo',
                            'selecione-uma-versao',
                          );
                        }}
                        // onChange={evt => {
                        //   DataLayer.push(
                        //     'FormSchedule_PreencheuVersao',
                        //     evt.target.value,
                        //   );
                        // }}
                        tracking="versao"
                        path={'formSchedule.form.typeVersion'}
                      >
                        <Select
                          data={dataTypeVersion}
                          placeholder="Selecione uma versão"
                        />
                      </InputConnect>
                      <ErrorMessage path="formSchedule.form.typeVersion" />
                    </InputContainer>
                  </div>

                  <div className="separator" />

                  <InputContainer label="Mensagem">
                    <InputConnect
                      path={'formSchedule.form.message'}
                      tracking="mensagem"
                    >
                      <textarea
                        onBlur={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'preencheu',
                            'formulario',
                            'compre-o-seu',
                            'campo',
                            'mensagem',
                          )
                        }
                        className={cls(
                          classes.textArea,
                          classes.size24,
                          classes.size26Mobile,
                        )}
                        placeholder="Digite sua mensagem"
                      />
                    </InputConnect>
                    <ErrorMessage path="formSchedule.form.message" />
                  </InputContainer>

                  <div className="separator" />

                  {/* <InputConnect
										onChange={(evt) => {
											DataLayer.push('FormSchedule_ClicouReceberComunicacaoTelefone', evt.target.value);
										}}
										tracking='clicou-nao-receber-comunicacao-telefone'

										path={'formSchedule.form.fl_sms'}>
										<Check label='Aceito Receber Comunicação via Telefone (SMS/WhatsApp)' />
									</InputConnect>

									<InputConnect
										onChange={(evt) => {
											DataLayer.push('FormSchedule_ClicouReceberComunicacaoEmail', evt.target.value);
										}}
										tracking='clicou-nao-receber-comunicacao-email'

										path={'formSchedule.form.fl_email'}>
										<Check label='Aceito Receber Comunicação via E-mail' />
									</InputConnect> */}
                </div>
              </div>
            </div>
          </div>
          <LgpdParagraf />
        </div>

        {this.props.cityData && (
          <div className="form-two">
            <div className="container">
              <div className="containerTltbox">
                <div className="lgpdWrapperTlt">
                  <div className="size-36 size-36-mobile u-bold title">
                    Escolha uma das concessionárias abaixo
                  </div>
                  <div className="cities">
                    <div className="size-24 size-26-mobile u-light text-cities text">
                      Caso sua cidade não tenha sido localizada
                      digite o nome da cidade
                    </div>
                    <div className="autocomplete">
                      <input
                        // className="autocomplete-item"
                        className={cls('autocomplete-item', {
                          error: this.state.errorDealers,
                        })}
                        id="autoComplete"
                        name="autoComplete"
                        autoComplete="autocomplete_off_hack_xfr4!k"
                        placeholder="Digite aqui o nome da sua cidade"
                        label=""
                        onBlur={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'preencheu',
                            'formulario',
                            'compre-o-seu',
                            'campo',
                            `digite-aqui-o-nome-da-sua-cidade`,
                          )
                        }
                        type="search"
                        value={this.state.value}
                        onInput={evt =>
                          this.setState({
                            value: evt.target.value,
                          })
                        }
                        onChange={this.onTextChanged}
                      />
                      {this.renderSuggestions()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row concessionarias">
                {this.renderConcessionarias()}
              </div>
              <div className="error-msg-consessionaria">
                <ErrorMessage path="formCountdown.form.concessionaria" />
              </div>
              {!this.props.isLoading && (
                <div
                  className="btn-send u-bold size-24 size-26-mobile"
                  onClick={() => {
                    this.onSendClick();
                    DataLayer.push(
                      'CustomTrack',
                      'click',
                      'formulario',
                      'compre-o-seu',
                      'botao',
                      'enviar',
                    );
                  }}
                >
                  ENVIAR
                </div>
              )}
              {this.props.isLoading && (
                <div className="btn-send u-bold size-24 size-26-mobile">
                  ENVIANDO...
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  {
    media: state`useragent.media`,
    formSchedule: form(state`formSchedule.form`),
    actionSetField: signal`formSchedule.setField`,
    actionTouchForm: signal`formSchedule.touchForm`,
    removePhoneValidation: signal`formSchedule.removePhoneValidation`,
    addPhoneValidation: signal`formSchedule.addPhoneValidation`,
    toggleForm: signal`formSchedule.toggleForm`,
    setCity: signal`formSchedule.setCity`,
    submitForm: signal`formSchedule.submitForm`,
    isInit: state`formSchedule.isInit`,
    initForm: signal`formSchedule.init`,
    closeResponse: signal`formSchedule.closeResponse`,
    cityData: state`formSchedule.cityData`,
    dealers: state`formSchedule.dealers`,
    isLoading: state`formSchedule.isLoading`,
    isLoadingDealers: state`formSchedule.isLoadingDealers`,
    responseData: state`formSchedule.responseData`,
  },
  FormSchedule,
);
