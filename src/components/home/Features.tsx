import { featuresData } from '@/services/servers/mock';

export default function Features() {
    return (
        <section className="border-y border-gray-100 bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuresData.map(feature => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className={`group relative flex items-start gap-4 rounded-3xl bg-gray-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent ${feature.borderHoverColor}`}
                            >
                                {/* آیکون با افکت هاور */}
                                <div
                                    className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${feature.iconBgColor} ${feature.iconTextColor} shadow-sm border border-gray-100 transition-colors ${feature.hoverBgColor} ${feature.hoverTextColor}`}
                                >
                                    <IconComponent className="size-7" />
                                </div>

                                {/* متن */}
                                <div>
                                    <h3 className="font-black text-lg text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
