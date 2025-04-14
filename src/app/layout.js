import { Geist, Geist_Mono } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SportAI",
  description: "Sports social media with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg- text-white`}>
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ConvexClientProvider>
              {children}
            </ConvexClientProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
