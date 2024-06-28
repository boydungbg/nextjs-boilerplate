import unfetch from '@/services/fetch';
import { notFound } from 'next/navigation';

const API_URL = process.env.API_URL || '';

export async function getListPosts(): Promise<Array<IPost>> {
  console.log('getListPosts');

  const res = await unfetch(API_URL, '/posts', 'GET');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return [];
  }

  return res.data as Array<IPost>;
}

export async function getPostDetail(id: string): Promise<IPost> {
  console.log(id);
  try {
    const res = await unfetch(
      API_URL,
      `/posts/${id}`,
      'GET',
      undefined,
      undefined,
      { cache: 'no-store' },
    );
    if (!res.ok) {
      notFound();
    }
    return res.data as IPost;
  } catch (error) {
    notFound();
  }
}
