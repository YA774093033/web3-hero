import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import LOGO from '../assets/LOGO.png';
import AImage from '../assets/A.png';
import BImage from '../assets/B.png';
import CImage from '../assets/C.png';

const Portfolio = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  const projects = [
    {
      id: 'litetv',
      title: 'LiteTV（全球化短剧 | C端）',
      subtitle: '面向全球市场的短剧产品，需解决10+语种文化差异造成的适配难题，并在激烈的出海竞争中提升商业化转化率。',
      image: AImage,
    },
    {
      id: 'fenghuanghui',
      title: '凤凰会（智慧社区 | C端）',
      subtitle: '集团级智慧社区平台，承载物业服务、社区电商与本地生活等多条复杂业务线，需要通过产品升级提升用户留存与业务转化。',
      image: BImage,
    },
    {
      id: 'gongdi',
      title: '智慧工地（OA系统 | B端）',
      subtitle: '建筑行业数字化管理系统，聚焦任务管理与审批流程复杂、效率低的问题。',
      image: CImage,
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#000000] overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Top Navigation - Glassmorphism */}
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
      <div className="relative z-20 pt-0 pb-20 px-20">
        {/* Projects Grid - Responsive */}
        <div className="flex justify-center" style={{ gap: '40px', marginTop: '200px' }}>
          {projects.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} key={index} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative cursor-pointer"
                style={{
                  width: '400px',
                  height: '500px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
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
                {/* Image preview */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '400px',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />

                {/* Content below image */}
                <div
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {/* Project Title */}
                  <div className="text-white" style={{ marginBottom: '5px', fontSize: '22px', fontWeight: '800' }}>
                    {project.title}
                  </div>

                  {/* Description */}
                  <div style={{ color: '#a3a3a3', lineHeight: '1.7', fontSize: '15px', fontWeight: '500' }}>
                    {project.subtitle}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center" style={{ marginTop: '70px', paddingBottom: '10px' }}>
          <p style={{ color: '#a3a3a3', fontSize: '15px' }}>
            更多项目正在上线 ...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
