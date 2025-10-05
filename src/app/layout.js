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
      <body>
      
        {children}
        
        <Navbar/>
 
              <FloatingChatbot/>
        </body>

    </html>
  );
}