"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import GameplaySection from "@/components/gameplay-section"
import TestimonialCard from "@/components/testimonial-card"
import DownloadSection from "@/components/download-section"
import GameButton from "@/components/game-button"
import { initGSAP } from "@/lib/gsap-utils"
import StarBackground from "@/components/star-background"
import PlantCharacter from "@/components/plant-character"
import CharacterGallery from "@/components/character-gallery"
import Sparkle from "@/components/sparkle"

type PlantType = "sprout" | "tulip" | "sunflower" | "crystal" | "mushroom"

export default function LandingPage() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const isMusicPlaying = useRef(false)

  useEffect(() => {
    // Initialize GSAP animations
    initGSAP()

    // Preload sound effects
    const buttonSound = new Audio("/button-click.mp3")
    buttonSound.preload = "auto"

    // Add cursor trail effect
    const cursorTrail = document.createElement("div")
    cursorTrail.className = "fixed w-8 h-8 pointer-events-none z-50 opacity-0 transition-opacity duration-300"
    cursorTrail.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          fill="#4ade80" stroke="#fff" strokeWidth="1" />
      </svg>
    `
    document.body.appendChild(cursorTrail)

    const updateCursorTrail = (e: MouseEvent) => {
      cursorTrail.style.opacity = "1"
      cursorTrail.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) rotate(${Math.random() * 30 - 15}deg) scale(${0.8 + Math.random() * 0.4})`

      setTimeout(() => {
        cursorTrail.style.opacity = "0"
      }, 500)
    }

    document.addEventListener("mousemove", updateCursorTrail)

    return () => {
      document.removeEventListener("mousemove", updateCursorTrail)
      if (cursorTrail.parentNode) {
        document.body.removeChild(cursorTrail)
      }
    }
  }, [])

  const toggleBackgroundMusic = () => {
    if (!audioRef.current) return

    if (isMusicPlaying.current) {
      audioRef.current.pause()
      isMusicPlaying.current = false
    } else {
      audioRef.current.play().catch(() => {})
      isMusicPlaying.current = true
    }
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden" id="smooth-wrapper">
      <audio ref={audioRef} loop src="/background-music.mp3" />
      <StarBackground />

      <div id="smooth-content">
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <PlantCharacter type="sprout" size="sm" withPot={false} />
              </div>
              <span className="text-xl font-game text-kawaii-sprout glow-text">Kepler-pop</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-game hover:text-kawaii-sprout transition-colors">
                Features
              </Link>
              <Link href="#characters" className="text-sm font-game hover:text-kawaii-sprout transition-colors">
                Characters
              </Link>
              <Link href="#gameplay" className="text-sm font-game hover:text-kawaii-sprout transition-colors">
                Gameplay
              </Link>
              <Link href="#download" className="text-sm font-game hover:text-kawaii-sprout transition-colors">
                Download
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleBackgroundMusic}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                aria-label="Toggle music"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </button>
              <GameButton size="md" className="hidden md:flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                </svg>
                다운로드
              </GameButton>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-b from-background to-[#101340] py-20 md:py-32">
            <div className="container relative z-10">
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <h1 className="text-6xl md:text-8xl font-bold font-game">
                    <span className="gradient-text-kepler">KEPLER</span>
                    <br />
                    <span className="gradient-text-pop">POP</span>
                  </h1>
                  <Sparkle className="absolute top-0 right-0" size="lg" />
                  <Sparkle className="absolute top-1/4 left-0" size="md" delay={0.5} />
                  <Sparkle className="absolute bottom-0 right-1/4" size="sm" delay={1} />
                </div>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl gsap-reveal">
                  Explore the cosmic wonders of Kepler as you pop, match, and blast your way through an interstellar
                  adventure with your cute plant friends!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Video/Trailer */}
                <div className="relative overflow-hidden rounded-3xl border shadow-xl kawaii-corners gsap-reveal">
                  <div className="absolute inset-0 bg-gradient-to-r from-kawaii-sprout/20 via-transparent to-kawaii-planet/20 z-10 pointer-events-none"></div>
                  <Image
                    src="/images/kepler-pop-gameplay.png"
                    alt="Kepler-pop gameplay"
                    width={640}
                    height={360}
                    className="object-cover w-full aspect-video"
                    priority
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white opacity-70 cursor-pointer hover:opacity-100 transition-opacity z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right side - Download buttons and info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gsap-reveal">
                  <h2 className="text-2xl md:text-3xl font-game mb-6">
                    Download <span className="text-kawaii-sprout">Now</span> and Start Your Adventure!
                  </h2>

                  <div className="flex flex-col gap-4 w-full max-w-md">
                    <GameButton size="lg" className="gap-2 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                        <path d="M16 19h6"></path>
                        <path d="M19 16v6"></path>
                      </svg>
                      Google Play
                    </GameButton>

                    <GameButton size="lg" variant="secondary" className="gap-2 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-2.5 4-2.5-1.5 0-2 0-3.5-.5s-2.5-.5-4 0-2.5.5-4 .5c0 0 1 2.5 3.5 1.44z"></path>
                        <path d="M12 14c1.5.5 2.5.5 4 0s2.5-.5 4-.5c0 0-1-5-4-7-1.5-1-3-1-4 0-1.5 1-2 2-2 2"></path>
                        <path d="M12 14c-1.5.5-2.5.5-4 0s-2.5-.5-4-.5c0 0 1-5 4-7 1.5-1 3-1 4 0 1.5 1 2 2 2 2"></path>
                      </svg>
                      App Store
                    </GameButton>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex">
                      {[
                        { type: "sprout" as PlantType },
                        { type: "tulip" as PlantType },
                        { type: "sunflower" as PlantType },
                        { type: "crystal" as PlantType },
                        { type: "mushroom" as PlantType },
                      ].map((char, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-full border-2 border-background overflow-hidden bg-muted/30"
                        >
                          <div className="scale-75 transform -translate-y-1">
                            <PlantCharacter type={char.type} size="md" withPot={false} animated={false}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                    <div className="text-sm font-game mt-2">
                      Take on the challenge with adorable plant friends!
                    </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

            <div className="absolute top-20 right-10 opacity-80">
              <PlantCharacter type="crystal" size="md" className="animate-float" />
            </div>
          </section>

          <section id="features" className="py-20 relative">
            <div className="container">
              <div className="text-center mb-16 gsap-reveal">
                <h2 className="animate-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-game">
                  Game <span className="text-kawaii-sprout glow-text">Features</span>
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Discover what makes Kepler-pop an out-of-this-world gaming experience
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 gsap-stagger-container">
                <FeatureCard
                  icon={<Star className="h-10 w-10 text-kawaii-orbit" />}
                  title="Cosmic Puzzles"
                  description="Solve challenging puzzles across the Kepler star system with unique mechanics for each planet."
                  className="gsap-stagger-item"
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-kawaii-orbit" />}
                  title="Power-ups & Boosters"
                  description="Collect and use special power-ups to overcome difficult levels and achieve high scores."
                  className="gsap-stagger-item"
                />
                <FeatureCard
                  icon={<Users className="h-10 w-10 text-kawaii-orbit" />}
                  title="Multiplayer Challenges"
                  description="Compete with friends in real-time multiplayer matches or collaborate to conquer special event levels."
                  className="gsap-stagger-item"
                />
              </div>

              <div className="mt-16 flex justify-center gsap-reveal">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-kawaii-sprout via-kawaii-orbit to-kawaii-planet rounded-3xl blur opacity-25"></div>
                  <div className="relative bg-background rounded-3xl p-6 border kawaii-corners">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12">
                        <PlantCharacter type="sprout" size="sm" withPot={false} />
                      </div>
                      <div>
                        <h3 className="font-game text-lg">Daily Challenges</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Complete today's challenge:</span>
                          <div className="w-20 h-3 bg-muted rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-kawaii-sprout"></div>
                          </div>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-2xl bg-muted/50 flex items-center justify-center relative overflow-hidden group"
                        >
                          <Image
                            src={`/placeholder.svg?height=100&width=100&text=Day ${i}`}
                            alt={`Day ${i} challenge`}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-kawaii-sprout/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-game text-xs text-white">Play</span>
                          </div>
                          {i === 1 && (
                            <div className="absolute top-1 right-1 w-4 h-4 bg-kawaii-orbit rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="characters" className="py-20 bg-gradient-to-b from-background to-muted/20 relative">
            <div className="container">
              <div className="text-center mb-16 gsap-reveal">
                <h2 className="animate-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-game">
                  Cute <span className="text-kawaii-sprout glow-text">Characters</span>
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Meet your adorable plant companions on this cosmic adventure
                </p>
              </div>

              <CharacterGallery />
            </div>
          </section>

          <GameplaySection />

          <section id="testimonials" className="py-20 bg-muted/50 relative">
            <div className="container">
              <div className="text-center mb-16 gsap-reveal">
                <h2 className="animate-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-game">
                  Player <span className="text-kawaii-sprout glow-text">Testimonials</span>
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  See what our players are saying about Kepler-pop
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 gsap-stagger-container">
                <TestimonialCard
                  quote="Kepler-pop is the most addictive game I've played this year! The cosmic theme and cute characters keep me coming back for more."
                  author="Alex Chen"
                  rating={5}
                  className="gsap-stagger-item"
                />
                <TestimonialCard
                  quote="The multiplayer mode is fantastic! I love competing with my friends to see who can get the highest score on each level."
                  author="Sarah Johnson"
                  rating={4}
                  className="gsap-stagger-item"
                />
                <TestimonialCard
                  quote="Beautiful graphics and smooth gameplay. The power-ups are so satisfying to use, and the level design is top-notch!"
                  author="Miguel Rodriguez"
                  rating={5}
                  className="gsap-stagger-item"
                />
              </div>

              <div className="mt-16 flex justify-center gsap-reveal">
                <div className="bg-card rounded-3xl p-6 border max-w-md kawaii-corners">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12">
                      <PlantCharacter type="sprout" size="sm" withPot={false} />
                    </div>
                    <div>
                      <h3 className="font-game text-lg">Global Leaderboard</h3>
                      <div className="text-sm text-muted-foreground">Top players this week</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "CosmicChamp", score: 12450, rank: 1 },
                      { name: "StarGazer", score: 11200, rank: 2 },
                      { name: "NebulaNinja", score: 10800, rank: 3 },
                    ].map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-kawaii-orbit/20 flex items-center justify-center text-xs font-medium">
                            {player.rank}
                          </div>
                          <span className="font-medium">{player.name}</span>
                        </div>
                        <div className="font-game text-kawaii-sprout">{player.score.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <GameButton size="sm" variant="secondary">
                      View Full Leaderboard
                    </GameButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <DownloadSection />
        </main>

        <footer className="border-t py-10 md:py-16 relative">
          <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6">
                  <PlantCharacter type="sprout" size="sm" withPot={false} />
                </div>
                <span className="text-xl font-game text-kawaii-sprout">Kepler-pop</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 Ferv0r2Lab. All rights reserved.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-game">Game</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="#characters"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Characters
                  </Link>
                  <Link
                    href="#gameplay"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gameplay
                  </Link>
                  <Link
                    href="#download"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Download
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-game">Company</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-game">Legal</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
