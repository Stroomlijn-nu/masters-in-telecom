import { useEffect } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import BlogImage from "@/components/blog/BlogImage";
import type { BlogPost } from "@/data/blogPosts";

// Eén layout voor alle posts, zodat elk bericht er identiek uitziet.
export default function BlogPostLayout({ post }: { post: BlogPost }) {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  // Documenttitel zetten (eenvoudige SEO zonder extra library).
  useEffect(() => {
    document.title = `${post.title} | Masters in Telecom`;
  }, [post.title]);

  return (
    <article>
      {/* Header met afbeelding en gradient-overlay */}
      <header className="relative bg-primary overflow-hidden">
        <BlogImage
          src={post.image}
          alt={post.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(149,27,129,0.92) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="relative max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Terug naar alle artikelen
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-block bg-white/15 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-white/70 text-sm">
              <time dateTime={post.isoDate}>{post.date}</time>
              <span className="mx-2" aria-hidden="true">
                &middot;
              </span>
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-white font-default font-bold text-3xl md:text-5xl leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <div
        ref={ref}
        className={`max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium mb-10">
          {post.intro}
        </p>

        <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
          {post.body.map((block, i) => {
            if (block.type === "h") {
              return (
                <h2
                  key={i}
                  className="text-2xl md:text-3xl font-default font-bold text-secondary pt-6"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-3 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#951B81]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        {/* Rustige, niet-pusherige afsluiting */}
        <div className="mt-14 border-t border-foreground/10 pt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[0.9375rem] bg-secondary px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Neem contact op
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
}
