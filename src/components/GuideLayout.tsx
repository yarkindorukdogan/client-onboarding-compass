
import { Sidebar } from './Sidebar';
import { Toaster } from '@/components/ui/sonner';

interface GuideLayoutProps {
  children: React.ReactNode;
}

export function GuideLayout({ children }: GuideLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl py-8 px-4 md:px-8">
          {children}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
