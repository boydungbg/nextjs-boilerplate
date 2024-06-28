import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LMS',
  description: 'LMS',
};

export default function HomePage() {
  console.log('render HomePage');

  return <main>Hello world</main>;
}
