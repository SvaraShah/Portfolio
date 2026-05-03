export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold glow-text">
          Svara Shah
        </div>
        
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} • Designed & Built with ❤️ by Svara
        </p>

        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-primary transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  );
};
