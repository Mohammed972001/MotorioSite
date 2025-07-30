import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ArabicHeroSection } from '@/components/ArabicHeroSection'
import { AboutUsSection } from '@/components/AboutUsSection'
import DashboardShowcase from '@/components/DashboardShowcase'
import Image from 'next/image'
async function getLatestPosts() {
  try {
    const payload = await getPayload({ config: configPromise })
    const posts = await payload.find({
      collection: 'posts',
      limit: 6,
      where: {
        _status: { equals: 'published' },
      },
      sort: '-publishedAt',
    })
    return posts.docs
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function LandingPage() {
  const latestPosts = await getLatestPosts()

  return (
    <div className="flex flex-col min-h-screen space-y-40 font-noto-kufi-arabic" dir="rtl">
      {/* Hero Section with Navigation and Content */}
      <div className="relative">
        <ArabicHeroSection />
        
        {/* Bottom Section with Dashboard Image - UNCHANGED */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[70%] z-30">
          <Image
            src="/main.png"
            alt="لوحة البيانات"
            width={1200}
            height={800}
            className="w-full drop-shadow-xl rounded-2xl"
            priority
          />
          
        </div>
      </div>
      
   
        <AboutUsSection />
        <DashboardShowcase />
      
    
    </div>
  )
}
