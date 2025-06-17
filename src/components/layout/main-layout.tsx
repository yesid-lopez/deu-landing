import React from 'react';
import Footer from '@/components/footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed height announcement bar */}
      {/* <div className="sticky top-0 z-50">
        <AnnouncementBar />
      </div> */}
      
      {/* Main content with consistent padding */}
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 
