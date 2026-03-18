export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,200,160,0.1)] py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8b9ab0]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c8a0]" />
          <span className="font-display tracking-[0.18em] text-sm font-bold text-[#00c8a0]">
            CipherMind
          </span>
        </div>

        <span className="text-xs">
          © {new Date().getFullYear()} CipherMind. All rights reserved.
        </span>

        <div className="flex gap-6 text-xs">
          <a
            href="mailto:info@ciphermind.ca"
            className="hover:text-[#00c8a0] transition-colors"
          >
            info@ciphermind.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
