'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Shared button styles
const buttonBaseStyle = "inline-block px-10 py-5 text-[22px] font-medium text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600"

// Navigation links data
const navigationLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#features", label: "مميزات" }
]

interface ArabicHeroSectionProps {
  backgroundImage?: string
  title?: string
  description?: string
  contactButtonText?: string
  demoButtonText?: string
  whatsappText?: string
}

export const ArabicHeroSection: React.FC<ArabicHeroSectionProps> = ({
  backgroundImage = "url('/Car.png')",
  title = "نحدث فرقًا من خلال الابتكار",
  description = "تحكم كامل في الأسطول، الحجوزات، العقود، العملاء والايرادات — من منصة واحدة موثوقة",
  contactButtonText = "تواصل معنا",
  demoButtonText = "تجربة الـ Demo",
  whatsappText = "تواصل عبر الواتساب"
}) => {
  return (
    <div
      className="relative flex flex-col w-full min-h-[600px] md:min-h-[900px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage }}
    >
      {/* Arabic Navigation Bar */}
      <nav>
        <div className="container px-40 mx-auto py-14">
          <div className="flex items-center justify-between">
            {/* Contact Button */}
            <Link href="#contact" className={buttonBaseStyle}>
              {contactButtonText}
            </Link>

            {/* Navigation Links */}
            <div className="items-center hidden space-x-20 space-x-reverse md:flex">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white text-[20px] transition-colors hover:text-blue-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <div className="flex flex-col items-center -mt-4 space-y-2">
              <Image 
                src="/logos_whatsapp-icon.svg" 
                alt="WhatsApp" 
                width={60} 
                height={20} 
              />
              <span className="font-medium text-center text-white">
                {whatsappText}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content Overlay */}
      <div className="flex items-center justify-center">
        <div className="px-4 text-center text-white max-w-7xl">
          {/* Main Heading */}
          <h1 className="py-6 font-bold leading-tight text-[65px]">
            {title}
          </h1>
          
          {/* Description */}
          <p className="max-w-6xl mx-auto py-5 leading-relaxed md:text-[35px] opacity-90">
            {description}
          </p>
          
          {/* Demo Button */}
          <Link href="#demo" className={`${buttonBaseStyle} mt-5`}>
            {demoButtonText}
          </Link>
        </div>
      </div>
    </div>
  )
} 