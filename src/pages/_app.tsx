import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { appWithTranslation } from "next-i18next";
import MainLayout from "../layouts";
import "../styles/globals.css";

const theme = createTheme({});

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async ({ ctx }: { ctx: any }) => {
//   const { req } = ctx;
//   const cookies = cookie.parse(req?.headers?.cookie || "");

//   return {
//     cookies,
//   };
// };

export default appWithTranslation(MyApp);
