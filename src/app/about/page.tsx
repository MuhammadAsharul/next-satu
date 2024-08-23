import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: { absolute: "About Page" },
  description: "this is about page",
};

export default function Page() {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}
