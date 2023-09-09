import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { Cta } from '../components/Cta'
import { Menu } from '../components/Menu/MainMenu'
import { TClickMenu } from '../components/Menu/Menu.types'
import { TRoutes, useAppStore } from '../stores/app.store'
import { scrollTo } from '../utils/Routing.Helpers'
import { pushEvent } from '../utils/Tracking.Helpers'
import { baseURL, getMetaData, getMetaTitle } from '../utils/Seo.MetaComponents'
// @ts-ignore
import { useSection6Store } from '../sections/Section6/useSection6Store'
// @ts-ignore
import { Footer } from '../sections/Footer'
// @ts-ignore
import { Section1 } from '../sections/Section1'
// @ts-ignore
import { Section2 } from '../sections/Section2'
// @ts-ignore
import { Section3 } from '../sections/Section3'
// @ts-ignore
import { Section4 } from '../sections/Section4'
// @ts-ignore
import { Section5 } from '../sections/Section5'
// @ts-ignore
import { Section6 } from '../sections/Section6'

export default function SelectedSection({
  page,
  currentMetaProps,
  currentTitle,
  ...props
}) {
  const router = useRouter()
  const { setSelectedTabById } = useSection6Store()
  const {
    setMenuOpened,
    menuOpened,
    setCurrentSection,
    setCurrentVersao,
    setCanChangeRoute,
    currentVersao,
  } = useAppStore()

  const onClickMenu: TClickMenu = (menu, subMenuOf) => {
    setCanChangeRoute(false)
    if (menuOpened) setMenuOpened(false, false)
    pushEvent({
      event: 'interaction',
      path:
        window.location.pathname === '/' ? 'home' : window.location.pathname,
      element: menu.title,
      elementCategory: 'link',
      pageSection: 'conteudo',
      pageSubsection: 'menu',
      interactionType: 'clique',
    })
    if (!subMenuOf) {
      window.history.pushState(
        null,
        menu.title,
        menu.id === 'jeep-commander' || menu.id === '/'
          ? '/'
          : menu.id === 'versoes'
          ? `#${currentVersao}`
          : `#${menu.id}`,
      )
      menu.id === 'jeep-commander' || menu.id === '/'
        ? window?.scrollTo({ top: 0, behavior: 'smooth' })
        : scrollTo(
            global.document.querySelector<HTMLDivElement>(
              `#${menu.id?.replace('#', '')}`,
            ),
          )
      setCurrentSection(
        (menu.id === 'versoes' ? currentVersao : menu.id) as TRoutes,
      )
    } else {
      window.history.pushState(
        null,
        menu.title,
        `#${subMenuOf.id?.replace('#', '')}-${menu.id?.replace('#', '')}`,
      )
      scrollTo(
        global.document.querySelector<HTMLDivElement>(
          `#${menu.id?.replace('#', '')}`,
        ),
      )
      setSelectedTabById(menu.id)
      setCurrentSection(`${subMenuOf.id}-${menu.id}` as TRoutes)
    }
    setTimeout(() => setCanChangeRoute(true), 1000)
  }

  useEffect(() => {
    setCurrentSection(router.query.selectedSection as TRoutes)
  }, [])

  useEffect(() => {
    if (router.asPath !== '/') {
      let scrollId = router.asPath.replace('/', '')

      if (
        [
          'limited-t270-turbo-flex',
          'overland-t270-turbo-flex',
          'limited-td380-4x4-turbo-diesel',
          'overland-td380-4x4-turbo-diesel',
        ].includes(scrollId)
      ) {
        setCurrentVersao(scrollId)
        scrollId = 'versoes'
      }
      let subMenu = ''
      let subMenuExtended = ''

      if (scrollId.startsWith('commander')) {
        ;[scrollId, subMenu, subMenuExtended] = scrollId.split('-')

        setTimeout(
          () =>
            scrollTo(
              global.document.querySelector<HTMLDivElement>(
                `#${scrollId?.replace('#', '')}`,
              ),
            ),
          100,
        )

        if (subMenuExtended) {
          subMenu = `${subMenu}-${subMenuExtended}`
        }

        setSelectedTabById(subMenu)
      } else {
        setTimeout(
          () =>
            scrollTo(
              global.document.querySelector<HTMLDivElement>(
                `#${scrollId?.replace('#', '')}`,
              ),
            ),
          100,
        )
      }
    }
  }, [])

  return (
    <div className="wrapper">
      <Cta
        onClick={() => {
          pushEvent({
            event: 'interaction',
            element: 'compre-o-seu',
            elementCategory: 'cta',
            pageSection: 'conteudo',
            pageSubsection: 'float',
            interactionType: 'clique',
          })
        }}
        timeoutInMs={3000}
      />
      <Head>
        <title>{currentTitle}</title>
        {currentMetaProps.map((currentMeta, idx) => {
          return <meta key={idx} {...currentMeta} />
        })}
        <meta property="og:url" content={`${baseURL}${page}`}></meta>
      </Head>
      <div className="layout">
        <Menu onClickItem={onClickMenu} />
        <div className="content-wrapper">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const currentMetaProps = getMetaData(params.selectedSection as TRoutes)
  const currentTitle = getMetaTitle(params.selectedSection as TRoutes)

  return {
    props: {
      page: params.selectedSection,
      currentMetaProps,
      currentTitle,
    },
  }
}

export async function getStaticPaths() {
  const paths = [
    'jeep-commander',
    'reserva',
    'versatilidade',
    'limited-t270-turbo-flex',
    'overland-t270-turbo-flex',
    'limited-td380-4x4-turbo-diesel',
    'overland-td380-4x4-turbo-diesel',
    'fotos',
    'commander',
    'sofisticacao',
    'design',
    'performance',
    'dna',
    'conforto',
    'tecnologia',
    'tecnologia-autonomas',
    'seguranca',
    'acessorios',
    'servicos',
  ]

  const staticPaths = paths.map(path => {
    return {
      params: { selectedSection: path },
    }
  })

  return {
    paths: staticPaths,
    fallback: false,
  }
}
