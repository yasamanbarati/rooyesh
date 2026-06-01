import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Star, ShoppingBag } from "lucide-react"
import { CustomButton } from "../ui/button"

export default function Courses() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-black">
          دوره‌های برگزیده هفته
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card
              key={i}
              className="transition hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gray-200 rounded-t-xl" />
              </CardHeader>

              <CardContent className="space-y-3 pt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-yellow-400" />
                  <span className="text-sm font-bold">4.8</span>
                </div>

                <h3 className="font-bold">
                  آموزش جامع پایتون برای هوش مصنوعی
                </h3>
              </CardContent>

              <CardFooter className="flex justify-between">
                <span className="font-black text-indigo-700">
                  ۱,۲۵۰,۰۰۰ تومان
                </span>
                <CustomButton size="icon" className="bg-primary">
                  <ShoppingBag className="h-4 w-4" />
                </CustomButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
