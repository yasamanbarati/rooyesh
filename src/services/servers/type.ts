export interface CourseProps {
    id: number;
    title: string;
    category: string;
    rating: number;
    duration: string; // مثلاً "۵۶ ساعت"
    price: number; // قیمت فعلی به تومان
    originalPrice?: number; // قیمت اصلی (در صورت تخفیف)
    instructor: {
        name: string;
        avatar: string; // URL تصویر پروفایل مدرس
    };
    coverImage: string; // URL تصویر کاور دوره
    slug: string;
}
