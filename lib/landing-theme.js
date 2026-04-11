// Landing page design tokens (ported from swoop-member-portal src/config/theme.js)

const ORANGE       = '#F3922D';
const ORANGE_DEEP  = '#D97706';
const ORANGE_SOFT  = '#FFB347';
const ORANGE_MUTED = '#F5B97A';
const BLACK        = '#0F0F0F';
const CHARCOAL     = '#181818';
const GRAPHITE     = '#2A2A2A';
const SLATE        = '#3F3F46';
const ASH          = '#6B7280';
const SILVER       = '#A1A1AA';
const CLOUD        = '#E4E4E7';
const FOG          = '#EFEFEF';
const PORCELAIN    = '#F8F9FA';
const PAPER        = '#FFFFFF';

const SUCCESS_500  = '#12b76a';
const WARNING_700  = '#B45309';
const DANGER_700   = '#B91C1C';

export const theme = {
  colors: {
    bg:           PORCELAIN,
    bgCard:       PAPER,
    bgCardHover:  FOG,
    bgDeep:       '#ECECEC',
    bgSidebar:    CHARCOAL,
    border:       CLOUD,
    borderLight:  FOG,
    textPrimary:  BLACK,
    textSecondary:SLATE,
    textMuted:    ASH,
    textOnDark:   PAPER,
    accent:       ORANGE,
    success:      SUCCESS_500,
    warning:      WARNING_700,
    urgent:       DANGER_700,
    landingCream: '#F7F5F2',
    lensMemberIntelligence: BLACK,
    lensTeeSheetDemand:     ORANGE,
    lensFbOperations:       ORANGE_SOFT,
    lensStaffingLabor:      ORANGE_DEEP,
    lensRevenuePipeline:    ORANGE_MUTED,
    ctaAccent:              ORANGE,
    ctaAccentHover:         ORANGE_DEEP,
    ctaAccentText:          BLACK,
  },
  spacing: {
    xs:  '4px', sm:  '8px', md:  '16px',
    lg:  '24px', xl:  '32px', xxl: '48px',
  },
  radius: {
    sm: '6px', md: '10px', lg: '16px', xl: '24px',
  },
  fonts: {
    sans:  "'Plus Jakarta Sans', system-ui, sans-serif",
    mono:  "'JetBrains Mono', monospace",
    serif: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  fontSize: {
    xs: '12px', sm: '14px', md: '16px',
    lg: '20px', xl: '26px', xxl: '38px', hero: '52px',
  },
  shadow: {
    sm:  '0 1px 3px rgba(0,0,0,0.06)',
    md:  '0 4px 12px rgba(0,0,0,0.08)',
    lg:  '0 8px 24px rgba(0,0,0,0.10)',
  },
};
