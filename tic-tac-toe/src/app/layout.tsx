import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Tic-Tac-Toe",
  description: "A simple Tic-Tac-Toe game built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
