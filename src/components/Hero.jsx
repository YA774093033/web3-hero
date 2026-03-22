import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';

// Animation components
const BlurIn = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
        @keyframes borderRotate {
          0% { background-position: 0% 0%; }
          100% { background-position: 400% 0%; }
        }
      `}</style>
      <section className="relative h-screen w-full overflow-hidden bg-[#070612]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ zIndex: 0 }}
        >
          <source src="https://cdn.pixabay.com/video/2023/04/15/159087-818219570.mp4" type="video/mp4" />
        </video>

        {/* Video overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
        />

        {/* Bottom fade gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{
            background: 'linear-gradient(to top, #070612 0%, transparent 100%)',
          }}
        />

        {/* Navigation - Fixed top center with glassmorphism */}
        <nav
          className="fixed top-8 z-50 h-[72px] flex items-center justify-between px-10 rounded-[48px] border border-white/10 shadow-2xl cursor-pointer"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            left: '50%',
            right: 'auto',
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
            className="relative z-10 flex items-center gap-3 cursor-pointer group"
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

        {/* Content - centered */}
        <div className="relative z-20 flex h-full items-center justify-center px-6">
          <div className="flex flex-col items-center gap-6 lg:gap-8 max-w-3xl text-center" style={{ marginTop: '40px' }}>
            {/* Main Heading - centered */}
            <div className="flex flex-col gap-1">
              <h1
                className="text-white whitespace-nowrap font-black"
                style={{ fontSize: '90px', fontWeight: '900' }}
              >
                设计赋能商业-体验驱动增长
              </h1>
            </div>

            {/* Subtitle - centered */}
            <BlurIn delay={0.4} duration={0.6}>
              <p className="text-xl font-normal leading-relaxed text-white/70" style={{ maxWidth: '800px' }}>
                致力于通过直观、高效的界面设计，解决复杂业务需求，将美学与可用性完美结合，为数字产品创造真实价值。
              </p>
            </BlurIn>

            {/* CTA Buttons - centered */}
            <BlurIn delay={0.6} duration={0.6}>
              <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: '40px' }}>
                <a
                  href="/portfolio"
                  className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    paddingLeft: '68px',
                    paddingRight: '68px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                  }}
                >
                  {/* 边框光效 */}
                  <div
                    className="absolute inset-[-2px] pointer-events-none"
                    style={{
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,0.6) 100%)',
                      backgroundSize: '400% 100%',
                      animation: 'borderRotate 4s linear infinite',
                      opacity: 0.5,
                      filter: 'blur(1px)',
                    }}
                  />
                  {/* 内部遮罩 */}
                  <div
                    className="absolute inset-[1px] pointer-events-none"
                    style={{
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(20,20,20,0.98) 100%)',
                    }}
                  />
                  <span className="relative z-10 text-xl font-semibold text-white" style={{ letterSpacing: '1px' }}>
                    作品集
                  </span>
                </a>
              </div>
            </BlurIn>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="absolute bottom-8 z-20"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: '14px',
          }}
        >
          本站正在逐步完善...
        </div>

      </section>
    </>
  );
};

export default Hero;
