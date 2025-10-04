<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from '@/components/Navbar';
=======
import FloatingChatbot from '../components/FloatingChatbot';
>>>>>>> 1862cab2759aa1fa192f8c6bff4d98d48c483f9b
=======
>>>>>>> 75c9a1c93597d39af7fa268ce389a7ebe81a53ec
import PublicationsList from '../components/PublicationsList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <PublicationsList />
    </main>
  );
}

export const metadata = {
  title: 'Space Biology Publications',
  description: 'Browse space biology research publications',
};