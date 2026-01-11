// Studio Design Tokens - Centralized design system for consistency

export const studioTokens = {
  // Background colors
  backgrounds: {
    primary: '#212121',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
    elevated: '#333333',
  },

  // Accent colors
  accents: {
    indigo: '#6366f1',
    indigoMuted: 'rgba(99, 102, 241, 0.1)',
    indigoBorder: 'rgba(99, 102, 241, 0.2)',
    orange: '#f97316',
    green: '#22c55e',
  },

  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#9ca3af',
    muted: '#6b7280',
    accent: '#818cf8',
  },

  // Border colors
  borders: {
    default: '#374151',
    subtle: '#2a2a2a',
    hover: '#4b5563',
  },

  // Gradients
  gradients: {
    sectionPrimary: 'linear-gradient(180deg, #212121 0%, #1a1a1a 100%)',
    sectionSecondary: 'linear-gradient(180deg, #1a1a1a 0%, #212121 100%)',
    heroBackground: 'linear-gradient(135deg, #212121 0%, #1a1a1a 50%, #212121 100%)',
    accentGlow: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
    cardHover: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)',
  },

  // Spacing (Tailwind classes)
  spacing: {
    sectionSm: 'py-16',
    sectionMd: 'py-24',
    sectionLg: 'py-32',
    contentGap: 'gap-12',
    cardGap: 'gap-6',
  },

  // Border radius
  radius: {
    card: 'rounded-xl',
    cardLg: 'rounded-2xl',
    button: 'rounded-full',
    badge: 'rounded-full',
  },
}

// Tailwind class utilities
export const studioClasses = {
  // Section containers
  sectionContainer: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  sectionContainerNarrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  sectionContainerWide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',

  // Card styles
  card: 'bg-[#2a2a2a] border border-gray-800 rounded-xl hover:border-gray-700 transition-all',
  cardElevated: 'bg-[#2a2a2a] border border-gray-800 rounded-xl hover:border-gray-700 hover:shadow-lg hover:shadow-indigo-500/5 transition-all',

  // Button styles
  buttonPrimary: 'bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all',
  buttonSecondary: 'border border-gray-600 text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all',
  buttonGhost: 'text-gray-400 hover:text-white transition-colors',

  // Badge styles
  badge: 'inline-block px-3 py-1 text-xs tracking-widest uppercase rounded-full',
  badgeAccent: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
  badgeNeutral: 'bg-gray-800 text-gray-400',

  // Typography
  heading1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight',
  heading2: 'text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight',
  heading3: 'text-xl sm:text-2xl font-medium',
  bodyLarge: 'text-lg sm:text-xl text-gray-400 leading-relaxed',
  bodyDefault: 'text-base text-gray-400 leading-relaxed',
  bodySmall: 'text-sm text-gray-500 leading-relaxed',
  label: 'text-xs tracking-widest uppercase text-gray-500',
  labelAccent: 'text-xs tracking-widest uppercase text-indigo-400',
}
