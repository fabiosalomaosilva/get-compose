import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src="/nextjs.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p className="text-lg">
          Get started by editing <code>pages/index.js</code>
        </p>
      </div>
    </main>
  );
}
