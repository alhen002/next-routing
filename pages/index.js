import Link from "next/link";

export default function HomePage() {
  return (
    <header>
      <h1>Hello from Next.js</h1>
      <nav>
        <Link href="/volumes">Volumes</Link>
      </nav>
    </header>
  );
}
