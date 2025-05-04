"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GameButton from "@/components/game-button"
import PlantCharacter from "@/components/plant-character"

export default function GameplaySection() {
  const [activeTab, setActiveTab] = useState("levels")

  return (
    <section id="gameplay" className="py-20 bg-gradient-to-b from-background to-muted/50 relative">
      <div className="container">
        <div className="text-center mb-16 gsap-reveal">
          <h2 className="animate-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-game">
            Gameplay <span className="text-kawaii-sprout glow-text">Screenshots</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">Take a peek at the cosmic adventure that awaits you</p>
        </div>

        <Tabs defaultValue="levels" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="kawaii-corners">
              <TabsTrigger value="levels" className="font-game">
                Levels
              </TabsTrigger>
              <TabsTrigger value="characters" className="font-game">
                Characters
              </TabsTrigger>
              <TabsTrigger value="powerups" className="font-game">
                Power-ups
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="levels" className="space-y-8 gsap-stagger-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-3xl border kawaii-corners gsap-stagger-item group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/20 via-transparent to-kawaii-planet/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <Image
                  src="/images/kepler-pop-gameplay.png"
                  alt="Kepler-pop gameplay"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-4 relative">
                  <div className="absolute -top-10 right-4 bg-kawaii-sprout text-white px-3 py-1 text-xs font-game rounded-full shadow-lg transform -rotate-3">
                    EASY
                  </div>
                  <h3 className="font-bold font-game">Level 1: Kepler's Orbit</h3>
                  <p className="text-sm text-muted-foreground">The beginning of your cosmic journey</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-xs text-muted-foreground">Completion:</div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-kawaii-sprout" style={{ width: "100%" }}></div>
                    </div>
                    <div className="text-xs font-medium">100%</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border kawaii-corners gsap-stagger-item group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/20 via-transparent to-kawaii-planet/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <Image
                  src="/images/plant-characters.png"
                  alt="Nebula Nexus"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-4 relative">
                  <div className="absolute -top-10 right-4 bg-kawaii-orbit text-white px-3 py-1 text-xs font-game rounded-full shadow-lg transform -rotate-3">
                    MEDIUM
                  </div>
                  <h3 className="font-bold font-game">Level 15: Nebula Nexus</h3>
                  <p className="text-sm text-muted-foreground">Navigate through colorful cosmic clouds</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-xs text-muted-foreground">Completion:</div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-kawaii-sprout" style={{ width: "60%" }}></div>
                    </div>
                    <div className="text-xs font-medium">60%</div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border kawaii-corners gsap-stagger-item group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/20 via-transparent to-kawaii-planet/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <Image
                  src="/images/plant-characters-glow.png"
                  alt="Black Hole Challenge"
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-4 relative">
                  <div className="absolute -top-10 right-4 bg-kawaii-planet text-white px-3 py-1 text-xs font-game rounded-full shadow-lg transform -rotate-3">
                    HARD
                  </div>
                  <h3 className="font-bold font-game">Level 30: Black Hole Challenge</h3>
                  <p className="text-sm text-muted-foreground">Test your skills against gravitational forces</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-xs text-muted-foreground">Completion:</div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-kawaii-sprout" style={{ width: "30%" }}></div>
                    </div>
                    <div className="text-xs font-medium">30%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gsap-reveal">
              <GameButton variant="secondary">View More Screenshots</GameButton>
            </div>
          </TabsContent>

          <TabsContent value="characters" className="space-y-8 gsap-stagger-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "sprout", name: "Space Sprout", desc: "Your guide through the Kepler system" },
                { type: "sunflower", name: "Sunny", desc: "The cosmic companion with special abilities" },
                { type: "crystal", name: "Crystal Mint", desc: "The mysterious challenger from another dimension" },
              ].map((character, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-3xl border kawaii-corners gsap-stagger-item group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/20 via-transparent to-kawaii-planet/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <div className="p-6 flex flex-col items-center">
                    <PlantCharacter type={character.type as any} size="md" withPot={false} />
                  </div>
                  <div className="p-4 relative">
                    <div className="absolute -top-10 right-4 bg-kawaii-planet text-white px-3 py-1 text-xs font-game rounded-full shadow-lg transform -rotate-3">
                      {i === 0 ? "STARTER" : i === 1 ? "UNLOCKABLE" : "LEGENDARY"}
                    </div>
                    <h3 className="font-bold font-game text-center">{character.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{character.desc}</p>
                    <div className="mt-2 grid grid-cols-3 gap-1">
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-muted-foreground">Speed</div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div
                              key={j}
                              className={`w-2 h-2 rounded-full ${j < (i === 0 ? 3 : i === 1 ? 4 : 2) ? "bg-kawaii-sprout" : "bg-muted"}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-muted-foreground">Power</div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div
                              key={j}
                              className={`w-2 h-2 rounded-full ${j < (i === 0 ? 2 : i === 1 ? 3 : 5) ? "bg-kawaii-sprout" : "bg-muted"}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-muted-foreground">Magic</div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <div
                              key={j}
                              className={`w-2 h-2 rounded-full ${j < (i === 0 ? 1 : i === 1 ? 5 : 4) ? "bg-kawaii-sprout" : "bg-muted"}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="powerups" className="space-y-8 gsap-stagger-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { name: "Cosmic Magnet", desc: "Attracts nearby elements for easy matching", icon: "magnet" },
                { name: "Nova Blast", desc: "Clears a large area of the board", icon: "target" },
                { name: "Time Warp", desc: "Adds extra seconds to the timer", icon: "clock" },
                { name: "Stellar Shuffle", desc: "Rearranges the board for better matches", icon: "shuffle" },
              ].map((powerup, i) => (
                <div key={i} className="overflow-hidden rounded-3xl border kawaii-corners gsap-stagger-item group">
                  <div className="p-6 flex flex-col items-center text-center relative">
                    <div className="mb-4">
                      <div className="h-20 w-20 rounded-full bg-kawaii-orbit/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full bg-kawaii-orbit/10 animate-ping"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-kawaii-orbit"
                        >
                          {powerup.icon === "magnet" && (
                            <>
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                              <path d="M4 22h16"></path>
                              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </>
                          )}
                          {powerup.icon === "target" && (
                            <>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m4.93 4.93 4.24 4.24"></path>
                              <path d="m14.83 9.17 4.24-4.24"></path>
                              <path d="m14.83 14.83 4.24 4.24"></path>
                              <path d="m9.17 14.83-4.24 4.24"></path>
                              <circle cx="12" cy="12" r="4"></circle>
                            </>
                          )}
                          {powerup.icon === "clock" && (
                            <>
                              <path d="M12 2v8"></path>
                              <path d="m4.93 10.93 1.41 1.41"></path>
                              <path d="M2 18h2"></path>
                              <path d="M20 18h2"></path>
                              <path d="m19.07 10.93-1.41 1.41"></path>
                              <path d="M22 22H2"></path>
                              <path d="m8 22 4-10 4 10"></path>
                            </>
                          )}
                          {powerup.icon === "shuffle" && (
                            <>
                              <path d="M12 3v3"></path>
                              <path d="M18.5 8.5 16 11"></path>
                              <path d="M8 16H5"></path>
                              <path d="M5.5 5.5 8 8"></path>
                              <path d="M16 16l2.5 2.5"></path>
                              <path d="M21 12h-3"></path>
                              <circle cx="12" cy="12" r="4"></circle>
                            </>
                          )}
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold font-game mb-2">{powerup.name}</h3>
                    <p className="text-sm text-muted-foreground">{powerup.desc}</p>

                    <div className="mt-4 w-full bg-muted h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-kawaii-sprout" style={{ width: `${(i + 1) * 20}%` }}></div>
                    </div>
                    <div className="text-xs mt-1 text-muted-foreground">
                      Rarity: {i === 0 ? "Common" : i === 1 ? "Uncommon" : i === 2 ? "Rare" : "Epic"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 flex justify-center gsap-reveal">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-kawaii-sprout via-kawaii-orbit to-kawaii-planet rounded-3xl blur opacity-25"></div>
            <div className="relative bg-background rounded-3xl p-6 border kawaii-corners">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12">
                  <PlantCharacter type="sprout" size="sm" withPot={false} />
                </div>
                <div>
                  <h3 className="font-game text-lg">Game Progress</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Level completion:</span>
                    <div className="w-20 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-kawaii-sprout"></div>
                    </div>
                    <span>50%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg ${i < 5 ? "bg-kawaii-sprout/20" : "bg-muted/50"} flex items-center justify-center relative overflow-hidden group`}
                  >
                    <div className="font-game text-sm">{i + 1}</div>
                    {i < 5 && (
                      <div className="absolute top-1 right-1 w-3 h-3 bg-kawaii-orbit rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
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

              <div className="mt-4 flex justify-center">
                <GameButton size="sm" variant="accent">
                  Continue Playing
                </GameButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
