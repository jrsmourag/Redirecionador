import Link from "next/link";
import { BookOpen, Languages, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const systems = [
  {
    title: "Criador de Livros",
    description: "Crie livros completos com auxílio de inteligência artificial.",
    url: "https://siskdp-criador.up.railway.app",
    domain: "siskdp-criador.up.railway.app",
    icon: BookOpen,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    glowColor: "hover:shadow-violet-500/10",
  },
  {
    title: "Tradutor de Livros",
    description: "Traduza seus livros para múltiplos idiomas automaticamente.",
    url: "https://siskdp-tradutor.up.railway.app",
    domain: "siskdp-tradutor.up.railway.app",
    icon: Languages,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    glowColor: "hover:shadow-emerald-500/10",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-violet-950/30 via-background to-emerald-950/20" />

      {/* Dot pattern overlay */}
      <div className="pointer-events-none fixed inset-0 bg-dots opacity-60" />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center gap-12 px-6 py-16 w-full max-w-5xl">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Sis<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">KDP</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Selecione um dos sistemas abaixo para começar.
          </p>
        </header>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <Link
                key={system.title}
                href={system.url}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              >
                <Card
                  className={`
                    relative overflow-hidden transition-all duration-300 ease-out
                    border border-border/60
                    ${system.borderHover}
                    hover:shadow-2xl ${system.glowColor}
                    group-active:scale-[0.98]
                    cursor-pointer h-full
                  `}
                >
                  {/* Card gradient background */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 ${system.iconColor} transition-colors duration-300 group-hover:bg-muted`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-2xl mt-2 font-semibold tracking-tight">
                      {system.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {system.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <code className="text-xs text-muted-foreground/70 font-mono bg-muted/30 px-2 py-1 rounded-md">
                      {system.domain}
                    </code>
                  </CardContent>

                  <CardFooter className="relative">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Online
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground/50 mt-4">
          SisKDP &copy; {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
