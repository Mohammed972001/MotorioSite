import React from 'react'
import type { StatsBlock as StatsBlockProps } from '@/payload-types'

export const StatsBlock: React.FC<StatsBlockProps> = ({
  title,
  description,
  stats,
  backgroundColor = 'white',
}) => {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`py-16 ${bgClass}`} dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  {/* Icon/Visual */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                    {stat.suffix && <span className="text-blue-500">{stat.suffix}</span>}
                  </div>

                  {/* Label */}
                  <div className="text-gray-700 font-medium mb-2">{stat.label}</div>

                  {/* Description */}
                  {stat.description && (
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  )}

                  {/* Progress Bar */}
                  {stat.percentage && (
                    <div className="mt-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${stat.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.percentage}%</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Chart/Visual */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">إحصائيات الأداء</h3>

            {/* Simple Chart Visualization */}
            <div className="grid grid-cols-7 gap-2 h-32 items-end">
              {[65, 78, 90, 85, 92, 88, 95].map((height, index) => (
                <div key={index} className="bg-blue-600 rounded-t" style={{ height: `${height}%` }}>
                  <div className="text-xs text-white text-center pt-1">{height}%</div>
                </div>
              ))}
            </div>

            {/* Chart Labels */}
            <div className="grid grid-cols-7 gap-2 mt-2 text-center text-xs text-gray-500">
              <div>الأحد</div>
              <div>الاثنين</div>
              <div>الثلاثاء</div>
              <div>الأربعاء</div>
              <div>الخميس</div>
              <div>الجمعة</div>
              <div>السبت</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
