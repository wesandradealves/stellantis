import { normatize } from './string/normatize';

function createTrack(options) {
  const opts = Object(options);
  return {
    event: opts.event || 'interaction',
    segment: 'landing-page',
    product: 'compass',
    interactionType: opts.type || '-',
    brand: 'jeep',
    elementCategory: opts.part || 'conteudo',
    pageSection: opts.section || '-',
    pageSubsection: opts.subsection || '-',
    element: opts.elementText || '-',
  };
}

function track(
  type,
  section,
  subsection,
  part,
  elementText,
  theme,
  device,
) {
  const isViewpage = /^(?:view|vpv)$/i.test(type);
  const event = isViewpage ? type : 'interaction';
  /* eslint-disable no-param-reassign */
  type = isViewpage ? 'abrir' : type;
  /* eslint-enable no-param-reassign */

  if (
    !/^(?:clique|abrir|fechar|remocao|selecao|preencheu)$/.test(
      type,
    )
  ) {
    // console.error('track.interactionType is wrong at:', { event, type, section, subsection, part, elementText, theme,   device });
  }
  if (!/^(?:header|footer|conteudo)$/.test(part)) {
    // console.error('track.part is wrong at:', { event, type, section, subsection, part, elementText, theme,   device });
  }
  return createTrack({
    event,
    type,
    section,
    subsection,
    part,
    elementText,
    theme,
    device,
  });
}

export const data = {
  // General ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  App_Iniciou: (theme, device) => {
    //  ok
    return null;
  },
  App_Pageview: (section, theme, device) => {
    //  ok
    if (
      /^(interior|design|performance|tecnologia|seguranca|for[cç]a[-\s]e[-\s]pot[eê]ncia|s-design|servi[çc]os?)$/i.test(
        section,
      )
    )
      return null;
    if (/^(fotos)$/.test(section) && device === 'm') return null;
    /* eslint-disable no-param-reassign */
    if (/^(about)$/.test(section)) section = 'sobre';
    /* eslint-enable no-param-reassign */
    /* eslint-disable no-param-reassign */
    if (/^(live)$/.test(section))
      section = 'realidade-aumentada';
    /* eslint-enable no-param-reassign */
    return track(
      'vpv',
      section,
      '',
      null,
      null,
      theme,

      device,
    );
  },
  // Scroll To {section} ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  CustomTrack: (
    interactionType,
    pageSection,
    pageSubsection,
    elementCategory,
    element,
  ) => {
    // ( InteractioType , PageSection, PageSubSection, ElementCategory, Element)
    return track(
      interactionType,
      pageSection,
      pageSubsection,
      elementCategory,
      element,
    );
  },

  DataLayerScrollTo: (section, element, theme, device) => {
    // ( InteractioType , PageSection, PageSubSection, ElementCategory, Element)
    return track(
      'navegacao',
      'conteudo',
      section,
      'scroll',
      element,
      theme,
      device,
    );
  },
  // Menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Menu_ClicouAbrir: (submenuName, theme, device) => {
    //  ok

    return track(
      'clique',
      'header',
      'menu',
      'link',
      `${submenuName}`,
      theme,
      device,
    );
  },
  Stories_ClicouPassar: (storie, direcao, theme, device) => {
    //  ok
    return track(
      'clique',
      'conteudo',
      'stories',
      `${storie}`,
      `${direcao}`,
      theme,
      device,
    );
  },
  Menu_ClicouFechar: (theme, device) => {
    //  ok
    return track(
      'fechar',
      'header',
      'menu',
      'icone',
      'menu',
      theme,

      device,
    );
  },
  MenuDesktop_ClicouAbrir: (theme, device) => {
    //  ok
    return track(
      'abrir',
      'conteudo',
      'menu',
      'icone',
      'menu',
      theme,

      device,
    );
  },
  MenuDesktop_ClicouFechar: (theme, device) => {
    //  ok
    return track(
      'fechar',
      'conteudo',
      'menu',
      'icone',
      'menu',
      theme,

      device,
    );
  },
  Menu_ClicouSubmenu: (submenuName, theme, device) => {
    //  ok
    return track(
      'clique',
      'header',
      'menu',
      'link',
      `${submenuName}`,
      theme,

      device,
    );
  },
  Menu_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'header',
      'menu',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  Footer_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'footer',
      'ctas',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  MenuDesktop_ClicouCTA: (ctaName, theme, device) => {
    return track(
      'clique',
      'header',
      'menu',
      'cta',
      `${ctaName}`,
      theme,

      device,
    );
  },
  TodasAsVersoes_ClicouCTA: (
    ctaName,
    versionName,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'header',
      'fotos',
      'cta',
      `${versionName}-${ctaName}`,
    );
  },
  TudoDoCompass_ClicouFeature: (featureName, theme, device) => {
    return track(
      'clique',
      'conteudo',
      'tudo-de-jeep-compass',
      'botao',
      `${featureName}`,
      theme,

      device,
    );
  },
  Footer_ClicouSocial: (redeSocial, theme, device) => {
    return track(
      'clique',
      'footer',
      'social',
      'icone',
      `${redeSocial}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNext: (subsection, theme, device) => {
    return track(
      'clique',
      'conteudo',
      `${subsection}`,
      `icone`,
      theme,
      device,
    );
  },
  Conteudo_ClicouPrev: (
    subsection,
    direction,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      `${subsection}`,
      'icone',
      `${direction}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextServices: (
    subsection,
    story,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      `${subsection}`,
      `card`,
      `${story}`,
      theme,
      device,
    );
  },
  Conteudo_ClicouPrevServices: (
    subsection,
    direction,
    theme,

    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      `${subsection}`,
      'card',
      `${direction}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouPrevGaleria: (
    version,
    direction,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'todas-as-versoes',
      `${version}`,
      `${direction}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextGaleria: (
    direction,
    version,
    theme,
    device,
  ) => {
    return track(
      'clique',
      'conteudo',
      'todas-as-versoes',
      `${version}`,
      `${direction}`,
      theme,

      device,
    );
  },
  Conteudo_ClicouNextAllCompass: (version, direction) => {
    return track(
      'clique',
      'tudo-de-jeep-compass',
      `${version}`,
      'icone',
      `proximo-${direction}`,
    );
  },
  Conteudo_ClicouPrevAllCompass: (version, direction) => {
    return track(
      'clique',
      'tudo-de-jeep-compass',
      `${version}`,
      'icone',
      `anterior-${direction}`,
    );
  },
  Menu_ClicouLogoJeep: (theme, device) => {
    //  *
    return track(
      'clique',
      'menu',
      'menu',
      'conteudo',
      'logo-jeep',
      theme,

      device,
    );
  },
  Fotos_ClicouFotos: (imageName, theme, device) => {
    return track(
      'clique',
      'conteudo',
      'fotos',
      `galeria`,
      `${imageName}`,
      theme,
      device,
    );
  },
};

export default data;

// ------------------------------------------------------------------------------------------------
// @see https://docs.google.com/spreadsheets/d/18kur6ERYv-13nom1Tp1oY2whrwVxZ9Nu/edit#gid=360237036
// ------------------------------------------------------------------------------------------------
