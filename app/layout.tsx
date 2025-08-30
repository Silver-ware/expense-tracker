import "./globals.css";
import { AuthProvider } from "@/components/context/AuthProvider";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        cz-shortcut-listen="false"
      >
        <AuthProvider>{children}</AuthProvider>
        <Toaster/>
      </body>
    </html>
  );
}
