"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

/**
 * Captura $pageview a cada navegação do App Router. Sem isso o PostHog só
 * vê o primeiro carregamento. `useSearchParams` precisa de Suspense no
 * Next 16.
 */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;
    posthog.capture("$pageview", {
      $current_url:
        typeof window !== "undefined"
          ? `${window.location.origin}${url}`
          : url,
      $pathname: pathname,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}

export default PostHogPageView;
