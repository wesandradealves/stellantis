import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Jeep Gladiator. A picape com o DNA Jeep" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#0E0E0E" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gladiator.jeep.com.br/" />
        <meta property="og:title" content="Novo Jeep Gladiator: A picape com DNA Jeep" />
        <meta property="og:description" content="Encontre sua próxima aventura com o Novo Jeep Gladiator, única picape com o selo Trailrated. Experimente força e robustez com a essência do Open-air." />
        <meta property="og:image" content="https://gladiator2022.umstudio.com.br/assets/images/img-share.png" />
          
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gladiator.jeep.com.br/" />
        <meta property="twitter:title" content="Novo Jeep Gladiator: A picape com DNA Jeep" />
        <meta property="twitter:description" content="Encontre sua próxima aventura com o Novo Jeep Gladiator, única picape com o selo Trailrated. Experimente força e robustez com a essência do Open-air." />
        <meta property="twitter:image" content="https://gladiator2022.umstudio.com.br/assets/images/img-share.png" />
      
        <script
            defer
            src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
