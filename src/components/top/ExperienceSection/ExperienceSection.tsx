'use client';

import { motion } from "framer-motion";
import { experiences } from "@/const/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ExperienceSection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="mb-8 text-3xl font-bold text-white">経験</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-white">{exp.company}</CardTitle>
                                <CardDescription className="text-white">
                                    {exp.position} | {exp.period}
                                </CardDescription>
                                <p className="text-white mt-2">{exp.description}</p>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
