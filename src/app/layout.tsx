import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/lib-client/ReactQueryProvider";


const font = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web app starte with next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReactQueryProvider>
          <div className="max-w-md mx-auto p-4">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
