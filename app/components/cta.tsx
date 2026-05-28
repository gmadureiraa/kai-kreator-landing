const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20uma%20demo%20do%20KAI%20Kreator&body=Oi%20Kaleidos%2C%0A%0AQuero%20ver%20o%20KAI%20Kreator%20por%20dentro.%0A%0AEmpresa%3A%20%0AQuanto%20conteudo%20produzem%20por%20semana%3A%20%0AMaior%20gargalo%20hoje%3A%20";

export function Cta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[8px] border border-line bg-[linear-gradient(135deg,#fff_0%,#f6f9ff_48%,#fff_100%)] px-6 py-12 text-center shadow-[0_30px_100px_rgba(22,38,66,0.1)] sm:px-10 lg:py-16">
          <div
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--blue),var(--green),var(--coral),transparent)]"
            aria-hidden
          />
          <div className="section-eyebrow">Proximo ciclo</div>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Coloque sua operacao editorial em modo fabrica.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Se o conteudo ja e parte central do seu negocio, o KAI pode virar o
            lugar onde pauta, producao, aprovacao e aprendizado finalmente se
            encontram.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_HREF}
              aria-label="Marcar uma conversa por email com a Kaleidos"
              className="button-primary"
              data-cta="cta_final_primary_demo"
              data-cta-location="cta-final"
            >
              Marcar uma conversa
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="mailto:ola@kaleidos.com.br"
              aria-label="Enviar email para ola@kaleidos.com.br"
              className="button-secondary"
              data-cta="cta_final_secondary_email"
              data-cta-location="cta-final"
            >
              ola@kaleidos.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
