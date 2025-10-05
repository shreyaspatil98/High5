import './globals.css';
import FloatingChatbot from '../components/FloatingChatbot';
import Navbar from '../components/Navbar';

export const metadata = {
  title: {
    default: 'Space Biology Publications',
    template: '%s | Space Biology',
  },
  description: 'Browse space biology research publications',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <Navbar />
        {children}
=======
      <body className="bg-[#05070d] text-gray-200">
        {/* Navbar on top */}
        <Navbar />

        {/* Content area below navbar */}
        <main className="pt-24 px-4 md:px-8 mt-2.5">
          {children}
        </main>

        {/* Floating chatbot */}
>>>>>>> 70ffcf172bd76b8498c4f3d6bf5c4aefb44dae25
        <FloatingChatbot />
      </body>
    </html>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 70ffcf172bd76b8498c4f3d6bf5c4aefb44dae25
