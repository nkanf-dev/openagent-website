import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { HomeIcon, BookOpenIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">

      {/* Background blobs */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: 'var(--glow-a)' }}
      />

      {/* 404 numeral */}
      <p className="mb-2 text-8xl font-bold tracking-tighter text-fd-primary md:text-[10rem]">
        404
      </p>

      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-fd-foreground md:text-3xl">
        Page not found
      </h1>

      <p className="mb-8 max-w-sm text-fd-muted-foreground">
        This agent went offline. The page you&apos;re looking for doesn&apos;t exist or has
        been moved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className={buttonVariants({ variant: 'primary' }) + ' gap-2 rounded-xl'}
        >
          <HomeIcon className="size-4" />
          Back Home
        </Link>
        <Link
          href="/docs"
          className={buttonVariants({ variant: 'secondary' }) + ' gap-2 rounded-xl'}
        >
          <BookOpenIcon className="size-4" />
          Browse Docs
        </Link>
      </div>
    </div>
  );
}
