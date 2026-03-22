import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';
import AvatarImage from '../assets/头像.png';
import CornerImage from '../assets/角标.png';
import ParticleBackground from './ParticleBackground';
import { Search, Type, AlignLeft, Image, Heading, Download } from 'lucide-react';

function About() {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    setMousePosition({ x, y });
  };

  return (
    <section
      className="relative h-screen w-full bg-[#000000] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ zIndex: 0 }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
      </video>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Video overlay - 50% black */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
      />

      {/* Navigation */}
      <motion.nav
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
            href="/"
            className="font-semibold hover:text-white transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/')}
          >
            首页
          </a>
          <a
            href="/portfolio"
            className="font-semibold hover:text-white transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/portfolio')}
          >
            设计作品
          </a>
          <a
            href="/about"
            className="font-semibold hover:text-white transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-base leading-6"
            style={getLinkStyle('/about')}
          >
            关于我
          </a>
        </div>
      </motion.nav>

      {/* Content Area */}
      <div className="relative z-20 w-full h-full">
        {/* Avatar */}
        <div
          style={{
            width: '410px',
            height: '562px',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'absolute',
            top: 'calc(50% + 150px)',
            left: '50%',
            transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px)) rotate(-5deg)`,
            zIndex: 10,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img
            src={AvatarImage}
            alt="头像"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Cards */}
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            position: 'absolute',
            top: 'calc(50% + 10px)',
            left: 'calc(50% + 260px)',
            transform: 'none',
            zIndex: 20,
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="flex items-center gap-2">
            <Search size={16} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>UX/UI Design</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: 'absolute',
            top: 'calc(50% + 100px)',
            left: 'calc(50% + 320px)',
            transform: 'none',
            zIndex: 20,
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="flex items-center gap-2">
            <Search size={16} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>App Web AIGC</span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            position: 'absolute',
            top: 'calc(50% + 190px)',
            left: 'calc(50% + 240px)',
            transform: 'none',
            zIndex: 20,
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="flex items-center gap-2">
            <Search size={16} color="white" />
            <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Video Coding</span>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.a
          href="/download"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            position: 'absolute',
            top: 'calc(50% + 280px)',
            left: 'calc(50% + 320px)',
            transform: 'none',
            zIndex: 20,
            padding: '12px 32px',
            borderRadius: '9999px',
            background: '#FCD549',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* 角标图片 */}
          <img
            src={CornerImage}
            alt="角标"
            style={{
              position: 'absolute',
              top: '-8px',
              left: '-16px',
              width: '24px',
              height: '24px',
              transform: 'rotate(-5deg)',
            }}
          />
          <div className="flex items-center gap-2">
            <Download size={16} color="black" />
            <span style={{ color: 'black', fontSize: '14px', fontWeight: 600 }}>下载简历</span>
          </div>
        </motion.a>

        {/* Left Card Outer */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: 'absolute',
            top: 'calc(50% + 10px)',
            left: 'calc(50% - 560px)',
            transform: 'none',
            zIndex: 19,
            padding: '50px 60px 60px 50px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Components */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              marginBottom: '30px',
            }}
          >
            <div className="flex items-center gap-2">
              <Search size={16} color="white" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Components</span>
            </div>
          </div>

          {/* Text Lines */}
          <div className="flex flex-col" style={{ paddingLeft: '18px', gap: '24px' }}>
            <div className="flex items-center gap-2">
              <Type size={16} strokeWidth={2} color="white" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Paragraph</span>
            </div>
            <div className="flex items-center gap-2">
              <Heading size={16} strokeWidth={2} color="white" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Heading</span>
            </div>
            <div className="flex items-center gap-2">
              <AlignLeft size={16} strokeWidth={2} color="white" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Typography</span>
            </div>
            <div className="flex items-center gap-2">
              <Image size={16} strokeWidth={2} color="white" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>Image</span>
            </div>
          </div>
        </motion.div>

        {/* Name - Behind avatar */}
        <h1
          style={{
            fontSize: '80px',
            fontFamily: 'inherit',
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            position: 'absolute',
            top: 'calc(50% - 200px)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
            whiteSpace: 'nowrap',
            fontFamily: '"Black Ops One", cursive',
            color: '#ffffff',
          }}
        >
          Hi, Meet <span style={{ color: '#FCD549' }}>CHENG</span>
        </h1>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            position: 'absolute',
            top: 'calc(50% - 150px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 5,
            maxWidth: '800px',
            width: '100%',
          }}
        >
          UI Designer dedicated to building intuitive and visually engaging digital interfaces. Passionate about layouts, typography, and creating seamless interactive experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
