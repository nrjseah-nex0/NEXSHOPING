export const runAdCampaign = async (data: any) => {
  return fetch("/api/ads", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
