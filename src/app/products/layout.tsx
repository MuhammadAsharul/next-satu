"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <ul className="flex gap-x-4 text-blue-300">
        <Link
          className={pathname === "/products/food" ? "text-red-200" : ""}
          href="/products/food"
        >
          Food
        </Link>
        <Link
          className={pathname === "/products/sports" ? "text-red-200" : ""}
          href="/products/sports"
        >
          Sports
        </Link>
        <Link
          className={pathname === "/products/technology" ? "text-red-200" : ""}
          href="/products/technology"
        >
          Technology
        </Link>
      </ul>
      {children}
    </>
  );
}
