import React, { useState } from 'react';
import { ContainerBox } from './styles';

export default function DisclaimerLgpd() {
  const [visible, setInvisible] = useState(true);
  const lgpd = 'LGPD_JEEP_COMPASS';
  const checkLgpd = () => localStorage.setItem(lgpd, true);
  return (
    <ContainerBox>
      {!localStorage.getItem(lgpd) ? (
        <div style={{ display: visible ? null : 'none' }}>
          <div className="container">
            <h3 className="title">
              RESPEITAMOS A SUA PRIVACIDADE
            </h3>
            <div className="contentRow">
              <h3 className="text">
                Informamos que utilizamos cookies que nos
                permitem fornecer funcionalidades como segurança,
                acessibilidade e gerenciamento de rede. Nosso
                site também pode usar cookies de terceiros para
                enviar publicidade mais relevante para você. Se
                quiser saber mais sobre os cookies que usamos
                para garantir uma melhor experiência em nosso
                site, acesse nossa{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.jeep.com.br/politica-de-privacidade.html"
                >
                  Política de Privacidade
                </a>
                .
              </h3>
              <button
                className="button"
                onClick={() => {
                  setInvisible(false);
                  checkLgpd();
                }}
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </ContainerBox>
  );
}
