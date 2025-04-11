import { Header } from "./_components/Header";
import { Navigation } from "./_components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Header />
      <div className="flex-reverse w-full">
        <div className="w-full flex justify-center overflow-scroll fixed top-20">
          {children}
        </div>
        <Navigation />
      </div>
    </div>
  );
}
