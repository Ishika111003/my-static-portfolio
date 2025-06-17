import Link from "next/link";

export const metadata = {
  title: "My Static Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about-me">About</Link> |{" "}
            <Link href="/projects">Projects</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
