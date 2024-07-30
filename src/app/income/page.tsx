import Link from 'next/link';

export const IncomePage = () => {
  return (
    <div className="in_development">
      <h1>Income page in development</h1>
      <h2>
        We invite you to visit the <Link href="/customers">Customers</Link> page
      </h2>
    </div>
  );
};
