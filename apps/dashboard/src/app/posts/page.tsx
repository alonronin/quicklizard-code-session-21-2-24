import Link from 'next/link';

export default async function Posts() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="hover:underline">
            <span className="capitalize">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
