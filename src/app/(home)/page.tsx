import Link from 'next/link';
import './global.css';

export default function HomePage() {
  return (
    
      <main className="flex flex-1 flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello Esker</h1>
        <p className="text-fd-muted-foreground">
          Click Documentation{' '}
          <Link
            href="/docs"
            className="text-fd-foreground font-semibold underline"
          >
            /docs
          </Link>{' '}
          and read about this app.
        </p>
      </main>
      
  );
}


