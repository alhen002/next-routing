import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TROTK() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="book-cover" width={140} height={230} />
      <Link href="/volumes/the-two-towers">PREV</Link>
    </>
  );
}
