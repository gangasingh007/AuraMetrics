import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - AuraMetrics",
  description: "Track and enhance your mental health with AuraMetrics, the ultimate app for monitoring mood, stress, and overall well-being.",
};


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
