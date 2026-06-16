export interface CourseProps {
    id: number;
    title: string;
    category: string;
    rating: number;
    duration: number; // مثلاً "۵۶ ساعت"
    discount?: number; // درصد تخفیف
    originalPrice?: number; // قیمت اصلی (در صورت تخفیف)
    instructor: {
        name: string;
        avatar: string; // URL تصویر پروفایل مدرس
    };
    coverImage: string; // URL تصویر کاور دوره
    slug: string;
}
