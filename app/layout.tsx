import "./globals.css";
import { AuthProvider } from "@/components/context/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",            
});

export const metadata = {
  title: "Personal Expense Tracker",
  description: "Track your expenses with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Expense Tracker</title>
      </head>
      <body
        className={`${sourceSans.variable} font-sans antialiased`}
        cz-shortcut-listen="false"
      >
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-center" richColors closeButton/>
      </body>
    </html>
  );
}
