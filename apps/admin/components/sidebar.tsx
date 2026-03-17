'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Briefcase, 
  Clock, 
  Menu, 
  X,
  ChevronLeft,
  Sun,
  Moon
} from 'lucide-react'

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    const savedCollapsed = localStorage.getItem('sidebarCollapsed')
    if (savedCollapsed === 'true') {
      setIsCollapsed(true)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !isCollapsed &&
        window.innerWidth >= 1024
      ) {
        setIsCollapsed(true)
        localStorage.setItem('sidebarCollapsed', 'true')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCollapsed])

  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('sidebarCollapsed', String(newState))
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const menuItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/appointments', icon: Calendar, label: 'Termine' },
    { href: '/services', icon: Briefcase, label: 'Services' },
    { href: '/availability', icon: Clock, label: 'Verfügbarkeit' },
  ]

  const sidebarWidth = isCollapsed && !isHovered ? 'w-20' : 'w-64'

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 bg-amber-700 text-white p-3 rounded-lg shadow-lg hover:bg-amber-800 transition-colors lg:hidden"
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg z-40 transition-all duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${sidebarWidth}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3 min-w-0">
              <div className="flex-shrink-0">
                <Image 
                  src="/sana_logo.svg" 
                  alt="SanaBalance Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              {(!isCollapsed || isHovered) && (
                <div className="min-w-0">
                  <div className="text-lg font-serif text-gray-800 dark:text-gray-100 truncate">SanaBalance</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate">Admin Panel</div>
                </div>
              )}
            </Link>
            {/* Collapse Toggle - Desktop Only */}
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
              title={isCollapsed ? 'Rozwiń menu' : 'Zwiń menu'}
            >
              <ChevronLeft className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-amber-800 dark:bg-amber-900 text-amber-50 shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  } ${isCollapsed && !isHovered ? 'justify-center' : ''}`}
                  title={isCollapsed && !isHovered ? item.label : ''}
                >
                  <Icon className={`h-5 w-5 ${isCollapsed && !isHovered ? '' : 'flex-shrink-0'}`} />
                  {(!isCollapsed || isHovered) && (
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`w-full flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                isCollapsed && !isHovered ? 'justify-center' : 'justify-between'
              }`}
              title={isCollapsed && !isHovered ? (isDarkMode ? 'Dark Mode' : 'Light Mode') : ''}
            >
              <span className={`flex items-center gap-3 ${isCollapsed && !isHovered ? '' : ''}`}>
                {isDarkMode ? (
                  <Moon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <Sun className="h-5 w-5 text-amber-500 flex-shrink-0" />
                )}
                {(!isCollapsed || isHovered) && (
                  <span className="font-medium whitespace-nowrap">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                )}
              </span>
              {(!isCollapsed || isHovered) && (
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                } relative flex-shrink-0`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </div>
              )}
            </button>

            {(!isCollapsed || isHovered) && (
              <a
                href="https://sanabalance.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors px-4"
              >
                <ChevronLeft className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">Zurück zur Website</span>
              </a>
            )}
          </div>
        </div>
      </aside>

      {/* Spacer for desktop - pushes content to the right */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${sidebarWidth}`} />
    </>
  )
}
