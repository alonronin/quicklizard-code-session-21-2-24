import { revalidatePath } from 'next/cache';
import { SubmitButton } from '../../components/submit-button';

const likes = new Map();

export default async function Posts({ params }: { params: { id: string } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  //delay 5 seconds
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  async function likePost() {
    'use server';

    likes.set(params.id, (likes.get(params.id) || 0) + 1);
    revalidatePath('/posts/[postId]');
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="capitalize scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex items-center gap-4">
        {post.title}
        <form action={likePost} className="flex items-center">
          <SubmitButton>{likes.get(params.id) || 0} Likes</SubmitButton>
        </form>
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 first-letter:uppercase">
        {post.body}
      </p>
    </div>
  );
}
