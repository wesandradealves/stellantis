import React, { useMemo } from 'react'
import Facebook from '/public/static/icons/facebook.svg'
import Twitter from '/public/static/icons/twitter.svg'
import Instagram from '/public/static/icons/instagram.svg'
import Youtube from '/public/static/icons/youtube.svg'
import { pushEvent } from '../../utils/Tracking.Helpers'


export const Footer = (): JSX.Element => {
  const trackCta = (text: string) => {
    pushEvent({
      event: 'interaction',
      element: text,
      elementCategory: 'icone',
      pageSection: 'footer',
      pageSubsection: 'social',
      interactionType: 'clique',
    })
  }

  return useMemo(
    () => (
      <footer className="footer-main">
        <nav>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/jeepdobrasil"
                target="_blank"
                title="Facebook"
                onClick={() => trackCta('facebook')}
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/JeepdoBrasil"
                target="_blank"
                title="Twitter"
                onClick={() => trackCta('twitter')}
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jeepdobrasil/"
                target="_blank"
                title="Instagram"
                onClick={() => trackCta('instagram')}
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/jeepdobrasil/featured"
                target="_blank"
                title="Youtube"
                onClick={() => trackCta('youtube')}
              >
                <Youtube />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    ),
    [],
  )
}
