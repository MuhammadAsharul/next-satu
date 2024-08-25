"use client";
function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const item = getRandomItem(["", "ikan"]);
  if (item == "") {
    throw new Error("Item is Empty");
  }
  return (
    <>
      <div className="">layout note</div>
      {children}
    </>
  );
}
