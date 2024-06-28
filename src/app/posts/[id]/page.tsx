import { getPostDetail, getListPosts } from '@/services/post';
import { Box, Container, Typography } from '@mui/material';
import { Metadata } from 'next';
import { cache } from 'react';

const getPost = cache(getPostDetail);
export const revalidate = 5;
export async function generateStaticParams() {
  const posts = await getListPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const post = await getPost(params.id);
//   return {
//     title: post.title,
//     description: post.body,
//   };
// }

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'start'}
        justifyContent={'center'}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={'4rem !important'}
          marginBottom={3}
        >
          {post.title}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
      </Box>
    </Container>
  );
}
