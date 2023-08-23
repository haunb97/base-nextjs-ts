/* eslint-disable react/display-name */
import { forwardRef } from "react";

import { Box } from "@mui/material";
import { NextSeo } from "next-seo";

const Page = forwardRef(
  (
    {
      children,
      title = "",
      meta,
      metaDescription,
      ogImage = `${
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : ""
      }/images/thumbnail.png`,
      ogImageAlt = "t'order",
      ...other
    }: any,
    ref
  ) => (
    <>
      <NextSeo
        title={title}
        themeColor={"black"}
        description={metaDescription}
        canonical={`${
          typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : ""
        }${
          typeof window !== "undefined" && window.location.pathname
            ? window.location.pathname
            : ""
        }`}
        openGraph={{
          type: "website",
          url: `${
            typeof window !== "undefined" && window.location.origin
              ? window.location.origin
              : ""
          }${
            typeof window !== "undefined" && window.location.pathname
              ? window.location.pathname
              : ""
          }`,
          title,
          description: metaDescription,
          images: [
            {
              url: ogImage,
              alt: ogImageAlt,
            },
          ],
          site_name: "CMC Cloud",
        }}
      />

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
