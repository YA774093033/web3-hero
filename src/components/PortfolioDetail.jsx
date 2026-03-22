import { useLocation } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import LOGO from '../assets/LOGO.png';

// TV images
import tv1 from '../assets/tv/P1.png';
import tv2 from '../assets/tv/P2.png';
import tv3 from '../assets/tv/P3.png';
import tv4 from '../assets/tv/P4.png';
import tv5 from '../assets/tv/P5.png';
import tv6 from '../assets/tv/P6.png';
import tv7 from '../assets/tv/P7.png';
import tv8 from '../assets/tv/P8.png';
import tv9 from '../assets/tv/P9.png';
import tv10 from '../assets/tv/P10.png';
import tv11 from '../assets/tv/P11.png';
import tv12 from '../assets/tv/P12.png';
import tv13 from '../assets/tv/P13.png';
import tv14 from '../assets/tv/P14.png';
import tv15 from '../assets/tv/P15.png';
import tv16 from '../assets/tv/P16.png';

// 凤凰会 images
import fh1 from '../assets/凤凰会/01 封面.png';
import fh2 from '../assets/凤凰会/02 平台介绍.png';
import fh3 from '../assets/凤凰会/03 调研.png';
import fh4 from '../assets/凤凰会/04 诉求模型.png';
import fh5 from '../assets/凤凰会/05 设计目标.png';
import fh6 from '../assets/凤凰会/06 视觉语言.png';
import fh7 from '../assets/凤凰会/07 设计规范.png';
import fh8 from '../assets/凤凰会/08 品牌融入.png';
import fh9 from '../assets/凤凰会/09 首页升级.png';
import fh10 from '../assets/凤凰会/10 首页说明.png';
import fh11 from '../assets/凤凰会/11 服务升级.png';
import fh12 from '../assets/凤凰会/12 服务说明.png';
import fh13 from '../assets/凤凰会/13 商城升级.png';
import fh14 from '../assets/凤凰会/14 商城说明.png';
import fh15 from '../assets/凤凰会/15 商城首页改版.png';
import fh16 from '../assets/凤凰会/16 商城改版2.png';
import fh17 from '../assets/凤凰会/17 交互体验升级.png';
import fh18 from '../assets/凤凰会/17 交互体验升级 2.png';
import fh19 from '../assets/凤凰会/19 个人中心.png';
import fh20 from '../assets/凤凰会/20 其他页面.png';

// 工地 images
import gd1 from '../assets/工地/01 首页.png';
import gd2 from '../assets/工地/02 项目背景.png';
import gd3 from '../assets/工地/03 用户画像.png';
import gd4 from '../assets/工地/04 体验地图.png';
import gd5 from '../assets/工地/05 设计目标.png';
import gd6 from '../assets/工地/06 布局重构.png';
import gd7 from '../assets/工地/07 工作台.png';
import gd8 from '../assets/工地/08 任务中心1.png';
import gd9 from '../assets/工地/09 任务中心2.png';
import gd10 from '../assets/工地/10 任务中心3.png';
import gd11 from '../assets/工地/11 审批中心1.png';
import gd12 from '../assets/工地/12 审批中心2.png';
import gd13 from '../assets/工地/13 审批中心3.png';
import gd14 from '../assets/工地/14 审批中心4.png';
import gd15 from '../assets/工地/15 审批中心5.png';
import gd16 from '../assets/工地/16 日程管理1.png';
import gd17 from '../assets/工地/17 日程管理2.png';
import gd18 from '../assets/工地/18 数据看板.png';
import gd19 from '../assets/工地/19 结果验证.png';

const projectsData = {
  litetv: {
    images: [tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8, tv9, tv10, tv11, tv12, tv13, tv14, tv15, tv16],
  },
  fenghuanghui: {
    images: [fh1, fh2, fh3, fh4, fh5, fh6, fh7, fh8, fh9, fh10, fh11, fh12, fh13, fh14, fh15, fh16, fh17, fh18, fh19, fh20],
  },
  gongdi: {
    images: [gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12, gd13, gd14, gd15, gd16, gd17, gd18, gd19],
  },
};

const PortfolioDetail = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const id = pathParts[pathParts.length - 1];
  const project = projectsData[id];
  const images = project ? project.images : [];

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  return (
    <section className="relative min-h-screen w-full bg-[#000000] overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

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
      <div className="relative z-20 pt-32 pb-20 px-20 flex flex-col items-center" style={{ marginTop: '200px' }}>
        {images.length > 0 ? (
          <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {images.map((img, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={img}
                  alt={`作品 ${index + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            暂无作品
          </p>
        )}
      </div>
    </section>
  );
};

export default PortfolioDetail;
