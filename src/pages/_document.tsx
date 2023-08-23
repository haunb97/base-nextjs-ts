/* eslint-disable react/no-danger */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { randomBytes } from "crypto";
import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";

function createEmotionCache() {
  return createCache({ key: "css" });
}

export default class MyDocument extends Document {
  render() {
    const nonce = randomBytes(128).toString("base64");
    const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`;
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon.png"
          />
          <link rel="icon" href="/favicon/favicon.ico" /> */}
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <meta name="keywords" content="t'order" />
          <meta name="author" content="t'order" />
          <meta name="copyright" content="t'order" />
          <meta name="resource-type" content="Document" />
          <meta name="distribution" content="Global" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, user-scalable=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // const originalRenderPage = ctx.renderPage;

  // const cache = createEmotionCache();
  // const { extractCriticalToChunks } = createEmotionServer(cache);

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) => (props) =>
  //       (
  //         <CacheProvider value={cache}>
  //           <App {...props} />
  //         </CacheProvider>
  //       ),
  //   });

  const initialProps = await Document.getInitialProps(ctx);

  // const emotionStyles = extractCriticalToChunks(initialProps.html);
  // const emotionStyleTags = emotionStyles?.styles?.map((style) => (
  // <style
  //   data-emotion={`${style.key} ${style.ids.join(" ")}`}
  //   key={style.key}
  //   // eslint-disable-next-line react/no-danger
  //   dangerouslySetInnerHTML={{ __html: style.css }}
  // />;
  // ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)],
  };
};
