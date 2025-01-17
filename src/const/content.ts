import { ProjectType, ExperienceType } from "@/types";

export const projects: ProjectType[] = [
    {
    title: "プロジェクト1",
    description: "プロジェクトの詳細な説明",
    technologies: ["React", "TypeScript", "Next.js"],
    imageUrl: "/images/project1.png",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.example.com"
    },
    // 他のプロジェクトを追加
];

export const experiences: ExperienceType[] = [
    {
    company: "株式会社Example",
    position: "シニアフロントエンドエンジニア",
    period: "2020年4月 - 現在",
    description: "主要なプロダクト開発のリード...",
    technologies: ["React", "TypeScript", "GraphQL"]
    },
    // 他の経験を追加
];