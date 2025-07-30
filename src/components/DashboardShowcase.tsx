import React from 'react';


const DashboardShowcase = () => {
  return (
    <section
      className="h-[85vh] bg-[url('/Frame.png')] bg-cover bg-center overflow-visible flex flex-col items-center justify-center relative"
    >
      {/* العنوان */}
      <div className="max-w-4xl text-center transform translate-y-20">
        <h2 className="mb-10 text-5xl font-bold text-white md:text-6xl">إدارة الحجوزات</h2>
        <p className="text-2xl leading-relaxed md:text-3xl text-white/90">
          تتيح لك تنظيم وتتبع كافة عمليات تأجير السيارات وسجل الحجوزات بسهولة واحترافية في مكان واحد.
        </p>
      </div>

      {/* هنا عملنا wrapper relative علشان الـ absolute يحسب منه */}
      <div className="relative flex-1 w-full ">
        {/* المجموعة الـ absolute اللي بتحوي الثلاث صور */}
        <div
          className="absolute bottom-0 z-30 flex items-end justify-center w-full space-x-6 overflow-x-hidden transform -translate-x-1/2 translate-y-1/2 left-1/2"
        >
          {/* صورة يمين */}
          <img
            src="/صفحة تفاصيل السيارة 1.png"
            alt="الحجوزات"
          
            className="w-[50%]  rounded-2xl "
          />

          {/* الصورة الرئيسية في النص */}
          <img
            src="/الحجوزات 1.png"
            alt="إدارة العقود"
           
            className="w-[70%]  rounded-2xl"
          />

          {/* صورة شمال */}
          <img
            src="/إدارة العقود 1.png"
            alt="تفاصيل السيارة"
      
            className="w-[50%]  rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
