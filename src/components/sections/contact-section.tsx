import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const DOCUMENTS = [
  { title: "Устав ГАУ ВО ЦСП «Олимп»", meta: "PDF" },
  { title: "Государственное задание на 2026 год", meta: "PDF" },
  { title: "План финансово-хозяйственной деятельности", meta: "PDF" },
  { title: "Антидопинговые правила и положения", meta: "PDF" },
]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16 lg:gap-24">
          {/* Контакты */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Контакты
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ ГАУ ВО ЦСП «Олимп»</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:info@csp-olimp.ru"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Mail" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  info@csp-olimp.ru
                </p>
              </a>

              <a
                href="tel:+74732000000"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +7 (473) 200-00-00
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">г. Воронеж, ул. Спортивная, 1</p>
              </div>
            </div>
          </div>

          {/* Документы */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 flex items-center gap-3 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Icon name="FolderOpen" size={20} className="text-foreground/70" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">Документы</span>
            </div>

            <div className="space-y-3">
              {DOCUMENTS.map((doc, i) => (
                <a
                  key={i}
                  href="#"
                  className={`group flex items-center justify-between rounded-xl border border-foreground/15 bg-foreground/10 p-4 backdrop-blur-md transition-all duration-700 hover:border-foreground/30 hover:bg-foreground/15 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <span className="font-sans text-sm font-light text-foreground md:text-base">{doc.title}</span>
                  <span className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                    {doc.meta}
                    <Icon name="Download" size={16} className="transition-transform group-hover:translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
