'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-20 text-white"
        >
            <h1 className="mb-4 text-6xl font-bold">Masahiro Fukuyama</h1>
            <p className="mb-8 text-xl">Frontend Engineer / Web Developer / Scrum Master</p>
            <Button variant="outline" size="lg">
                プロジェクトを見る
            </Button>
        </motion.section>
    );
}
