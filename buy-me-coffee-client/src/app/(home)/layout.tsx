"use client";
import { ProfileProvider } from "@/providers/ProfileProvider";
import { Header } from "./_components/Header";
import { Navigation } from "./_components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DonationProvider } from "@/providers/DonationProvider";
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
          <DonationProvider>
            <Header />
            <Navigation />
            <div className="w-full overflow-y-scroll flex justify-center absolute top-20  ">
              {children}
            </div>
          </DonationProvider>
        </ProfileProvider>
      </QueryClientProvider>
    </div>
  );
}
