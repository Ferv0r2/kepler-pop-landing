"use client"
import { Smartphone } from "lucide-react"
import GameButton from "@/components/game-button"
import FloatingElement from "@/components/floating-element"
import PlantCharacter from "@/components/plant-character"
import Sparkle from "@/components/sparkle"

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-kawaii-sprout/5 relative">
      <div className="container">
        <div className="text-center mb-16 gsap-reveal">
          <h2 className="animate-text text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-game">
            Download <span className="text-kawaii-sprout glow-text">Kepler-pop</span> Today
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">Available on mobile - play anywhere, anytime!</p>
        </div>

        <div className="flex justify-center gsap-stagger-container">
          <div className="flex flex-col items-center text-center p-8 rounded-3xl border bg-card shadow-lg kawaii-corners gsap-stagger-item relative overflow-hidden group max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/10 via-transparent to-kawaii-planet/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <FloatingElement speed="slow" className="mb-6">
              <Smartphone className="h-20 w-20 text-kawaii-sprout" />
            </FloatingElement>

            <h3 className="text-2xl font-bold mb-4 font-game">Mobile App</h3>
            <p className="text-muted-foreground mb-8">Take the cosmic adventure with you wherever you go!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <GameButton className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <GameButton className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

            <div className="mt-8 flex items-center justify-center gap-4">
              <Sparkle className="text-kawaii-orbit" size="lg" />
              <div className="text-sm font-medium">
                <span className="text-kawaii-sprout font-game">4.8/5</span> 평균 평점
              </div>
              <Sparkle className="text-kawaii-orbit" size="lg" delay={0.5} />
            </div>

            <div className="absolute top-2 right-2 bg-kawaii-orbit text-background text-xs px-2 py-1 rounded-full font-game">
              NEW!
            </div>
          </div>
        </div>

        <div className="mt-16 text-center gsap-reveal">
          <div className="inline-block rounded-3xl border bg-card p-8 shadow-lg kawaii-corners relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-kawaii-sprout/5 via-transparent to-kawaii-planet/5 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-4 font-game">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Connect with other players, get game tips, and be the first to hear about updates!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <GameButton variant="secondary" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16.5 8.25A4.25 4.25 0 0 1 12.25 4a4.25 4.25 0 0 1-4.25 4.25A4.25 4.25 0 0 1 4 12.25 4.25 4.25 0 0 1 8.25 16.5"></path>
                  <path d="M12.25 4A4.25 4.25 0 0 1 16.5 8.25 4.25 4.25 0 0 1 20.75 4 4.25 4.25 0 0 1 16.5-.25 4.25 4.25 0 0 1 12.25 4"></path>
                  <path d="M12.25 20A4.25 4.25 0 0 1 8 15.75a4.25 4.25 0 0 1-4.25 4.25A4.25 4.25 0 0 1-.5 15.75 4.25 4.25 0 0 1 3.75 11.5"></path>
                  <path d="M16.5 20a4.25 4.25 0 0 1 4.25-4.25 4.25 4.25 0 0 1 4.25 4.25 4.25 4.25 0 0 1-4.25 4.25 4.25 4.25 0 0 1-4.25-4.25z"></path>
                </svg>
                Discord
              </GameButton>
              <GameButton variant="secondary" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                Twitter
              </GameButton>
              <GameButton variant="secondary" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                Instagram
              </GameButton>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-kawaii-sprout via-kawaii-orbit to-kawaii-planet rounded-3xl blur opacity-25"></div>
                <div className="relative bg-background rounded-3xl p-4 border kawaii-corners">
                  <div className="flex items-center gap-4">
                    <PlantCharacter type="sprout" size="sm" withPot={false} />
                    <div>
                      <h3 className="font-game text-lg">친구 초대하기</h3>
                      <p className="text-sm text-muted-foreground">특별한 게임 내 보상을 받으세요!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 opacity-30">
        <PlantCharacter type="sprout" size="sm" />
      </div>
    </section>
  )
}
