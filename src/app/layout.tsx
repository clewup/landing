import "./globals.css";
import Header from "@/components/atoms/Header/Header";

export const metadata = {
  title: "CLEWUP - Design & Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-purple-300 max-w-screen overflow-x-hidden text-black scroll-smooth">
          <Header />
          <span className="min-h-screen">{children}</span>
        </div>
      </body>
    </html>
  );
}
