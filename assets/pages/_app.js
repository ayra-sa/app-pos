import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useSelector, useStore } from "react-redux";
import PageChange from "components/PageChange/PageChange.js";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/finance-pinjaman.css";
import { wrapper } from "global-states";
import { Poppins } from "next/font/google";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  const globalReducer = useSelector((state) => state.globalReducer);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (globalReducer.isAuthenticated === false && accessToken === null) {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalReducer.isAuthenticated]);

  return (
    <>
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>KODIKA</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT_UR9sBwczYXobD7gSbnuMclQfyQ4aAI"></script>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </Head>

        <PersistGate
          persistor={store.__persistor}
          loading={<div>Loading...</div>}
        >
          <main className={poppins.className}>
            <Component {...pageProps} token={globalReducer.token} />
          </main>
        </PersistGate>
      </React.Fragment>
    </>
  );
}

export default wrapper.withRedux(MyApp);

// export default class MyApp extends App {
//   componentDidMount() {
//     let comment = document.createComment(`

// =========================================================
// * Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
// =========================================================

// * Product Page: https://www.creative-tim.com/product/notus-nextjs
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

// * Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// `);
//     document.insertBefore(comment, document.documentElement);
//   }
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;

//     const Layout = Component.layout || (({ children }) => <>{children}</>);

//     return (
//       <React.Fragment>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//           <title>Notus NextJS by Creative Tim</title>
//           <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
//         </Head>

//           <PersistGate
//           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//           // @ts-ignore
//           persistor={store.__persistor}
//           loading={<div>Loading...</div>}
//         >
//           <ContextProviderCollection>
//             <Layout>
//             <Component {...pageProps} />
//             </Layout>
//           </ContextProviderCollection>
//         </PersistGate>
//       </React.Fragment>
//     );
//   }
// }
