'use client';

import { motion } from "framer-motion";
import { projects } from "@/const/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectSection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="mb-8 text-3xl font-bold text-white">プロジェクト</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-white">{project.title}</CardTitle>
                                <CardDescription className="text-white">{project.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
