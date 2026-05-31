import { useEffect } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import BlogImage from "@/components/blog/BlogImage";
import { sortedPosts } from "@/data/blogPosts";

export default function Blog() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  useEffect(() => {
    document.title = "Inzichten & Innovatie | Masters in Telecom";
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="font-default font-bold text-4xl md:text-6xl leading-tight max-w-3xl">
            Inzichten &amp; Innovatie
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Wat er speelt in telecom, beveiliging en connectiviteit. Concreet
            uitgelegd, zonder jargon, met de keuzes die er voor jouw bedrijf toe
            doen.
          </p>
          <a
            href="#artikelen"
            className="inline-flex items-center gap-2 mt-9 rounded-[0.9375rem] bg-secondary px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Lees de artikelen
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      </section>

      {/* Artikelen */}
      <section id="artikelen" className="bg-background">
        <div
          ref={ref}
          className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="font-default font-bold text-3xl md:text-4xl text-foreground">
              Laatste inzichten
            </h2>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              De nieuwste berichten over mobiele beveiliging, scanning,
              abonnementen en internet. Kort, duidelijk en gericht op wat het
              voor je werk betekent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {sortedPosts.map((post, i) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col overflow-hidden rounded-lg border border-foreground/10 bg-white transition-all duration-500 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <BlogImage
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-[#951B81]/10 text-[#951B81] text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-default font-bold text-xl text-foreground leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-foreground/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between text-sm text-foreground/50">
                    <span>
                      <time dateTime={post.isoDate}>{post.date}</time>
                      <span className="mx-2" aria-hidden="true">
                        &middot;
                      </span>
                      {post.readingTime}
                    </span>
                    <span className="text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Lees meer &rarr;
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
