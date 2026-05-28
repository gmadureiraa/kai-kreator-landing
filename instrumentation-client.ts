import posthog from "posthog-js";

// PostHog "Kaleidos Group" — único projeto cobre todas as landings via filter
// $host (madureira, viral, lab, kreator…). Token público, OK ficar em client.
// Proxy via /ingest evita adblock e mantém CORS limpo.
const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (token) {
  posthog.init(token, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    capture_performance: { web_vitals: true, network_timing: true },
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "[data-ph-mask]",
    },
    debug: process.env.NODE_ENV === "development",
    loaded: (ph) => {
      ph.register({ site: "kreator" });
    },
  });
}
