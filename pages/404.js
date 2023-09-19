import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
export default function Custom404() {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const IntervalId = setTimeout(() => {
      setInterval(() => {}, 1000);
    }, 1000);
  });

  return (
    <h1>
      404 - Product not<span ref={ref}></span> found
    </h1>
  );
}
