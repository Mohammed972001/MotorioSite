import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الصفحة الرئيسية - موتوريو',
  description: 'مرحباً بكم في موقعنا - نقدم أفضل الخدمات والحلول لعملائنا',
  openGraph: {
    title: 'الصفحة الرئيسية - موتوريو',
    description: 'مرحباً بكم في موقعنا - نقدم أفضل الخدمات والحلول لعملائنا',
    type: 'website',
  },
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children
}
