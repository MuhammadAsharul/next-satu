import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h2>page A1</h2>
      <Link href="/a1/a2">Go to A2</Link>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
