"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LoadingScreen({
    onFinish,
}: {
    onFinish: () => void;
}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 500); // 終了後コールバック実行
                    return 100;
                }
                return prev + 5;
            });
        }, 50);
    }, [onFinish]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: progress === 100 ? "-100%" : 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed inset-0 bg-gray-700 flex items-center justify-center z-50"
            )}
        >
            <div className="w-3/4 max-w-lg space-y-4 text-white">
                {/* プログレスバー */}
                <div className="relative w-full h-2 bg-muted rounded">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary rounded"
                        style={{ width: `${progress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                    Loading... {progress}%
                </p>
            </div>
        </motion.div>
    );
}
