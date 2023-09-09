import React from 'react';

import './Img.scss';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import InputConnect from '../inputConnect/InputConnect';
import { InputContainer } from '../inputContainer/InputContainer';
import ErrorMessage from '../errorMessage/ErrorMessage';

export const LgpdParagraf = () => {
  return (
    <InputContainer>
      <InputConnect path="formSchedule.form.lgpd">
        <div className={'container'}>
          <div className={'containerBox'}>
            <div className={'lgpdWrapper'}>
              <input
                required
                onClick={() =>
                  DataLayer.push(
                    'CustomTrack',
                    'click',
                    'formulario',
                    'compre-o-seu',
                    'radio',
                    'eu-li-e-concordo-com-os-termos-acima',
                  )
                }
                type="checkbox"
                // evt.target.value
                path={'formSchedule.form.fl_check'}
              />
              Seus dados pessoais poderão ser utilizados pela
              Jeep e pela Concessionária para fins de envio de
              comunicações de marketing de produtos e serviços
              relacionados à Jeep. A Jeep compartilhará seus
              dados pessoais com a instituição financeira
              parceira e com demais empresas do grupo (Fiat,
              Chrysler, Dogde e Ram) para viabilizar o envio de
              uma proposta de financiamento do veículo de seu
              interesse. Para mais detalhes sobre como desativar
              o recebimento de comunicações de marketing e outras
              informações sobre como a Jeep trata seus dados
              pessoais, acesse a Política de Privacidade{''}
              <a
                href="https://www.jeep.com.br/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                disponível aqui.
              </a>
              <ErrorMessage
                className={'errorLgod'}
                path="formSchedule.form.lgpd"
              />
            </div>
          </div>
        </div>
      </InputConnect>
    </InputContainer>
  );
};
