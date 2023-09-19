import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FSOTR() {
  const [nextVolume, setNextVolume] = useState(null);
  const [prevVolume, setPrevVolume] = useState(null);

  const router = useRouter();

  const singleVolume = volumes.find(
    (volume) => volume.slug === router.query.slug
  );

  useEffect(() => {
    function getNextVolume() {
      const currentIndex = volumes.findIndex(
        (volume) => volume.slug === router.query.slug
      );
      const nextIndex = currentIndex + 1;
      const next = volumes[nextIndex];
      return next;
    }
    function getPrevVolume() {
      const currentIndex = volumes.findIndex(
        (volume) => volume.slug === router.query.slug
      );
      const prevIndex = currentIndex - 1;
      const prev = volumes[prevIndex];
      return prev;
    }

    const nextObject = getNextVolume();
    const prevObject = getPrevVolume();
    setNextVolume(nextObject);
    setPrevVolume(prevObject);
  }, [router.query.slug]);

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <>
        {singleVolume ? (
          <>
            <h1>{singleVolume.title}</h1>
            <p>{singleVolume.description}</p>
            <ul>
              {singleVolume.books.map((book) => (
                <li key={book.title}>
                  {book.ordinal} - {book.title}
                </li>
              ))}
            </ul>
            <Image
              src={singleVolume.cover}
              alt="book-cover"
              width={140}
              height={230}
            />
          </>
        ) : (
          <h1>Volume not found</h1>
        )}
      </>
      {prevVolume && <Link href={`/volumes/${prevVolume.slug}`}>PREV</Link>}
      {nextVolume && <Link href={`/volumes/${nextVolume.slug}`}>NEXT</Link>}
    </>
  );
}
