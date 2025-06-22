import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default async function Home() {
  const services = [
    {
      title: "Sliding windows",
      slug: "sliding-windows",
      description:
        "Smooth-gliding sliding windows that offer unobstructed views and easy ventilation—perfect for modern and compact spaces.",
      image: "/images/services/sliding-windows.jpg",
      icon: "Window",
      features: ["Space-efficient", "Modern design", "Easy operation"],
      featured: true,
    },
    {
      title: "Sliding doors",
      slug: "sliding-doors",
      description:
        "Elegant and space-saving sliding doors that seamlessly connect indoor and outdoor areas while maximizing light and access.",
      image: "/images/services/sliding-doors.jpg",
      icon: "DoorOpen",
      features: ["Indoor-outdoor flow", "Smooth glide", "Custom sizes"],
      featured: true,
    },
    {
      title: "Awing windows",
      slug: "awing-windows",
      description:
        "Top-hinged awning windows that provide excellent airflow and can be left open even when it rains.",
      image: "/images/services/awing-windows.jpg",
      icon: "Wind",
      features: ["Weatherproof ventilation", "Secure lock", "Energy-efficient"],
      featured: false,
    },
    {
      title: "Sunroom or glass house",
      slug: "sunroom-glass-house",
      description:
        "Bespoke sunrooms and glass houses that blend outdoor beauty with indoor comfort—perfect for relaxing or entertaining.",
      image: "/images/services/sunroom-glass-house.jpg",
      icon: "Sun",
      features: [
        "Natural lighting",
        "Year-round use",
        "Increased property value",
      ],
      featured: true,
    },
    {
      title: "Pargolas",
      slug: "pergolas", // corrected typo from "Pargolas"
      description:
        "Stylish pergolas that add character, shade, and structure to patios or gardens—ideal for lounging or outdoor dining.",
      image: "/images/services/pergolas.jpg",
      icon: "Trees",
      features: [
        "UV protection",
        "Custom timber/aluminium",
        "Freestanding or attached",
      ],
      featured: false,
    },
    {
      title: "Outdoor decks",
      slug: "outdoor-decks",
      description:
        "Durable decking solutions designed to extend your living space and create a warm, inviting outdoor environment.",
      image: "/images/services/outdoor-decks.jpg",
      icon: "Layers",
      features: ["Slip-resistant", "Weather-treated", "Low-maintenance"],
      featured: true,
    },
    {
      title: "Balustrade fencing",
      slug: "balustrade-fencing",
      description:
        "Modern balustrade fencing for balconies, stairs, and decks—offering safety without compromising on visual appeal.",
      image: "/images/services/balustrade-fencing.jpg",
      icon: "ShieldCheck",
      features: [
        "Glass or aluminium",
        "Compliant with standards",
        "Elegant design",
      ],
      featured: false,
    },
  ];

  return (
    <div>
      <main className={`flex flex-col gap-2`}>
        <div className={`flex flex-col md:flex-row gap-2 mt-5`}>
          <div
            className={`relative w-full  items-start justify-center flex flex-col gap-4 bg-[#2C2C2C] p-7 rounded-sm text-[#FED2E2] min-h-[500px] `}
          >
            <h1 className={`text-5xl `}>
              Transform Your Space with Stylish{" "}
              <span className={`font-bold text-[#FFF287]`}>Windows</span> &
              Outdoor Living
            </h1>
            <h2 className={`text-md text-justify`}>
              Expert installation of sliding windows, sunrooms, decks, and more
              across Canberra.
            </h2>
            <Link href="/contact">
              <Button variant="secondary" size="custom">
                Get in touch
              </Button>
            </Link>
          </div>
          <div className={`w-full h-[600px] relative`}>
            <Image
              className={`rounded-sm`}
              src="/images/home-bg.jpg"
              fill
              alt="bg-home"
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-start gap-2 bg-[#102E50] text-white p-6 rounded-sm`}
        >
          <h1 className={`text-4xl font-bold`}>Our Services</h1>
          <div className="flex w-full overflow-x-auto  gap-2">
            {services.map((service) => (
              <Card className={`min-w-[300px]`} key={service.title}>
                <CardHeader>
                  <CardTitle> {service.title} </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription> {service.description} </CardDescription>
                </CardContent>
                <CardFooter>
                  {service.features.map((feature, index) => (
                    <CardDescription key={index}> {feature} </CardDescription>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
