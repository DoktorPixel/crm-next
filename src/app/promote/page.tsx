import Link from 'next/link';
export const PromotePage = () => {
  return (
    <div className="in_development">
      <h1>Promote page in development</h1>
      <h2>
        We invite you to visit the <Link href="/customers">Customers</Link> page
      </h2>
    </div>
  );
};
