import { useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import ResumePDF from '../assets/UI设计-程先生.pdf';
import LOGO from '../assets/LOGO.png';

const DownloadPage = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  return (
    <section className="relative min-h-screen w-full bg-[#000000] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        }}
      />

      {/* Navigation */}
      <nav
        className="fixed top-8 z-50 h-[72px] flex items-center justify-between px-10 rounded-[48px] border border-white/10 shadow-2xl cursor-pointer"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: '900px',
          width: 'auto',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1.02)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Logo */}
        <a
          className="relative z-10 flex items-center gap-3 cursor-pointer"
          href="/"
          style={{ marginLeft: '40px' }}
        >
          <img
            src={LOGO}
            alt="Logo"
            className="rounded-lg flex items-center justify-center overflow-hidden"
            style={{ width: '120px', height: '24px' }}
          />
        </a>

        {/* Nav Links */}
        <div
          className="hidden lg:flex gap-8 xl:gap-12 relative z-10"
          style={{ marginRight: '40px' }}
        >
          <a
            className="font-semibold transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/')}
            href="/"
          >
            <span className="hover:text-white transition-colors duration-300">首页</span>
          </a>
          <a
            className="font-semibold transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/portfolio')}
            href="/portfolio"
          >
            <span className="hover:text-white transition-colors duration-300">设计作品</span>
          </a>
          <a
            className="font-semibold transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/about')}
            href="/about"
          >
            <span className="hover:text-white transition-colors duration-300">关于我</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6" style={{ paddingTop: '120px' }}>
        {/* PDF Preview Container */}
        <div
          style={{
            width: '800px',
            height: '1000px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <iframe
            src={ResumePDF}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="简历预览"
          />
        </div>

        {/* Download Button */}
        <a
          href={ResumePDF}
          download="CHENG-简历.pdf"
          className="flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            padding: '16px 40px',
            background: '#FCD549',
            color: 'black',
            fontSize: '18px',
            fontWeight: '600',
            boxShadow: '0 4px 20px rgba(252, 213, 73, 0.3)',
          }}
        >
          <Download size={24} />
          <span>下载简历</span>
        </a>
      </div>
    </section>
  );
};

export default DownloadPage;
