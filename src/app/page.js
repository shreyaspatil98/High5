<<<<<<< HEAD
import Navbar from '@/components/Navbar';
=======
import FloatingChatbot from '../components/FloatingChatbot';
>>>>>>> 1862cab2759aa1fa192f8c6bff4d98d48c483f9b
import PublicationsList from '../components/PublicationsList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <PublicationsList />
      <FloatingChatbot/>
    </main>
  );
}

export const metadata = {
  title: 'Space Biology Publications',
  description: 'Browse space biology research publications',
};