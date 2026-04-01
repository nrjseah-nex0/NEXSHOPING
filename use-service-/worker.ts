import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function useServiceWorker() {
  const toastShown = useRef(false);
export default {
  async fetch(request: Request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/api/track") {
      return new Response(JSON.stringify({
        message: "Tracking event saved"
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const showUpdateToast = () => {
      if (toastShown.current) return;
      toastShown.current = true;

      toast("يتوفر إصدار جديد من التطبيق!", {
        duration: Infinity,
        action: {
          label: "تحديث الآن",
          onClick: () => window.location.reload(),
        },
      });
    };

    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);

        if (registration.waiting) {
          showUpdateToast();
          return;
        }

        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              showUpdateToast();
            }
          });
        });
      })
      .catch((err) => console.log("Service Worker registration failed:", err));
  }, []);
}
