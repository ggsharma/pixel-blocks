import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pixel Blocks",
  description: "Preprocess images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
    </html>
  );
}
