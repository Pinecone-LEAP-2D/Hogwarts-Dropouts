import { Header } from "@/components/Header";
import { Navigation } from "./_components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Navigation />
        {children}
      </div>
    </div>
  );
}
