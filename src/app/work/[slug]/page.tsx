import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { works } from '@/shared/content/works';
import Case from '@/ui/sections/Case/Case';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  return { title: work ? `${work.client} — Lo Eklöf Örnestål` : 'Lo Eklöf Örnestål' };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const index = works.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const next = works[(index + 1) % works.length];
  return <Case work={works[index]} next={next} />;
}
