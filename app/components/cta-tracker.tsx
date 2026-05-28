"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

/**
 * Delegate global pra capturar cliques em CTAs marcados com
 * `data-cta="<id>"`. Mantém ergonomia simples — basta adicionar o
 * atributo no <a>/<button>; sem precisar embrulhar componente.
 *
 * Eventos: `cta_click` com { cta, href, location, label }.
 */
export function CtaTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-cta]");
      if (!el) return;

      const cta = el.dataset.cta || "unknown";
      const href = (el as HTMLAnchorElement).href || null;
      const label = (el.textContent || "").trim().slice(0, 80);

      posthog.capture("cta_click", {
        cta,
        href,
        label,
        location: el.dataset.ctaLocation || null,
      });
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}

export default CtaTracker;
