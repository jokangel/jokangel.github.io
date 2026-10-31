import { RichText } from "@/components/RichText";

export function ArticleBody({ text }: { text: string }) {
  return <RichText text={text} />;
}
