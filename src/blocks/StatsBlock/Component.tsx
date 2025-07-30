import React from 'react'

// Define local types for StatsBlock
interface StatItem {
  number: string | number
  suffix?: string
  label: string
  description?: string
  percentage?: number
}

interface StatsBlockProps {
  title?: string
  description?: string
  stats?: StatItem[]
  backgroundColor?: 'white' | 'gray'
}

export const StatsBlock: React.FC<StatsBlockProps> = ({
  title,
  description,
  stats,
  backgroundColor = 'white',
}) => {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`py-16 ${bgClass}`} dir="rtl">
      <div className="container px-4 mx-auto">
        {/* Header */}
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="max-w-2xl mx-auto text-lg text-gray-600">{description}</p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                  {/* Icon/Visual */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>

                  {/* Number */}
                  <div className="mb-2 text-3xl font-bold text-blue-600">
                    {stat.number}
                    {stat.suffix && <span className="text-blue-500">{stat.suffix}</span>}
                  </div>

                  {/* Label */}
                  <div className="mb-2 font-medium text-gray-700">{stat.label}</div>

                  {/* Description */}
                  {stat.description && (
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  )}

                  {/* Progress Bar */}
                  {stat.percentage && (
                    <div className="mt-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 transition-all duration-1000 ease-out bg-blue-600 rounded-full"
                          style={{ width: `${stat.percentage}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{stat.percentage}%</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Chart/Visual */}
        <div className="mt-16">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-center text-gray-900">إحصائيات الأداء</h3>

            {/* Simple Chart Visualization */}
            <div className="grid items-end h-32 grid-cols-7 gap-2">
              {[65, 78, 90, 85, 92, 88, 95].map((height, index) => (
                <div key={index} className="bg-blue-600 rounded-t" style={{ height: `${height}%` }}>
                  <div className="pt-1 text-xs text-center text-white">{height}%</div>
                </div>
              ))}
            </div>

            {/* Chart Labels */}
            <div className="grid grid-cols-7 gap-2 mt-2 text-xs text-center text-gray-500">
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
