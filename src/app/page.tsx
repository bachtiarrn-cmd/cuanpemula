import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Monetized Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Belajar cara membuat blog yang menghasilkan passive income melalui Google AdSense dan affiliate marketing
          </p>
          <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Baca Artikel Terbaru
          </button>
        </div>
      </header>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Artikel Terbaru</h2>
          <p className="text-gray-600">Tips dan trik untuk memaksimalkan income dari blog Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kategori Artikel
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Tutorial", "SEO", "Monetasi", "WordPress"].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer"
              >
                <p className="font-semibold text-gray-800">{category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Tentang Blog</h3>
              <p className="text-sm">
                Blog ini dibuat untuk membantu Anda memulai perjalanan monetasi blog dengan cara yang benar dan etis.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Navigasi</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:text-white transition">Beranda</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Semua Artikel</Link></li>
                <li><Link href="/about" className="hover:text-white transition">Tentang Kami</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Kontak</h3>
              <p className="text-sm">Email: info@monetizedblog.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">&copy; 2026 Monetized Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
