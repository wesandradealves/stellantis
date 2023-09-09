import { FC, useEffect } from 'react'
import { pushEvent } from '../../utils/Tracking.Helpers'
import { useAppStore } from '../../stores/app.store'
import { Button } from '../Button'

const pageSubsection = 'lgpd-caixa-inicial'
const STORAGE_PREFIX = '@jeep-commander/'

const CookieHolder: FC = () => {
  const { showCookie, setShowCookie, showDisclaimer, setShowDisclaimer } =
    useAppStore()
  const tracking = () => {
    pushEvent({
      event: 'interaction',
      element: 'politica-de-privacidade',
      elementCategory: 'link',
      pageSection: 'conteudo',
      pageSubsection,
      interactionType: 'clique',
    })
  }

  const handleCloseCookie = () => {
    window.localStorage.setItem(`${STORAGE_PREFIX}lgpd`, 'true')
    setShowCookie(false)
  }

  const handleCloseDisclaimer = () => {
    window.localStorage.setItem(`${STORAGE_PREFIX}disclaimer`, 'true')
    setShowDisclaimer(false)
  }

  useEffect(() => {
    if (window?.localStorage) {
      setShowCookie(!window.localStorage.getItem(`${STORAGE_PREFIX}lgpd`))
      setShowDisclaimer(
        !window.localStorage.getItem(`${STORAGE_PREFIX}disclaimer`),
      )
    }
  }, [])

  return (
    <div className="cookiesContainer">
      <div
        className={[
          'cookieHolderContainer',
          showCookie ? 'showCookie' : '',
        ].join(' ')}
      >
        <div>
          <div className="textContent">
            <h3 className="title">RESPEITAMOS A SUA PRIVACIDADE</h3>
            <p>
              {
                'Informamos que utilizamos cookies que nos permitem fornecer funcionalidades como segurança, acessibilidade e gerenciamento de rede. Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você. Se quiser saber mais sobre os cookies que usamos para garantir uma melhor experiência em nosso site, acesse nossa '
              }
              <a
                href="https://www.jeep.com.br/politica-de-privacidade.html"
                target="_blank"
                aria-label="Política de Privacidade"
                title="Política de Privacidade"
                onClick={() => tracking()}
                onAuxClick={() => tracking()}
              >
                {'Política de Privacidade'}
              </a>
              {'.'}
            </p>
          </div>
          <Button
            title="Fechar"
            onClick={() => handleCloseCookie()}
            icon={() => null}
            text="Fechar"
          />
        </div>
      </div>
      <div
        className={[
          'cookieHolderContainer',
          showDisclaimer ? 'showDisclaimer' : '',
        ].join(' ')}
      >
        <div>
          <div className="textContent">
            <p>
              {
                'Muita, mas muita gente mesmo quer um Jeep novo. Por conta disso, infelizmente o carro pode demorar no mínimo 180 dias para chegar na sua garagem. Mas fique tranquilo, aproveite para conhecer tudo sobre seu novo carro.'
              }
            </p>
          </div>
          <Button
            title="Fechar"
            onClick={() => handleCloseDisclaimer()}
            icon={() => null}
            text="Fechar"
          />
        </div>
      </div>
    </div>
  )
}

export default CookieHolder
