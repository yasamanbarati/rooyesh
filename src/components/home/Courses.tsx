import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingBag, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CustomButton } from '../ui/button';
import { coursesData } from '@/services/servers/mock';
const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
};
export default function Courses() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* هدر بخش با عنوان و لینک مشاهده همه */}
                <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="text-center sm:text-right">
                        <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
                            <span className="size-1.5 rounded-full bg-indigo-700"></span>
                            محبوب‌ترین‌ها
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                            دوره‌های برگزیده هفته
                        </h2>
                    </div>
                    <a
                        href="/courses"
                        className="group flex items-center gap-2 rounded-xl bg-white border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-800 transition-all hover:border-indigo-700 hover:text-indigo-700"
                    >
                        <span>مشاهده همه</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
                    </a>
                </div>

                {/* گرید دوره‌ها */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {coursesData.map(course => (
                        <Card
                            key={course.id}
                            className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* بخش تصویر کاور و برچسب دسته‌بندی */}
                            <CardHeader className="relative aspect-[4/3] w-full overflow-hidden p-0">
                                <div className="absolute right-3 top-3 z-10 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 backdrop-blur-md shadow-sm">
                                    {course.category}
                                </div>
                                <div className="relative h-full w-full">
                                    <Image
                                        src={course.coverImage}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </CardHeader>

                            <CardContent className="flex flex-1 flex-col p-5">
                                {/* ردیف اول: امتیاز و مدت زمان */}
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="h-4 w-4 fill-yellow-500" />
                                        <span className="text-sm font-black text-gray-800 pt-0.5">
                                            {course.rating}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                        <Clock className="h-3 w-3" />
                                        {course.duration} ساعت
                                    </span>
                                </div>

                                {/* عنوان دوره */}
                                <h3 className="mb-2 text-lg font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2">
                                    <a href={`/courses/${course.slug}`}>{course.title}</a>
                                </h3>

                                {/* اطلاعات مدرس */}
                                <div className="mt-auto space-y-4 pt-4">
                                    <div className="flex items-center gap-2.5">
                                        <div className="relative size-8 overflow-hidden rounded-full border border-gray-100 bg-gray-200">
                                            <Image
                                                src={course.instructor.avatar}
                                                alt={course.instructor.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-500">
                                            {course.instructor.name}
                                        </span>
                                    </div>

                                    {/* قیمت و دکمه خرید */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div className="flex flex-col">
                                            {typeof course.originalPrice === 'number' &&
                                                typeof course.discount === 'number' && (
                                                    <span className="text-xs text-gray-400 line-through decoration-red-400">
                                                        {formatPrice(course.originalPrice)}
                                                    </span>
                                                )}
                                            {typeof course.originalPrice === 'number' && (
                                                <span className="text-lg font-black text-indigo-700">
                                                    {formatPrice(
                                                        typeof course.discount === 'number'
                                                            ? Math.round(
                                                                  course.originalPrice -
                                                                      (course.originalPrice *
                                                                          course.discount) /
                                                                          100
                                                              )
                                                            : course.originalPrice
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                        <CustomButton
                                            size="icon"
                                            className="bg-indigo-700 text-white shadow-lg shadow-indigo-700/20 hover:scale-110 justify-items-center"
                                            aria-label="افزودن به سبد خرید"
                                        >
                                            <ShoppingBag className="h-4 w-4" />
                                        </CustomButton>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
