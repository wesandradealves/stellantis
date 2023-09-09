import {
  Section,
  PrincipalText,
  Description,
  DescriptionBox,
  MiddleContent,
  StampRow,
} from './styles';

import {
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
} from '../../assets/images/05-awards/desktop';

const Awards = () => {
  return (
    <Section>
      <StampRow>
        <img
          alt="Prêmio 2017 - Maior Valor de Revenda Autos - SUV Compacto"
          src={Image01}
        />
        <img
          alt="Prêmio 2018 - Maior Valor de Revenda Autos - Campeão Geral"
          src={Image02}
        />
        <img
          alt="Prêmio 2019 - Maior Valor de Revenda Autos - SUV Compacto"
          src={Image03}
        />
        <img
          alt="Prêmio 2020 - Maior Valor de Revenda Autos - SUV Compacto"
          src={Image04}
        />
        <img
          alt="Prêmio 2021 - Qual Comprar - Melhor SUV Premium"
          src={Image05}
        />

        <img alt="Prêmio Motor1.com" src={Image06} />

        <img
          alt="Prêmio 2021 - CARSUGHI L'auto Preferita melhor SUV Médio"
          src={Image07}
        />
        <img
          alt="Prêmio 2021 - Carros melhor SUV Médio"
          src={Image08}
        />
      </StampRow>
      <MiddleContent>
        <PrincipalText>
          DO TOPO DO PÓDIO <br />
          DIRETO PARA A SUA GARAGEM
        </PrincipalText>

        <Description>
          <DescriptionBox>
            Além de #1 no coração dos aventureiros, o Jeep
            Compass é também um grande colecionador de prêmios:
            consagrado
            <span> “Melhor Compra do Ano”</span> na categoria SUV
            Premium e tetracampeão de
            <span> “Melhor Valor de Revenda”</span> em SUV
            Compacto, o veículo também é o vencedor dos prêmios
            Carsughi e UOL Carro na categoria SUV Médio. Como se
            tudo isso não bastasse o Jeep Compass foi a estrela
            no Comparativo da Motor1 de{' '}
            <span> “Hits do Momento”</span> em todos os 4
            quesitos: design, sofisticação, performance e
            tecnologia.
          </DescriptionBox>
        </Description>
      </MiddleContent>
    </Section>
  );
};
export default Awards;
