export const trackPage = (url: string) => {
  window.gtag("config", "GA_MEASUREMENT_ID", {
    page_path: url,
  });
};
