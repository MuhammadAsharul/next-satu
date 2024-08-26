import Card from "@/app/components/Card";
import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <h3>Social</h3>
        <Link href={"/dashboard/instagram"}>Go to Instagram</Link>
      </div>
    </Card>
  );
}
