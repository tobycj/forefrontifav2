import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 bg-gray-50 py-8 text-sm">
      <div className="mx-auto max-w-7xl space-y-4 px-4">
        <p>
          © {year} Forefront Independent Financial Advisers Ltd. Authorised and
          regulated by the Financial Conduct Authority (FRN 123456). Registered
          in England & Wales No. 09876543. Registered office: The Maltings,
          Farnham, Surrey GU9 7HZ.
        </p>
        <p>
          The value of investments and the income from them can fall as well as
          rise and you may not get back the amount originally invested. Past
          performance is not a reliable indicator of future results.
        </p>
        <p>
          This website is for UK residents only. Nothing on this site
          constitutes personalised financial advice. Tax treatment depends on
          individual circumstances and may change in future. You may be eligible
          for compensation from the Financial Services Compensation Scheme
          (FSCS) if we cannot meet our obligations.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy">Privacy Notice</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
