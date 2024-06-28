import ArticleComponent from '@/components/article/ArticleComponent';
import { getListPosts } from '@/services/post';
import { Box, Container, Typography } from '@mui/material';
// import { BoxList } from '@/app/posts/page.styled';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LMS - Posts List Page',
  description: 'LMS',
};

async function getData() {
  const res = await getListPosts();
  return res;
}

export default function PostPage() {
  console.log('render');
  // const post: IPost[] = await getData();
  return (
    <Container>
      <Box>
        <Typography variant="h1" textAlign={'center'}>
          Post Page
        </Typography>
        {/* <BoxList> */}
        {/* {post.map((post) => {
          return <ArticleComponent data={post} key={post.id} />;
        })} */}
        {/* </BoxList> */}
      </Box>
    </Container>
  );
}
