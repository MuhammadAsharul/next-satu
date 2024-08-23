"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get("q"));
  return (
    <div className="h-[900px]">
      <h2>food page</h2>
      <button
        onClick={() => router.push("/products")}
        className="border-4 border-slate-700 text-green-400"
      >
        go back to products
      </button>
    </div>
  );
}
