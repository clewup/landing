import "./globals.css";
import Footer from "@/components/atoms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import ThemeProvider from "@/contexts/Theme/ThemeContext";

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
        <ThemeProvider>
          <div className="max-w-screen overflow-x-hidden">
            <Header />
            <span className="min-h-screen">{children}</span>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
