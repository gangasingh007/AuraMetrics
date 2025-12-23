"use client"
import { useState } from "react"
import { BrainCircuit, Calendar, Crown, Home, Mic, Menu, X, User, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs"

function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const user  = useUser()

    const navLinks = [
        { href: "/admin/dashboard", label: "Dashboard", icon: Home },
        { href: "/admin/appointments", label: "Appointments", icon: Calendar },
        { href: "/admin/voice", label: "Voice", icon: Mic },
        { href: "/dashboard", label: "Pro", icon: Crown },
    ]

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-blurred-bg backdrop-blur-md border-b border-border">
            <div className="flex justify-between items-center px-6 md:px-20 py-3">
                
                {/* --- Left Side: Logo & Desktop Nav --- */}
                <div className="flex items-center gap-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <BrainCircuit size={36} className="text-primary" />
                        <span className="ml-2 font-semibold text-lg text-foreground">AuraMetrics</span>
                    </div>

                    {/* Desktop Navigation (Hidden on small screens) */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname?.startsWith(link.href)
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-200 flex items-center ${
                                        isActive ? "text-teal-400 hover:text-teal-500" : "text-white/60 hover:text-white"
                                    }`}
                                >
                                    <Icon size={16} className="mr-2 mb-0.5" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-medium text-white px-1">{user.user?.firstName} {user.user?.lastName}</span>
                            <span className="text-xs text-white/50">{user.user?.emailAddresses[0].emailAddress}</span>
                        </div>
                        <UserButton />
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden text-white/70 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* --- Mobile Sidebar Overlay --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out">
                    <div className="flex flex-col px-6 py-6 gap-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname?.startsWith(link.href)
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium p-3 rounded-lg flex items-center transition-colors ${
                                        isActive 
                                            ? "bg-teal-400/10 text-teal-400" 
                                            : "text-white/70 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    <Icon size={20} className="mr-3" />
                                    {link.label}
                                </Link>
                            )
                        })}
                        
                        <div className="h-[1px] bg-white/10 my-2" />
                        
                        <SignOutButton>
                            <button className="text-lg font-medium p-3 rounded-lg flex items-center text-red-400 hover:bg-red-400/10 transition-colors">
                                <LogOut size={20} className="mr-3" />
                                    Sign Out
                            </button>
                        </SignOutButton>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar