import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function AboutSection({ scrollToSection: _scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const athletes = [
    { name: "Анна Соколова", sport: "Лёгкая атлетика", rank: "МСМК" },
    { name: "Дмитрий Орлов", sport: "Плавание", rank: "ЗМС" },
    { name: "Екатерина Волкова", sport: "Спортивная гимнастика", rank: "МС" },
  ]

  const coaches = [
    { name: "Сергей Зайцев", role: "Главный тренер", sport: "Лёгкая атлетика" },
    { name: "Ольга Морозова", role: "Тренер высшей категории", sport: "Плавание" },
    { name: "Игорь Лебедев", role: "Врач спортивной медицины", sport: "Восстановление" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Спортсмены и специалисты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Команда центра «Олимп»</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Спортсмены */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Icon name="Trophy" size={20} className="text-foreground/70" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">Наши спортсмены</span>
            </div>
            <div className="space-y-4">
              {athletes.map((a, i) => {
                const cls = !isVisible ? "-translate-x-16 opacity-0" : "translate-x-0 opacity-100"
                return (
                  <div
                    key={i}
                    className={`border-l border-foreground/30 pl-4 transition-all duration-700 md:pl-6 ${cls}`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <div className="font-sans text-xl font-light text-foreground md:text-2xl">{a.name}</div>
                    <div className="font-mono text-xs text-foreground/60">
                      {a.sport} · {a.rank}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Специалисты */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Icon name="Users" size={20} className="text-foreground/70" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">Наши специалисты</span>
            </div>
            <div className="space-y-4">
              {coaches.map((c, i) => {
                const cls = !isVisible ? "translate-x-16 opacity-0" : "translate-x-0 opacity-100"
                return (
                  <div
                    key={i}
                    className={`border-l border-foreground/30 pl-4 transition-all duration-700 md:pl-6 ${cls}`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <div className="font-sans text-xl font-light text-foreground md:text-2xl">{c.name}</div>
                    <div className="font-mono text-xs text-foreground/60">
                      {c.role} · {c.sport}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
