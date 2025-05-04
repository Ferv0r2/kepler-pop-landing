"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GameButton from "@/components/game-button"
import PlantCharacter, { type PlantType } from "@/components/plant-character"
import Sparkle from "@/components/sparkle"

export default function CharacterGallery() {
  const [activeCharacter, setActiveCharacter] = useState<PlantType>("sprout")

  const characters = [
    {
      type: "sprout" as PlantType,
      name: "Space Sprout",
      description: "The main character and your guide through the Kepler system",
      stats: { speed: 3, power: 2, magic: 4 },
      special: "Grows faster in cosmic soil",
    },
    {
      type: "cactus" as PlantType,
      name: "Teary Cactus",
      description: "A sensitive soul with surprising resilience",
      stats: { speed: 1, power: 5, magic: 2 },
      special: "Immune to space radiation",
    },
    {
      type: "tulip" as PlantType,
      name: "Ruby Tulip",
      description: "Quick and agile, with a fiery personality",
      stats: { speed: 5, power: 3, magic: 2 },
      special: "Can bloom in any environment",
    },
    {
      type: "sunflower" as PlantType,
      name: "Sunny",
      description: "Radiates positive energy and healing powers",
      stats: { speed: 2, power: 1, magic: 5 },
      special: "Converts starlight into energy",
    },
    {
      type: "crystal" as PlantType,
      name: "Crystal Mint",
      description: "Rare cosmic variant with crystalline growth",
      stats: { speed: 3, power: 3, magic: 5 },
      special: "Can freeze time briefly",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-game mb-2">Meet the Characters</h2>
        <p className="text-muted-foreground">Choose your plant companion for the cosmic journey!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center bg-muted/20 rounded-3xl p-8 kawaii-corners relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/10 via-transparent to-kawaii-planet/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

          <div className="relative w-64 h-64">
            <PlantCharacter
              type={activeCharacter}
              size="xl"
              withOrbit={activeCharacter === "sprout" || activeCharacter === "crystal"}
            />
          </div>

          <div className="absolute top-4 right-4">
            <Sparkle size="lg" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkle size="md" delay={0.5} />
          </div>
        </div>

        <div className="bg-muted/20 rounded-3xl p-6 kawaii-corners">
          <Tabs defaultValue="sprout" onValueChange={(value) => setActiveCharacter(value as PlantType)}>
            <TabsList className="grid grid-cols-5 mb-6">
              {characters.map((char) => (
                <TabsTrigger key={char.type} value={char.type} className="text-xs">
                  {char.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {characters.map((char) => (
              <TabsContent key={char.type} value={char.type} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <PlantCharacter type={char.type} size="sm" withPot={false} />
                  </div>
                  <div>
                    <h3 className="font-game text-lg">{char.name}</h3>
                    <p className="text-sm text-muted-foreground">{char.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Speed</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-6 rounded-full ${i < char.stats.speed ? "bg-kawaii-sprout" : "bg-muted"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Power</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-6 rounded-full ${i < char.stats.power ? "bg-kawaii-orbit" : "bg-muted"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">Magic</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-6 rounded-full ${i < char.stats.magic ? "bg-kawaii-planet" : "bg-muted"}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium">Special ability:</span> {char.special}
                  </p>
                </div>

                <div className="mt-6">
                  <GameButton size="sm" className="w-full">
                    Select {char.name}
                  </GameButton>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
