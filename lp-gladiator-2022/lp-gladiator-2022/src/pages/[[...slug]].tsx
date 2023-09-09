import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Sidebar,
  Gallery,
  Footer,
  Highlight,
  TrailRated,
  Rubicon,
  About
} from "../modules";
import { ButtonWhatsapp, StickerFooter, Lgpd } from "../components";
import { getQueryParams } from "../utils";
import styles from "../styles/Home.module.scss";
import YoutubeBanner from "../modules/YoutubeBanner";

const Home: NextPage = () => {
  const router = useRouter();

  const [swiperAbout, setSwiperAbout] = useState<any>();
  const [accordionAbout, setAccordionAbout] = useState<string>("");
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [aboutActive, setAboutActive] = useState<string[]>([]);
  const [lastRouter, setLastRouter] = useState("");
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());
  const [showStickerFooter, setShowStickerFooter] = useState<boolean>(false);

  // const mapSection: any = {
  //   destaques: "highlight",
  //   "trail-rated": "trailRated",
  //   rubicon: "rubicon",
  //   galeria: "galeria",
  //   performance: "sobre",
  //   versatilidade: "sobre",
  //   "capacidade-off-road": "sobre",
  //   tecnologias: "sobre",
  //   conforto: "sobre",
  //   seguranca: "sobre",
  //   acessorios: "sobre",
  //   "servicos-garantia": "sobre",
  // };

  // useEffect(() => {
  //   let pathname = getPathName();
  //   let section = mapSection[pathname[0]];
  //   if (pathname[0].indexOf("agende") > -1) {
  //     setShowModalForm(true);
  //   }
  //   if (section === "sobre") {
  //     setAboutActive(pathname);
  //   }
  //   handleChangeSection(section);
  // }, []);

  // useEffect(() => {
  //   if (showModalForm) {
  //     setLastRouter(router.asPath);
  //     replaceUrl("/agende", queryParams, router);
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     replaceUrl(lastRouter, queryParams, router);
  //     document.body.style.overflow = "auto";
  //   }
  // }, [showModalForm]);

  return (
    <>
      <Head>
        <title>Novo Jeep Gladiator: A picape com DNA Jeep</title>
      </Head>
      <div className={styles.wrapperMain}>
        <Sidebar
          swiperAbout={swiperAbout}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          setAccordionAbout={setAccordionAbout}
          setShowModalForm={setShowModalForm}
        />
        <div className={styles.containerSection}>
            <Highlight
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
              setShowStickerFooter={setShowStickerFooter}
            />
          <TrailRated 
            showModalForm={showModalForm}
            setShowModalForm={setShowModalForm}
          />
          <Rubicon showModalForm={showModalForm}
            setShowModalForm={setShowModalForm} />
          <Gallery />
          <About
            setSwiperAbout={setSwiperAbout}
            accordionAbout={accordionAbout}
            setShowModalForm={setShowModalForm}
            aboutActive={aboutActive}
          />
          <YoutubeBanner/>
          <Footer />
          <ButtonWhatsapp showStickerFooter={showStickerFooter} />
          <StickerFooter showStickerFooter={showStickerFooter} />
          <Lgpd />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({params}: any) {
  return {
    props: {
      slug: params.slug || false
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: false} },
      { params: { slug: ['trail-rated', 'primeira-picape-trailrated']} },
      { params: { slug: ['trail-rated', 'tru-lok']} },
      { params: { slug: ['trail-rated', 'protecao']} },
      { params: { slug: ['trail-rated', 'trailcam']} },
      { params: { slug: ['trail-rated', 'barra-eletronica']} },
      { params: { slug: ['rubicon']} },
      { params: { slug: ['galeria']} },
      { params: { slug: ['galeria', 'image-01']} },
      { params: { slug: ['galeria', 'image-02']} },
      { params: { slug: ['galeria', 'image-03']} },
      { params: { slug: ['galeria', 'image-04']} },
      { params: { slug: ['galeria', 'image-05']} },
      { params: { slug: ['galeria', 'image-06']} },
      { params: { slug: ['galeria', 'image-07']} },
      { params: { slug: ['galeria', 'image-08']} },
      { params: { slug: ['performance', 'novo-36l-v6']} },
      { params: { slug: ['performance', 'cambio-automatico']} },
      { params: { slug: ['versatilidade', 'capacidade-carga']} },
      { params: { slug: ['versatilidade', 'nada-pra-tras']} },
      { params: { slug: ['versatilidade', 'protecao-carga']} },
      { params: { slug: ['versatilidade', 'maximize-carga']} },
      { params: { slug: ['versatilidade', 'energia-aventura']} },
      // { params: { slug: ['versatilidade', 'porta-mutifuncional']} },
      { params: { slug: ['versatilidade', 'seguranca-comodidade']} },
      { params: { slug: ['versatilidade', 'feita-lavar']} },
      { params: { slug: ['capacidade-off-road', 'tracao-rock-trac']} },
      { params: { slug: ['capacidade-off-road', 'eixos-dana-44']} },
      { params: { slug: ['capacidade-off-road', 'off-road-pages']} },
      { params: { slug: ['capacidade-off-road', 'protetores']} },
      { params: { slug: ['capacidade-off-road', 'reboque']} },
      // { params: { slug: ['capacidade-off-road', 'pneus-uso-misto']} },
      { params: { slug: ['capacidade-off-road', 'sistema-off-road-plus']} },
      { params: { slug: ['tecnologias', 'central-multimidia']} },
      { params: { slug: ['tecnologias', 'som-premium-alpine']} },
      { params: { slug: ['tecnologias', 'caixa-som-portatil']} },
      { params: { slug: ['tecnologias', 'piloto-automatico']} },
      { params: { slug: ['tecnologias', 'park-assist']} },
      { params: { slug: ['tecnologias', 'quadro-instrumentos']} },
      { params: { slug: ['conforto', 'ar-condicionado']} },
      { params: { slug: ['conforto', 'remote-start']} },
      { params: { slug: ['conforto', 'monitoramento-pneus']} },
      { params: { slug: ['seguranca', 'aviso-colisao']} },
      { params: { slug: ['seguranca', 'monitoramento-ponto-cegos']} },
      { params: { slug: ['seguranca', 'detector-trafego-cruzado']} },
      { params: { slug: ['seguranca', 'airbags']} },
      { params: { slug: ['seguranca', 'assistente-partida']} },
      // { params: { slug: ['seguranca', 'controle-eletronico']} },
      { params: { slug: ['acessorios', 'acessorios-disponiveis']} },
      { params: { slug: ['acessorios', 'tapetes-bordas-elevadas']} },
      { params: { slug: ['acessorios', 'estribo-lateral']} },
      { params: { slug: ['acessorios', 'armazenagem-cacamba']} },
      { params: { slug: ['acessorios', 'portas-tubulares']} },
      { params: { slug: ['acessorios', 'grade-frontal-preta']} },
      { params: { slug: ['acessorios', 'suporte-bicicleta']} },
      { params: { slug: ['servicos-garantia', 'pacotes-manutencao']} },
      { params: { slug: ['servicos-garantia', 'garantia-adicional']} },
    ],
    fallback: true
  };
}

export default Home;
