export const trackEvent = async (event: string, data?: any) => {
  try {
    await fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({ event, data }),
    });
  } catch (err) {
    console.error("Tracking error:", err);
  }
};
