import React from 'react'

export const AboutUsSection: React.FC = () => {
  return (
    <div className="px-4 pt-72" dir="rtl">
      <div className="mx-auto w-[85%] ">
        <div className="grid items-start justify-start gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-5">
            <div className="pt-8 space-y-8 ">
              <p className="text-2xl font-medium text-gray-600">من نحن</p>
              <h2 className="font-bold  text-gray-900 text-4xl lg:text-6xl lg:leading-[100px]">
  <span className="block">نُبسّط إدارة أسطولك...</span>
  <span className="block">لتُركّز على التوسّع.</span>
</h2>

            </div>
            
            <p className="text-2xl leading-relaxed text-gray-600 ">
              نظامنا مُصمّم لمساعدتك في إدارة الأسطول، الحجوزات، العقود، 
              والصيانة بسهولة ومفعالية. نسعى لتمكين أصحاب الشركات من التحكّم 
              الكامل بأعمالهم من خلال أدوات ذكية وسهلة الاستخدام. رؤيتنا هي 
              تبسيط العمليات وتحقيق نمو مستدام لعملائنا في مختلف أنحاء العالم.
            </p>
            
            {/* Statistics */}
            <div className="flex gap-12 py-8 border-gray-200 border-y">
              <div className="flex w-1/2 gap-8 text-center">
                <p className="text-gray-600">أمان واعتمادية<br />في الأداء</p>
                <div className="text-5xl font-bold text-green-500 ">100%</div>
              </div>
              <div className="flex w-1/2 gap-8 text-center ">
                              <p className="text-gray-600">نسبة رضا<br />المستخدمين</p>

                <div className="text-5xl font-bold text-green-500 ">94%</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="/who we are image.png"
              alt="من نحن - موتاريو"
              className="w-full h-auto shadow-2xl rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  )
} 