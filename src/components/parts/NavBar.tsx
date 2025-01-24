"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'TOP' },
        { href: '/career', label: '経歴' },
        { href: '/about', label: '自己紹介' },
        { href: '/contact', label: 'お問い合わせ' }
    ]

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-4">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.href}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`text-white ${navigationMenuTriggerStyle()} ${pathname === item.href ? 'bg-accent text-accent-foreground' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </motion.nav>
    )
}