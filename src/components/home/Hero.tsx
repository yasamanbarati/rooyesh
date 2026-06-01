import { ArrowLeft, Play, Star, Trophy, Code, MonitorPlay } from "lucide-react";
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gray-50 py-16 lg:py-24"
      dir="rtl"
    >
      {/* Background Blobs (افکت‌های نوری پس‌زمینه) */}
      <div className="absolute top-0 right-0 z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* بخش متنی (Text Content) */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Badge بالای تیتر */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-1.5 shadow-sm z-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700">
                ثبت‌نام ترم جدید شروع شد
              </span>
              <span className="mr-2 rounded bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-700">
                ویژه پاییز
              </span>
            </div>

            {/* تیتر اصلی */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-black leading-[1.3] text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
                مرجع تخصصی <br />
                <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                  یادگیری مهارت‌های نوین
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-500 max-w-lg">
                دسترسی نامحدود به هزاران ساعت آموزش تخصصی، وبینار آنلاین و
                مشاوره با برترین اساتید ایران. آینده شغلی خود را همین امروز
                بسازید.
              </p>
            </div>

            {/* دکمه‌ها */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 text-base font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1 hover:bg-indigo-700">
                <span>شروع یادگیری</span>
                {/* آیکون فلش با انیمیشن در هاور */}
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <button className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-white border border-gray-200 px-6 text-base font-bold text-gray-700 transition-all hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-600/5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <span>مشاهده ویدیو</span>
              </button>
            </div>

            {/* بخش نظرات و آواتارها */}
            <div className="flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex -space-x-3 space-x-reverse">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')`,
                    }}
                  ></div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-xs font-black text-white">
                  +2k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-700 mt-1">
                  <span className="font-black text-lg ml-1">۴.۸</span>
                  رضایت دانشجویان
                </p>
              </div>
            </div>
          </div>

          {/* بخش تصویر (Image Section) */}
          <div className="relative order-1 lg:order-2 perspective-1000">
            {/* Glow پشت تصویر */}
            <div className="absolute -right-20 top-20 z-10 h-80 w-80 rounded-full bg-amber-400/20 blur-[100px] opacity-60"></div>
            <div className="absolute -bottom-10 left-10 z-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-[80px] opacity-60"></div>

            {/* کانتینر اصلی تصویر */}
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-indigo-500/10 ring-1 ring-black/5 transform transition-transform hover:scale-[1.01] duration-500">
              {/* تصویر اصلی */}
              <div
                className="h-full w-full bg-cover bg-center object-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')",
                }}
              >
                {/* کارت شیشه‌ای پایین تصویر */}
                <div className="absolute bottom-0 w-full p-6 z-10">
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur-md shadow-lg border border-white/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600">
                        <MonitorPlay className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-800">
                          وبینار زنده
                        </p>
                        <p className="text-xs text-gray-500">
                          در حال برگزاری...
                        </p>
                      </div>
                    </div>
                    <button className="rounded-lg bg-teal-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-colors">
                      پیوستن
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* آیکون‌های شناور (Floating Elements) */}
            <div className="absolute -right-8 top-1/4 z-20 animate-[bounce_3s_infinite]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/5 p-3 rotate-12 border border-gray-50">
                <Trophy className="h-8 w-8 text-amber-400 fill-amber-400" />
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 z-20 animate-[bounce_4s_infinite]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/20 p-3 -rotate-6">
                <Code className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
