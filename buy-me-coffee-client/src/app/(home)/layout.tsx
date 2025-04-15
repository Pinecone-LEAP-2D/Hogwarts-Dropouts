"use client";
import { ProfileProvider } from "@/providers/ProfileProvider";
import { Header } from "./_components/Header";
import { Navigation } from "./_components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <Header />
          <Navigation />
          <div className="w-full overflow-y-scroll flex justify-center absolute top-20  ">
            {children}
          </div>
        </ProfileProvider>
      </QueryClientProvider>
    </div>
  );
}
