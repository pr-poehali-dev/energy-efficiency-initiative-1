import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"
import { useState } from "react"

type TabKey = "regulations" | "protocols" | "calendar"

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "regulations", label: "Регламенты", icon: "FileText" },
  { key: "protocols", label: "Протоколы", icon: "ClipboardList" },
  { key: "calendar", label: "Календарный план", icon: "CalendarDays" },
]

const DATA: Record<TabKey, { title: string; meta: string }[]> = {
  regulations: [
    { title: "Регламент первенства области по плаванию", meta: "PDF · действует" },
    { title: "Регламент турнира по лёгкой атлетике", meta: "PDF · действует" },
    { title: "Положение о спортивных соревнованиях 2026", meta: "PDF · действует" },
  ],
  protocols: [
    { title: "Протокол первенства по плаванию", meta: "PDF · 15.06.2026" },
    { title: "Протокол открытого турнира по гимнастике", meta: "PDF · 30.05.2026" },
    { title: "Итоговый протокол весеннего кубка", meta: "PDF · 12.05.2026" },
  ],
  calendar: [
    { title: "Кубок области по плаванию", meta: "10–12 июля 2026" },
    { title: "Первенство по лёгкой атлетике", meta: "5–8 августа 2026" },
    { title: "Открытый турнир по гимнастике", meta: "20–22 сентября 2026" },
  ],
}

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [active, setActive] = useState<TabKey>("regulations")

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Соревнования
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Документы и календарь стартов</p>
        </div>

        <div
          className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 md:gap-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs backdrop-blur-md transition-all md:text-sm ${
                active === tab.key
                  ? "border-foreground/40 bg-foreground/20 text-foreground"
                  : "border-foreground/15 bg-foreground/10 text-foreground/70 hover:bg-foreground/15"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {DATA[active].map((item, i) => (
            <div
              key={`${active}-${i}`}
              className="group flex flex-col justify-between rounded-xl border border-foreground/15 bg-foreground/10 p-5 backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/15"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-light leading-snug text-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                <Icon name="Download" size={14} />
                {item.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
