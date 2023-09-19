import { volumes } from "./data";

export function getNextVolume(slug) {
  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextIndex = currentIndex + 1;
  const next = volumes[nextIndex];
  return next;
}

export function getPrevVolume(slug) {
  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const prevIndex = currentIndex - 1;
  const prev = volumes[prevIndex];
  return prev;
}

export function getVolume(slug) {
  const singleVolume = volumes.find((volume) => volume.slug === slug);

  return singleVolume;
}
