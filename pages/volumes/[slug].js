import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getVolume, getNextVolume, getPrevVolume } from "@/lib/utils";
import Custom404 from "../404";

export default function VolumeDetail() {
  const [volumeState, setVolumeState] = useState();

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const volume = getVolume(slug);
    const nextVolume = getNextVolume(slug);
    const prevVolume = getPrevVolume(slug);
    setVolumeState({
      ...volume,
      next: nextVolume,
      prev: prevVolume,
    });
  }, [slug]);

  if (!volumeState?.slug) {
    return <Custom404 />;
  }

  return (
    <>
      <p></p>
      <Link href="/volumes">← All Volumes</Link>
      <>
        {volumeState ? (
          <>
            <h1>{volumeState.title}</h1>
            <p>{volumeState.description}</p>
            <ul>
              {volumeState.books.map((book) => (
                <li key={book.title}>
                  {book.ordinal} - {book.title}
                </li>
              ))}
            </ul>
            <Image
              src={volumeState.cover}
              alt="book-cover"
              width={140}
              height={230}
            />
          </>
        ) : (
          <h1>Volume not found</h1>
        )}
      </>
      {volumeState?.prev && (
        <Link href={`/volumes/${volumeState.prev.slug}`}>PREV</Link>
      )}
      {volumeState?.next && (
        <Link href={`/volumes/${volumeState.next.slug}`}>NEXT</Link>
      )}
    </>
  );
}
