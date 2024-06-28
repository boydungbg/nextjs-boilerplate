import {
  ArticleContent,
  ArticleDescription,
  ArticleTitle,
} from "@/components/article/ArticleComponent.styled";
import { ROUTE_POST } from "@/constants/route";
import Link from "next/link";

type ArticleComponentProps = {
  data: IPost;
};

export default function ArticleComponent({ data }: ArticleComponentProps) {
  return (
    <ArticleContent>
      <Link href={`${ROUTE_POST}/${data.id}`} prefetch>
        <ArticleTitle variant="body1">{data.title}</ArticleTitle>
        <ArticleDescription variant="body1">{data.body}</ArticleDescription>
      </Link>
    </ArticleContent>
  );
}
