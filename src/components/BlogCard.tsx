import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
}

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40"></div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.readTime} min read</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t">
          <time className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 h-24 flex items-center justify-center text-gray-400 text-sm">
        [Google Ad Space]
      </div>
    </article>
  );
}
