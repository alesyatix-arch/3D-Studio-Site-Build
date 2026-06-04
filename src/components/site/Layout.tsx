import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col text-foreground">
      {/* Texture layers — fixed, behind content */}
      <div aria-hidden className="site-grid" />
      <div aria-hidden className="site-grain" />
      <div aria-hidden className="site-warm" />
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
