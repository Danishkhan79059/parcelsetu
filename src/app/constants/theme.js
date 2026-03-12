export const theme = {
  colors: {
    // Brand / primary colors
    primary: '#0F172A', // Dark navy – headers, primary background
    primaryLight: '#1E293B', // Slightly lighter navy – sections, cards bg
    primaryDark: '#020617', // Almost black – footer, top bar

    // Accent colors (buttons, highlights)
    accent: '#F97316', // Orange – primary CTA buttons, links hover
    accentSoft: '#FFEDD5', // Light orange background for badges, highlights
    accentDark: '#C0560C', // Darker orange – hover states

    // Neutral grayscale
    background: '#FFFFFF', // Page background
    backgroundMuted: '#F9FAFB', // Sections, cards backgrounds
    border: '#E5E7EB', // Borders, dividers
    text: '#111827', // Main body text
    textMuted: '#6B7280', // Secondary text, descriptions
    textOnPrimary: '#F9FAFB', // Text on dark backgrounds
    textOnAccent: '#111827', // Text on orange buttons

    // Status colors
    success: '#22C55E',
    successSoft: '#DCFCE7',
    warning: '#EAB308',
    warningSoft: '#FEF9C3',
    danger: '#EF4444',
    dangerSoft: '#FEE2E2',
  },

  font: {
    family:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
  },

  radii: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    full: '9999px', // Pills, rounded buttons
  },

  shadows: {
    soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
    medium: '0 20px 40px rgba(15, 23, 42, 0.12)',
  },
};


