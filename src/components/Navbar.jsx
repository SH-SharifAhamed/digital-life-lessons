'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "@/lib/auth-client";

import { 
  Home, 
  PlusCircle, 
  BookOpen, 
  Sparkles, 
  LogIn, 
  LogOut, 
  User, 
  LayoutDashboard, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  // const { user, plan, login, logout } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const { data: session, isPending } = useSession();
  const user = session?.user;
  const plan = session?.user?.plan;


  // Close menus on path transition
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle click outside of dropdown to close it
  React.useEffect(() => {
   function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path) => pathname === path;

  // Nav links configuration array
  const publicLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Public Lessons', path: '/public-lessons', icon: BookOpen },
  ];

  const protectedLinks = [
    { name: 'Add Lesson', path: '/dashboard/add-lesson', icon: PlusCircle },
    { name: 'My Lessons', path: '/dashboard/my-lessons', icon: GraduationCap },
  ];

  return (
    <nav
      id="app-navbar"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo & Public Navigation Left */}
          <div className="flex items-center">
            <Link
              href="/"
              id="nav-logo"
              className="flex items-center gap-2 font-sans font-bold text-xl text-teal-600 hover:text-teal-700 transition-colors mr-8"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative w-11 h-11 rounded-xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    D
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight leading-none">
                    Digital<span className="text-indigo-400">Life</span>
                  </span>
                  <span className="text-[10px] text-neutral-600 uppercase tracking-[0.3em] mt-0.5">
                    Life Lessons Platform
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Link Entries */}
            <div className="hidden md:flex space-x-1">
              {/* Home */}
              <Link
                href="/"
                id="link-desktop-home"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  isActive("/")
                    ? "text-teal-700 bg-teal-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <Home className="h-4 w-4" />
                Home
                {isActive("/") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Conditional Private Route Entries */}
              {user &&
                protectedLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    id={`link-desktop-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                      isActive(link.path)
                        ? "text-teal-700 bg-teal-50/50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}

              {/* Public Lessons */}
              <Link
                href="/public-lessons"
                id="link-desktop-public-lessons"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  isActive("/public-lessons")
                    ? "text-teal-700 bg-teal-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <BookOpen className="h-4 w-4" />
                Public Lessons
                {isActive("/public-lessons") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          </div>

          {/* Desktop Right Side Area */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Conditional Upgrade Link (Visible ONLY on Free Plan) */}
            {plan === "Free" && (
              <Link
                href="/pricing"
                id="link-desktop-upgrade"
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-1.5 bg-linear-to-r from-amber-500 to-amber-600 text-white rounded-lg text-sm font-medium hover:from-amber-600 hover:to-amber-700 shadow-sm transition-all hover:shadow-amber-100",
                  isActive("/pricing") && "ring-2 ring-amber-400 ring-offset-2",
                )}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                Upgrade to Pro
              </Link>
            )}

            {/* Display plan badge if logged in */}
            {user && (
              <span
                id="badge-desktop-plan"
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide",
                  plan === "Premium"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-gray-100 text-gray-700",
                )}
              >
                {plan === "Premium" ? "PRO PLAN" : "FREE PLAN"}
              </span>
            )}

            {/* User Interaction Controls: Dropdown or Login */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  id="avatar-dropdown-trigger"
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-50 border border-gray-100 focus:outline-none transition-all"
                  aria-expanded={isDropdownOpen}
                >
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-teal-50"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-sm font-medium text-gray-700 px-1 hidden lg:inline">
                    {user.name}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-400 transition-transform duration-200",
                      isDropdownOpen && "transform rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      id="avatar-dropdown-menu"
                      className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-gray-100 shadow-xl py-2 px-1 z-50 origin-top-right focus:outline-none"
                    >
                      <div className="px-3 py-2 border-b border-gray-50 mb-1">
                        <p className="text-xs text-gray-400 font-mono">
                          LOGGED IN AS
                        </p>
                        <p
                          id="dropdown-user-name"
                          className="text-sm font-bold text-gray-800 truncate"
                        >
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        href="/profile"
                        id="dropdown-link-profile"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <User className="h-4 w-4 text-gray-400" />
                        My Profile
                      </Link>

                      <Link
                        href="/dashboard"
                        id="dropdown-link-dashboard"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <LayoutDashboard className="h-4 w-4 text-gray-400" />
                        Dashboard
                      </Link>

                      <hr className="my-1 border-gray-50" />

                      <button
                        onClick={logout}
                        id="dropdown-btn-logout"
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors text-left"
                      >
                        <LogOut className="h-4 w-4 text-red-500" />
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                id="btn-desktop-login"
                className="flex items-center gap-1.5 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 shadow-sm transition-all cursor-pointer"
              >
                <LogIn className="h-4 w-4" />
                Login / Signup
              </button>
            )}
          </div>

          {/* Mobile hamburger menu button trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-trigger"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" id="mobile-menu-icon-close" />
              ) : (
                <Menu className="h-6 w-6" id="mobile-menu-icon-open" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation-panel"
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden shadow-inner"
          >
            <div className="px-4 py-3 space-y-1.5">
              {/* Home */}
              <Link
                href="/"
                id="link-mobile-home"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all",
                  isActive("/")
                    ? "text-teal-700 bg-teal-50 font-bold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <Home className="h-5 w-5 text-gray-400" />
                Home
              </Link>

              {/* Private Routes if logged in */}
              {user &&
                protectedLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    id={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all",
                      isActive(link.path)
                        ? "text-teal-700 bg-teal-50 font-bold"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    <link.icon className="h-5 w-5 text-gray-400" />
                    {link.name}
                  </Link>
                ))}

              {/* Public Lessons */}
              <Link
                href="/public-lessons"
                id="link-mobile-public-lessons"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all",
                  isActive("/public-lessons")
                    ? "text-teal-700 bg-teal-50 font-bold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
              >
                <BookOpen className="h-5 w-5 text-gray-400" />
                Public Lessons
              </Link>

              {/* Pricing visible only on Free plan */}
              {plan === "Free" && (
                <Link
                  href="/pricing"
                  id="link-mobile-upgrade"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all text-amber-700 bg-amber-50 hover:bg-amber-100",
                    isActive("/pricing") && "font-bold ring-2 ring-amber-300",
                  )}
                >
                  <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
                  Pricing & Upgrade
                </Link>
              )}
            </div>

            {/* Mobile User Profile Section */}
            <div className="border-t border-gray-100 px-4 py-4 bg-gray-50">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-teal-50"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4
                        id="user-mobile-display-name"
                        className="text-sm font-bold text-gray-800"
                      >
                        {user.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <span className="ml-auto bg-teal-100 text-teal-800 px-2 py-0.5 rounded text-xs font-semibold uppercase">
                      {plan}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      href="/profile"
                      id="link-mobile-profile"
                      className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <User className="h-4 w-4 text-gray-400" />
                      Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      id="link-mobile-dashboard"
                      className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <LayoutDashboard className="h-4 w-4 text-gray-400" />
                      Dashboard
                    </Link>
                  </div>

                  <button
                    onClick={logout}
                    id="btn-mobile-logout"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-all"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  onClick={login}
                  id="btn-mobile-login"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-all shadow-sm"
                >
                  <LogIn className="h-4 w-4" />
                  Login / Signup
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
