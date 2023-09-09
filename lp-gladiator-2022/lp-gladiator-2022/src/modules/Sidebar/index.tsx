import React, {useState} from "react";
import { useRouter } from "next/router";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
// import Image from "next/image";

import { LinkMenu, Button, Image } from "../../components";

import { dataLayer } from "../../libs/gtm";
import { getPath, slugify } from "../../utils";
import { SidebarProps, itemMenuProps } from "../../interfaces";

import { menuData } from "../../api";

import logo from "../../assets/logo.png";

import styles from "./styles.module.scss";

const Sidebar = ({
  swiperAbout,
  toggleSidebar,
  setToggleSidebar,
  setAccordionAbout,
  setShowModalForm,
}: SidebarProps) => {
  const router = useRouter();
  const path = router.query.slug;
  const [menuActive, setMenuActive] = useState<string>('');

  const handleChangeSection = (path: string) => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      elementCategory: "link",
      interactionType: "clique",
      pageSection: "header",
      pageSubsection: "menu",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div className={`${styles.sidebar} ${toggleSidebar && styles.open}`}>
      <div
        className={styles.overlay}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        &nbsp;
      </div>
      <div className={styles.logo} onClick={async () => {
      }}>
        <a href="https://www.jeep.com.br?utm_source=receptiva_gladiator&utm_medium=menu_lateral_section&utam_campaign=logo_jeep" target="_blank">
          <Image src={logo.src} alt="Jeep" />
        </a>
      </div>
      <ul className={styles.listMenu}>
      <li>
          <LinkMenu
            active={router.asPath === "/"}
            onClick={async () => {
              handleDataLayer({
                element: slugify("novo-jeep-gladiator"),
              });
              handleChangeSection("destaques");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            NOVO JEEP GLADIATOR
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("trail-rated")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("trail rated"),
              });
              handleChangeSection("trailRated");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            TRAIL RATED
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("rubicon")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("rubicon"),
              });
              handleChangeSection("rubicon");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            RUBICON
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={!!path?.includes("galeria")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("galeria"),
              });
              handleChangeSection("galeria");
              setToggleSidebar(!toggleSidebar);
            }}
          >
            Galeria
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("performance")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Performance"),
              });
              setMenuActive('performance');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(0);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("performance");
            }}
          >
            Performance
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("versatilidade")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("versatilidade"),
              });
              setMenuActive('versatilidade');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(2);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("versatilidade");
            }}
          >
            Versatilidade
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("capacidade-off-road")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Capacidade Off Road"),
              });
              handleChangeSection("sobre");
              setMenuActive('capacidade-off-road');
              swiperAbout?.slideTo(9);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("capacidade-off-road");
            }}
          >
            Capacidade Off Road
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("tecnologias")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Tecnologias"),
              });
              setMenuActive('tecnologias');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(15);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("tecnologias");
            }}
          >
            Tecnologias
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("conforto")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Conforto"),
              });
              setMenuActive('conforto');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(20);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("conforto");
            }}
          >
            Conforto
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("seguranca")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Segurança"),
              });
              setMenuActive('seguranca');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(23);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("seguranca");
            }}
          >
            Segurança
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("acessorios")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Acessórios"),
              });
              setMenuActive('acessorios');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(28);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("acessorios");
            }}
          >
            Acessórios
          </LinkMenu>
        </li>
        <li>
          <LinkMenu
            active={menuActive.includes("servicos-garantia")}
            onClick={async () => {
              handleDataLayer({
                element: slugify("Serviços e Garantia"),
              });
              setMenuActive('servicos-garantia');
              handleChangeSection("sobre");
              swiperAbout?.slideTo(35);
              setToggleSidebar(!toggleSidebar);
              setAccordionAbout("servicos-garantia");
            }}
          >
            Serviços e Garantia
          </LinkMenu>
        </li>
      </ul>
      <ul className={styles.listMenu}>
        {menuData &&
          menuData.map((item: itemMenuProps, key: number) => (
            <li
              onClick={() => {
                handleDataLayer({
                  element: slugify(item.title),
                  elementCategory: "cta",
                });
                if (item.form) {
                  setShowModalForm(true);
                  setToggleSidebar(!toggleSidebar);
                }
              }}
              key={`sidebar-cta-${key}`}
            >
              <Button to={item.link} target="_blank">
                {item.title}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
