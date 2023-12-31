import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Introduction() {
  const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button>
        <Link href={`/volumes/${randomVolume.slug}`}>Random</Link>
      </button>
    </>
  );
}
