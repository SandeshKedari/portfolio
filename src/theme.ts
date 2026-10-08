import type { ThemeConfig } from 'antd';

export const antTheme: ThemeConfig = {
  token: {
    // Primary colors
    colorPrimary: '#2bb3a3',
    colorLink: '#2bb3a3',
    colorLinkHover: '#1f9985',
    colorLinkActive: '#1a7a6a',
    
    // Semantic colors
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',
    
    // Text colors
    colorText: '#0f172a',
    colorTextSecondary: '#475569',
    colorTextTertiary: '#94a3b8',
    
    // Background colors
    colorBgBase: '#ffffff',
    colorBgContainer: '#f8fafc',
    colorBgElevated: '#ffffff',
    
    // Typography
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 28,
    fontSizeHeading3: 24,
    fontWeightStrong: 600,
    
    // Spacing & Border
    borderRadius: 12,
    borderRadiusSM: 6,
    borderRadiusLG: 14,
    lineHeight: 1.6,
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 40,
      fontWeight: 600,
      primaryColor: '#2bb3a3',
    },
    Tag: {
      borderRadiusSM: 999,
      colorBgContainer: '#f0fdf4',
      colorText: '#166534',
    },
    Timeline: {
      dotBg: 'transparent',
    },
    Card: {
      borderRadiusLG: 14,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
    },
    Input: {
      borderRadius: 12,
      controlHeight: 40,
    },
  },
};
