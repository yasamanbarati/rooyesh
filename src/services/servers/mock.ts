import { Award, Infinity, MonitorPlay } from 'lucide-react';
import { CourseProps } from './type';

export const coursesData: CourseProps[] = [
    {
        id: 1,
        title: 'آموزش جامع پایتون برای هوش مصنوعی',
        category: 'برنامه‌نویسی',
        rating: 4.8,
        duration: '۵۶ ساعت',
        price: 1250000,
        originalPrice: 2500000,
        instructor: {
            name: 'مهندس رضایی',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG0M6CCn7TiQR6mlLsfwpejihEL6O0b1vXZ6j9_y00oo7Qh9kqZ5XJfCKQAEdZEwdOJb1xKuJHJvE1YYFIoY7BuGzxw8u2F-8U3FFxwytR6fikRxpcp2-Q-zcDSlAX6AeMzbGQE2eUbQUnRPe7TMkqlxaK1h3h5ajcM5y4lzdh5wfiyJRkC7af2icQDR7_YQe6GlGtDEHVBQ7xwDvli-jBIpfpz-pVmLxO4c3917IDZ1wLsbUtf15F3srs-i4bz8zKNn4D_IWKWizs',
        },
        coverImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hg43NpG0qjUGRKUVhLOYQdQxTuK6QArREMdC0YBcqVkjhqihyKCgss4rbxFswZx6qUuxP4AfNYsAs1cE6ttgi7HnkTRDkEEnsXr8peDMN6xt8zf_TrpnKKX3EkrgrZ2-vhE907TsJXWrTGGCzC_cVnUBwjW3P7hX4bJs3zLRMtc3sDhrwvseMSwhor_2HVIQCV6777tb99ktNEZuc-JBdWa4ABeWODk9O_CPFXYYgiRDV88cX59VF6bx8TVYDf5v0q2nzpcaS-4m',
        slug: 'python-ai',
    },
    {
        id: 2,
        title: 'استاد اینستاگرام و استراتژی محتوا',
        category: 'مارکتینگ',
        rating: 4.9,
        duration: '۳۲ ساعت',
        price: 950000,
        originalPrice: 1800000,
        instructor: {
            name: 'سارا محمدی',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5RnRrX3uKVhvLjWfm9AXf1e7VoI4ZkI0BwMSXuR1NOEs3b6dv2DqYJdyxAi8pHfb8rZYE0CcI4Pa7HogO_8q8e7gSe2OUdtA1ZlcZK4iWU2twP67rnQSm7y8JWHlqWFiipWB_pbQh3TitI7bb_ligddFUj0OIIy9i_eNUOfFEYLKOEbvgRQG7cldxhNV3A91Q7JAZenRfjrcm5XTvBzfV0IhiNCQYf542TJmd1ftTG5Y83iJp4NXPPmLr9E69BxeAdduQbLTf4N4p',
        },
        coverImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZjTQC4shRBa57ihbqkxTFjc2e-eQil1LWu1a1PiSVfATDez2sC_eoYfR1EgsyiRLwSKmWbUasb4LHu61Z_Xi1wUHiE_OiwdGJDo4xWg8yMrKPY8VG7HSp6JT5ZdTkxMHXVZ0B_8plYKDgC-OkdSwZWOTpk05FO5tYykuYZGU0NOVKixip7Ld--h54x3O3YNOTXLJeInwhmMQh4jza6l3WSJzeWIcfzRBD9CNEiXeRMj5omcRngzcafUFpST7Xos5KOlVIpRE3INX',
        slug: 'instagram-master',
    },
    {
        id: 3,
        title: 'طراحی رابط کاربری (UI/UX) پیشرفته',
        category: 'طراحی',
        rating: 4.7,
        duration: '۴۵ ساعت',
        price: 3000000,
        originalPrice: undefined, // بدون تخفیف
        instructor: {
            name: 'امید کیانی',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXpiphJ9vPaxyxeYBdqxEsQr3nTsFGBSzVh2-BMi1AKW1WNWYHVOQUGoKA0H-WLDSTAeAAbf4vVgkiix3WQGboPj_jP0el37WBFh2ZVhNTF8EkyEEqtcBKW_BXefZL-6gKnuTMJ3qfudL1Ro91vbnCM4tlTGAMq9OVkthLBaaHwdZdVE5YIsO-GV1vQO4Qxh95JLbb8aOAxirwP8uIFdKp_cmEazCELrEbiyquZIurVGXA2CB----JdfG-VvezQk6s4Qhvg24-Mb_Y',
        },
        coverImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhtKng1ZwpOqhp-1R6HFjUq1VH0JHZvhiqNlzi9W_LDovkKsfb4cRxPTzR0ePYtiMdYzvE_Oci5dHti8nf0zTIiGJGgcigqoe7acCtE2Xd9FA9c2GM0cPz6pX6avjmp4kCpa9w5nyeUgy9_b6W6puY7r9KbXiP4hyboGAbdLCxhvabiZvhDA6IatROYEXTyEj8i-E7qLQ-TQ2ka_MOrwL00cvhVDvQvAZK9kIGhGpsKjgEX4c8j9VzbObL8TRSfs1_ZU4rHJwvQUqe',
        slug: 'ui-ux-advanced',
    },
    {
        id: 4,
        title: 'مدیریت محصول: از ایده تا اجرا',
        category: 'مدیریت',
        rating: 5.0,
        duration: '۲۸ ساعت',
        price: 3800000,
        originalPrice: 4200000,
        instructor: {
            name: 'لیلا احمدی',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcyXA49BBOnlLTw9E9HH3dfRC-DjhvHQepftbnUCRrihlZZdEBhXTNKiS_LIFrVXBO7Mut7xi2dOgRWVaxRlYbcVkAwKkpK65PhGnPSfTH1GCIUs4rtnvKMVAxJmiR8HC5oxIZss1QeP9zv12jvlpWl0dVZJtDRG-E6mIpcg24k5tqSgL2UtC9NUpfHCkzPqwgf5GMx52Ic1FkVHkHMXvnYB0sJcxSMP4yqHQCX5tTbRaciubWedMvedkkJZF7vXE7RUZJqz9ss_YN',
        },
        coverImage:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBYpGAb-mBbszEi0_JxzIHsqGgJVXmI-bNKjUpYUbwcg99yJKijiYQKBeVGIRjFB3GEnfwmkhT3Fu8LwAvyZImS-bSgi4IKKUv38u2aX1jhvrL0TUnm4PmtU-4D2J9RwcmA6c34-giJW2ktuBRfwFdj1tOLKMnKu9mTcunUo-ygORYmgy_ojI7yF10-1WokeHE0xywWmOyBq2OzyxRPAPdoU5iIxM1e_0-qdoe6YNTso2p1pJnK37zbXMlfTZ5eWfjCNPlxu6CWHKgW',
        slug: 'product-management',
    },
];
export const featuresData: Feature[] = [
    {
        id: 1,
        title: 'کلاس‌های آنلاین تعاملی',
        description: 'امکان پرسش و پاسخ زنده، اشتراک‌گذاری صفحه و تعامل مستقیم با اساتید.',
        icon: MonitorPlay,
        iconBgColor: 'bg-white',
        iconTextColor: 'text-primary',
        hoverBgColor: 'group-hover:bg-primary',
        hoverTextColor: 'group-hover:text-white',
        borderHoverColor: 'hover:border-primary/10',
    },
    {
        id: 2,
        title: 'گواهینامه معتبر',
        description: 'دریافت مدرک پایان دوره با قابلیت استعلام آنلاین و افزودن به رزومه شغلی.',
        icon: Award,
        iconBgColor: 'bg-white',
        iconTextColor: 'text-secondary',
        hoverBgColor: 'group-hover:bg-secondary',
        hoverTextColor: 'group-hover:text-white',
        borderHoverColor: 'hover:border-secondary/20',
    },
    {
        id: 3,
        title: 'دسترسی مادام‌العمر',
        description: 'مشاهده نامحدود ویدیوهای ضبط شده کلاس‌ها و دریافت آپدیت‌های جدید.',
        icon: Infinity,
        iconBgColor: 'bg-white',
        iconTextColor: 'text-yellow-500',
        hoverBgColor: 'group-hover:bg-accent',
        hoverTextColor: 'group-hover:text-gray-800',
        borderHoverColor: 'hover:border-accent/50',
    },
];

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType; // کامپوننت آیکون از lucide-react
    iconBgColor: string; // کلاس Tailwind برای پس‌زمینه آیکون در حالت عادی
    iconTextColor: string; // کلاس رنگ آیکون در حالت عادی
    hoverBgColor: string; // کلاس پس‌زمینه هاور آیکون
    hoverTextColor: string; // کلاس رنگ هاور آیکون
    borderHoverColor: string; // کلاس رنگ حاشیه کارت در حالت هاور
}
