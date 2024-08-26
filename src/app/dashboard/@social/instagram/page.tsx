import Card from "@/app/components/Card";
import React from "react";
import Link from "next/link";
export default function Instagram() {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <h3>Instagram</h3>
        <Link href={"/dashboard"}>Go Back to Social</Link>
      </div>
    </Card>
  );
}
