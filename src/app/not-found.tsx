import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary" style={{ marginTop: "2rem" }}>
        Back to Home
      </Link>
    </section>
  );
}
