function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SectionDetail({
  params,
}: {
  params: {
    noteId: String;
    sectionId: String;
  };
}) {
  const item = getRandomItem(["", "ikan"]);
  if(item == ''){
    throw new Error('Item is Empty')
  }
  return (
    <h4>
      Node {params.noteId} Section {params.sectionId}
    </h4>
  );
}
