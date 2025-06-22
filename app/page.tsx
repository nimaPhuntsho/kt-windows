import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full  h-200">
          <Image
            src="/images/home-bg.jpg"
            alt="test"
            fill
            className="object-cover "
          />
        </div>
      </main>
    </div>
  );
}
