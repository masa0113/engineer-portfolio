'use client';
import { useState } from "react";
import LoadingScreen from "../parts/LoadingScreen";
import HeroSection from "./HeroSection.tsx/HeroSection";
import ProjectSection from "./ProjectSection.tsx/ProjectSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";

export default function HomeWrapper() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ? (
            <LoadingScreen onFinish={() => setIsLoading(false)} />
        ) : (
            <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                <HeroSection />
                <ProjectSection />
                <ExperienceSection />
            </main>
        )
    );
}