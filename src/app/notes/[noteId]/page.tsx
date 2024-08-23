import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    noteId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Note Detail ${params.noteId}`,
  };
};
export default function Note({ params, searchParams }: any) {
    console.log(searchParams)
  if (parseInt(params.noteId) > 100) {
    notFound();
  }
  return <h3>Note Detail {params.noteId}</h3>;
}
