export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6 text-center border-t border-slate-700">
      <p>© {new Date().getFullYear()} NASA Bioscience Dashboard. Built with 💙 by your Hackathon Team.</p>
    </footer>
  );
}
