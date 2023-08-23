import { i18n } from "next-i18next";
import queryString from "query-string";

import { createService } from "./axios";
import { RequestArgumentExample } from "@/types";

const baseUrl: string = process.env.BASE_URL || "";
const instance = createService(baseUrl);

export const getExample = async ({
  type,
  page,
  pageSize,
  slug,
  locale,
}: RequestArgumentExample) => {
  const data = queryString.stringify({
    "populate[previewImage][fields][0]": "url",
    "populate[previewBanner][fields][0]": "url",
    "filters[type][$eq]": type,
    "filters[slug][$ne]": slug,
    "pagination[page]": page || 1,
    "pagination[pageSize]": pageSize || 6,
    locale,
  });
  const response = await instance.get(`/api/news?${data}`);
  return response?.data;
};
