import { blogPosts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm mb-6 inline-block">
          ← Kembali ke Beranda
        </Link>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
          <span>
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
        <div
          className="prose max-w-none text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 text-center my-8">
  <p className="text-3xl mb-2">💡</p>
  <p className="text-xl font-bold text-blue-900 mb-2">Mau Mulai Investasi?</p>
  <p className="text-gray-700 mb-4">
    Daftar Ajaib sekarang pakai kode referral <strong>bach908</strong> dan dapatkan bonus saldo untuk top up pertamamu.
  </p>
  <a 
    href="https://ajaib.co.id" 
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
  >
    Daftar Sekarang →
  </a>
</div>
        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
