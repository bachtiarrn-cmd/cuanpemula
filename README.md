# Monetized Blog - Next.js

Blog yang dioptimalkan untuk monetasi dengan Google AdSense dan Affiliate Marketing.

## Fitur

✅ **SEO Optimized** - Struktur yang tepat untuk ranking di search engine
✅ **Google AdSense Ready** - Template siap integrate dengan AdSense
✅ **Responsive Design** - Tampilan sempurna di semua device
✅ **Fast Performance** - Next.js untuk loading cepat
✅ **TypeScript** - Type-safe development
✅ **Tailwind CSS** - Styling modern dan cepat

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:3000`

## Struktur Project

```
monetized-blog/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout dengan AdSense
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── AdSense.tsx   # AdSense integration
│       └── BlogCard.tsx  # Blog post card
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Monetasi

### Google AdSense
1. Daftar di [Google AdSense](https://adsense.google.com)
2. Ganti `ca-pub-xxxxxxxxxxxxxxxx` di `src/components/AdSense.tsx` dengan Publisher ID Anda
3. Tambahkan ads di halaman dengan tag berikut:

```tsx
<ins className="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="0000000000"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### Affiliate Marketing
Tambahkan affiliate links untuk produk/layanan yang relevan di artikel Anda.

## Build untuk Production

```bash
npm run build
npm start
```

## Tips Monetasi

1. **Content is King** - Fokus pada konten berkualitas tinggi
2. **SEO** - Optimize untuk keyword dengan search volume tinggi
3. **Traffic** - Bangun audience loyal melalui social media
4. **Placement** - Tempatkan ads di spot yang visible tapi tidak mengganggu
5. **Test** - A/B test berbagai placement dan format ads

## Next Steps

- [ ] Setup Google AdSense account
- [ ] Buat 10-20 artikel pillar
- [ ] Setup analytics (Google Analytics)
- [ ] Optimize untuk mobile
- [ ] Bangun email list
- [ ] Buat content calendar

---

**Happy Monetizing! 💰**
