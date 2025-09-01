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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Expense Tracker</title>
      </head>
      <body
        className={`antialiased`}
        cz-shortcut-listen="false"
      >
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-center" richColors closeButton/>
      </body>
    </html>
  );
}
