import './globals.css';
import FloatingChatbot from '../components/FloatingChatbot';
import Navbar from '../components/Navbar';

export const metadata = {
  title: {
    default: 'Space Biology Publications',
    template: '%s | Space Biology'
  },
  description: 'Browse space biology research publications',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05070d] text-gray-200">
        {/* Navbar on top */}
        <Navbar />

        {/* Content area below navbar */}
        <main className="pt-24 px-4 md:px-8 mt-2.5">
          {children}
        </main>

        {/* Floating chatbot */}
        <FloatingChatbot />
      </body>
    </html>
  );
}
