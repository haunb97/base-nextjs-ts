export interface RequestArgumentExample {
  type: string;
  sort: "esc" | "desc";
  page: number;
  pageSize: number;
  slug: string;
  locale: "en" | "vi";
}
