import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

type WhitePaper = {
  title: string,
  date: Date,
};

export async function load({ params }) {
  const post = await import(`../${params.wp}.md`)
  const { title, date } = post.metadata as WhitePaper
  const content = post.default
  
  return {
    content,
    title,
    date,
  }
}