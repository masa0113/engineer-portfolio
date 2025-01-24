'use client';
import { useState } from "react";
import LoadingScreen from "../parts/LoadingScreen";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HomeWrapper() {
    const [isLoading, setIsLoading] = useState(true);
    const pageVariants = {
        initial: { opacity: 0, scale: 0.9 },
        in: { opacity: 1, scale: 1 },
        out: { opacity: 0, scale: 1.1 }
    }

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    }

    return (
        isLoading ? (
            <LoadingScreen onFinish={() => setIsLoading(false)} />
        ) : (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4"
            >
                <h1 className="text-5xl font-bold text-center text-white">
                    Welcome to My Portfolio
                </h1>
                <div className="flex space-x-4">
                    <Link href="/career">
                        <Button>経歴を見る</Button>
                    </Link>
                    <Link href="/about">
                        <Button>自己紹介</Button>
                    </Link>
                    <Link href="/contact">
                        <Button>お問い合わせ</Button>
                    </Link>
                </div>
            </motion.div>
        )
    );
}