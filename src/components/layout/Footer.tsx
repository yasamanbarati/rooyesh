import React from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter, MapPin, Phone, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-indigo-950 pt-20 pb-10 overflow-hidden font-sans" dir="rtl">
            {/* Background Decorative Elements (افکت‌های نوری پس‌زمینه) */}
            <div className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Top Section: CTA & Newsletter */}
                <div className="grid gap-12 lg:grid-cols-12 mb-16 border-b border-white/10 pb-12">
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            همراه مسیر <span className="text-teal-400">یادگیری</span> شما هستیم
                        </h2>
                        <p className="text-slate-200 leading-relaxed max-w-xl text-justify">
                            محیط، پلتفرمی برای دسترسی به باکیفیت‌ترین دوره‌های آموزشی است. ما تلاش
                            می‌کنیم تا فاصله میان یادگیری و بازار کار را با ارائه محتوای پروژه‌محور
                            و به‌روز کاهش دهیم.
                        </p>
                    </div>
                    <div className="lg:col-span-5 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-white font-bold mb-2 text-sm">عضویت در خبرنامه</h3>
                        <p className="text-slate-200 text-xs mb-4">
                            برای دریافت آخرین تخفیف‌ها و مقالات آموزشی ایمیل خود را وارد کنید.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="ایمیل شما..."
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                            />
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0">
                                عضویت
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white font-bold text-xl">
                            {/* Logo Placeholder */}
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Image src="/logo.png" alt={'logo'} width={100} height={48} />
                            </div>
                            محیط
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-200 text-sm">
                                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                                <span>تهران، خیابان آزادی، ناحیه نوآوری شریف، ساختمان محیط</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-200 text-sm">
                                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                                <span dir="ltr">021 - 57605999</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-200 text-sm">
                                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                                <span>info@mohit.online</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Quick Access */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-r-4 border-teal-500 pr-3">
                            دسترسی سریع
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">درباره ما</FooterLink>
                            <FooterLink href="#">تماس با ما</FooterLink>
                            <FooterLink href="#">وبلاگ آموزشی</FooterLink>
                            <FooterLink href="#">قوانین و مقررات</FooterLink>
                            <FooterLink href="#">فرصت‌های شغلی</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-r-4 border-indigo-500 pr-3">
                            دوره‌های محبوب
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="#">برنامه‌نویسی فرانت‌اند</FooterLink>
                            <FooterLink href="#">طراحی رابط کاربری (UI/UX)</FooterLink>
                            <FooterLink href="#">دیجیتال مارکتینگ</FooterLink>
                            <FooterLink href="#">هوش مصنوعی و پایتون</FooterLink>
                            <FooterLink href="#">مدیریت محصول</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Trust Badges (Enamad) */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-white font-bold mb-6">مجوزها و نمادها</h3>
                        <div className="flex gap-4">
                            {/* Enamad Placeholder Style */}
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer shadow-lg shadow-white/5">
                                <img
                                    src="/zarinpal.png" // Placeholder URL
                                    alt="Enamad"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer shadow-lg shadow-white/5">
                                <img
                                    src="/samandehi.png" // Placeholder URL
                                    alt="Samandehi"
                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        © ۱۴۰۳ تمامی حقوق مادی و معنوی این وب‌سایت متعلق به{' '}
                        <span className="text-slate-300">مجموعه محیط</span> می‌باشد.
                    </p>

                    <div className="flex items-center gap-4">
                        <SocialIcon href="#" icon={<Instagram size={18} />} />
                        <SocialIcon href="#" icon={<Twitter size={18} />} />
                        <SocialIcon href="#" icon={<Linkedin size={18} />} />
                        <SocialIcon href="#" icon={<Github size={18} />} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helper Components for Cleaner Code
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <a
                href={href}
                className="text-slate-200 hover:text-teal-400 hover:pr-2 transition-all duration-300 text-sm flex items-center gap-1 group"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors"></span>
                {children}
            </a>
        </li>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-slate-200 hover:bg-teal-500 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/5"
        >
            {icon}
        </a>
    );
}
