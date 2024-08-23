import { redirect } from "next/navigation";
import React from "react";

export default function page() {
  const isAdmin = true;
  if (!isAdmin) {
    redirect("/products");
  }
  return <div className="h-[900px]">sports page</div>;
}
