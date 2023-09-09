import { includeResponsive } from '@/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ProductDetails/';

const ICONICIDADE_PREFIX = `${SECTION_PREFIX}iconicidade/`;
export const iconicidade = {
  firstIconicidade: includeResponsive(
    `${ICONICIDADE_PREFIX}iconicidade`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
  secondIconicidade: includeResponsive(
    `${ICONICIDADE_PREFIX}rodas-novo-renegade`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
};

const CONFORTO_PREFIX = `${SECTION_PREFIX}conforto/`;
export const conforto = {
  firstConforto: includeResponsive(
    `${CONFORTO_PREFIX}healthy-cabin-novo-renegade`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
  secondConforto: includeResponsive(
    `${CONFORTO_PREFIX}volante-multifuncional-novo-renegade`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
};

const INTERIOR_PREFIX = `${SECTION_PREFIX}interior/`;
export const interior = {
  greenBg: includeResponsive(
    `${INTERIOR_PREFIX}green-bg`,
    'jpg',
    { prefix: PREFIX },
  ),
};

const TECNOLOGIA_PREFIX = `${SECTION_PREFIX}tecnologia/`;
export const tecnologia = {
  firstTecnologia: includeResponsive(
    `${TECNOLOGIA_PREFIX}central-multimidia-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  secondTecnologia: includeResponsive(
    `${TECNOLOGIA_PREFIX}wireless-charger-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  thirdTecnologia: includeResponsive(
    `${TECNOLOGIA_PREFIX}full-digital-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  fourthTecnologia: includeResponsive(
    `${TECNOLOGIA_PREFIX}park-assist-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  fifthTecnologia: includeResponsive(
    `${TECNOLOGIA_PREFIX}detector-placa-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
};

const PERFORMANCE_PREFIX = `${SECTION_PREFIX}performance/`;
export const performance = {
  firstPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}motor-turboflex-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  secondPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}renegade-performance4x2`,
    'jpg',
    { prefix: PREFIX },
  ),
  thirdPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}novo-renegade-4x4`,
    'jpg',
    { prefix: PREFIX },
  ),
  fourthPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}novo-renegade-escolha-terrenos`,
    'jpg',
    { prefix: PREFIX },
  ),
  fifthPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}trail-rated-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  sixthPerformance: includeResponsive(
    `${PERFORMANCE_PREFIX}suspensao-elevada-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
};

const SEGURANCA_PREFIX = `${SECTION_PREFIX}seguranca/`;
export const seguranca = {
  firstSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}airbags-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  secondSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}freio-emergencia-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  thirdSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}sensor-ponto-cego`,
    'jpg',
    { prefix: PREFIX },
  ),
  fourthSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}aviso-mudanca-faixa-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  fifthSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}farois-led-novo-renegade`,
    'jpg',
    { prefix: PREFIX },
  ),
  sixthSeguranca: includeResponsive(
    `${SEGURANCA_PREFIX}sensor-fadiga`,
    'jpg',
    { prefix: PREFIX },
  ),
};

const SERVICOS_PREFIX = `${SECTION_PREFIX}servicos/`;
export const servicos = {
  firstServicos: includeResponsive(
      `${SERVICOS_PREFIX}garantia-adicional-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  secondServicos: includeResponsive(
      `${SERVICOS_PREFIX}revisao-sob-medida-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
};

const ACESSORIOS_PREFIX = `${SECTION_PREFIX}acessorios/`;
export const acessorios = {
  firstAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}pack-audio-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  secondAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}pack-safety-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  thirdAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}barra-transversais-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  fourthAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}suporte-bicicleta-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  fifthAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}engate-reboque-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  sixthAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}estribo-lateral-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
  seventhAcessorios: includeResponsive(
      `${ACESSORIOS_PREFIX}parabarro-mopar`,
      'jpg',
      { prefix: PREFIX },
  ),
};
