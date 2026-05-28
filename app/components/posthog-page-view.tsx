"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

/**
 * Captura $pageview a cada navegação do App Router.
 *
 * Evitamos `useSearchParams()` (que força a página inteira a sair de
 * static prerender e cria fallback 404 chrome no HTML inicial) e lemos
 * `window.location.search` direto no efeito — só roda no client, então
 * sem custo SSR e mantém o build 100% estático.
 */
export function PostHogPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;
    const search = window.location.search || "";
    const url = `${pathname}${search}`;
    posthog.capture("$pageview", {
      $current_url: `${window.location.origin}${url}`,
      $pathname: pathname,
    });
  }, [pathname]);

  return null;
}

export default PostHogPageView;
