/**
 * Demo theme system for the 100 template live previews.
 *
 * Every template in data/templates.ts gets a DemoConfig here — its own
 * palette, font pairing, hero layout, background pattern, corner radius
 * and tagline — so each /demo/[id] page renders a visually distinct
 * hostel website. Section richness escalates with the template's tier
 * (see components/demo/DemoSite.tsx).
 */

export interface DemoPalette {
  mode: 'light' | 'dark';
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  primary: string;
  accent: string;
  onPrimary: string;
}

export const PALETTES = {
  'sand-terracotta': { mode: 'light', bg: '#faf6f0', surface: '#ffffff', ink: '#2b2118', muted: '#8a7a6a', primary: '#c2542e', accent: '#e8a87c', onPrimary: '#ffffff' },
  'sage-cream':      { mode: 'light', bg: '#f4f7f2', surface: '#ffffff', ink: '#253226', muted: '#71836f', primary: '#4a7856', accent: '#d9b96a', onPrimary: '#ffffff' },
  'sky-slate':       { mode: 'light', bg: '#f2f7fb', surface: '#ffffff', ink: '#1c2b38', muted: '#6b8296', primary: '#2f6f9f', accent: '#ffb454', onPrimary: '#ffffff' },
  'blush-plum':      { mode: 'light', bg: '#fbf3f4', surface: '#ffffff', ink: '#3a2430', muted: '#96707f', primary: '#a34664', accent: '#e3b04b', onPrimary: '#ffffff' },
  'mint-ink':        { mode: 'light', bg: '#eefaf5', surface: '#ffffff', ink: '#12312a', muted: '#5e8177', primary: '#0e8c6d', accent: '#ff8f5e', onPrimary: '#ffffff' },
  'paper-cobalt':    { mode: 'light', bg: '#f7f7f4', surface: '#ffffff', ink: '#20242e', muted: '#767c8c', primary: '#2743c7', accent: '#f2b33d', onPrimary: '#ffffff' },
  'ivory-navy':      { mode: 'light', bg: '#f3eee3', surface: '#fffdf8', ink: '#0b1330', muted: '#6f6a58', primary: '#0b1330', accent: '#c9a66c', onPrimary: '#f3eee3' },
  'lilac-dusk':      { mode: 'light', bg: '#f5f2fb', surface: '#ffffff', ink: '#2a2440', muted: '#837b9e', primary: '#6a4fbf', accent: '#f7a45c', onPrimary: '#ffffff' },
  'lemon-charcoal':  { mode: 'light', bg: '#fbf8ec', surface: '#ffffff', ink: '#26241c', muted: '#85806a', primary: '#b98a13', accent: '#3a5fcd', onPrimary: '#ffffff' },
  'coral-sea':       { mode: 'light', bg: '#fdf5f1', surface: '#ffffff', ink: '#33231f', muted: '#93756c', primary: '#e0644c', accent: '#2d8a8a', onPrimary: '#ffffff' },
  'stone-moss':      { mode: 'light', bg: '#f4f3ef', surface: '#ffffff', ink: '#2c2e26', muted: '#7f826f', primary: '#5e6b3a', accent: '#c98d4b', onPrimary: '#ffffff' },
  'cloud-crimson':   { mode: 'light', bg: '#f8f7f7', surface: '#ffffff', ink: '#2b1f22', muted: '#8d7379', primary: '#a92438', accent: '#d9a648', onPrimary: '#ffffff' },
  'teal-sandbar':    { mode: 'light', bg: '#effaf9', surface: '#ffffff', ink: '#143434', muted: '#5f8583', primary: '#12766f', accent: '#e2a95c', onPrimary: '#ffffff' },
  'dune-indigo':     { mode: 'light', bg: '#f8f4ec', surface: '#ffffff', ink: '#23263f', muted: '#86816f', primary: '#3c418f', accent: '#d19b3f', onPrimary: '#ffffff' },
  'midnight-gold':   { mode: 'dark', bg: '#0b1330', surface: '#131c3d', ink: '#f3eee3', muted: '#9aa0b8', primary: '#c9a66c', accent: '#6fb3c0', onPrimary: '#0b1330' },
  'charcoal-amber':  { mode: 'dark', bg: '#16161a', surface: '#1f1f26', ink: '#f2efe8', muted: '#9b98a0', primary: '#e8a33d', accent: '#7a6cff', onPrimary: '#16161a' },
  'forest-brass':    { mode: 'dark', bg: '#10201a', surface: '#172b23', ink: '#eaf2ec', muted: '#8aa596', primary: '#cfa14e', accent: '#6fcf97', onPrimary: '#10201a' },
  'ocean-deep':      { mode: 'dark', bg: '#071a26', surface: '#0d2635', ink: '#e8f2f7', muted: '#7fa0b0', primary: '#35a3c9', accent: '#f5b83d', onPrimary: '#071a26' },
  'plum-noir':       { mode: 'dark', bg: '#1c1122', surface: '#281a30', ink: '#f4ecf7', muted: '#a58bb3', primary: '#b96fc9', accent: '#e8b64c', onPrimary: '#1c1122' },
  'espresso-cream':  { mode: 'dark', bg: '#201612', surface: '#2c1f19', ink: '#f5ede4', muted: '#a8917f', primary: '#d8a35c', accent: '#8fb6a0', onPrimary: '#201612' },
  'slate-neon':      { mode: 'dark', bg: '#14181f', surface: '#1c222c', ink: '#eef2f6', muted: '#8b95a5', primary: '#4cc38a', accent: '#f4c542', onPrimary: '#0f1318' },
  'wine-rose':       { mode: 'dark', bg: '#24101a', surface: '#331825', ink: '#f8edf1', muted: '#b18a9a', primary: '#c95d7c', accent: '#e5b45b', onPrimary: '#ffffff' },
  'graphite-ice':    { mode: 'dark', bg: '#17191c', surface: '#202329', ink: '#f0f4f8', muted: '#8e959d', primary: '#7cc7e8', accent: '#e8a33d', onPrimary: '#101214' },
  'royal-violet':    { mode: 'dark', bg: '#140f2e', surface: '#1e1745', ink: '#efeaff', muted: '#948bc0', primary: '#8f7ae8', accent: '#f0b64f', onPrimary: '#140f2e' },
  'onyx-gold':       { mode: 'dark', bg: '#0c0c0d', surface: '#161617', ink: '#f4f0e6', muted: '#9a958a', primary: '#d4af37', accent: '#8c9bb5', onPrimary: '#0c0c0d' },
} as const satisfies Record<string, DemoPalette>;

export type PaletteKey = keyof typeof PALETTES;

/**
 * Heading/body font pairings. The CSS variables are defined by
 * app/demo/layout.tsx, which loads every family in this pool.
 */
export const FONT_PAIRS = {
  'playfair-jost':        { head: 'var(--f-playfair)', body: 'var(--f-jost)' },
  'dmserif-dmsans':       { head: 'var(--f-dmserif)', body: 'var(--f-dmsans)' },
  'montserrat-karla':     { head: 'var(--f-montserrat)', body: 'var(--f-karla)' },
  'bebas-inter':          { head: 'var(--f-bebas)', body: 'var(--f-inter)' },
  'cormorant-montserrat': { head: 'var(--f-cormorant)', body: 'var(--f-montserrat)' },
  'grotesk-inter':        { head: 'var(--f-grotesk)', body: 'var(--f-inter)' },
  'lora-nunito':          { head: 'var(--f-lora)', body: 'var(--f-nunito)' },
  'baskerville-jost':     { head: 'var(--f-baskerville)', body: 'var(--f-jost)' },
  'poppins-nunito':       { head: 'var(--f-poppins)', body: 'var(--f-nunito)' },
  'fraunces-karla':       { head: 'var(--f-fraunces)', body: 'var(--f-karla)' },
  'sora-inter':           { head: 'var(--f-sora)', body: 'var(--f-inter)' },
} as const;

export type FontKey = keyof typeof FONT_PAIRS;

export type HeroVariant = 'split' | 'aurora' | 'arch' | 'collage' | 'band' | 'minimal';
export type Pattern = 'none' | 'dots' | 'grid' | 'diagonal' | 'waves' | 'sparkle';

export interface DemoConfig {
  palette: PaletteKey;
  font: FontKey;
  hero: HeroVariant;
  pattern: Pattern;
  /** Corner radius in px for cards/buttons — part of each demo's character. */
  radius: number;
  /** The demo hostel's own tagline, shown in its hero. */
  tagline: string;
}

type Row = [id: string, palette: PaletteKey, font: FontKey, hero: HeroVariant, pattern: Pattern, radius: number, tagline: string];

const ROWS: Row[] = [
  // ---- Tier 1 · Launch ----
  ['dawn-t1',    'sand-terracotta', 'poppins-nunito',  'band',    'dots',     14, 'Wake up somewhere that feels like home.'],
  ['pebble-t1',  'stone-moss',      'dmserif-dmsans',  'minimal', 'none',     10, 'Simple stays, honest prices.'],
  ['wren-t1',    'blush-plum',      'lora-nunito',     'split',   'dots',     18, 'A safe nest in the heart of the city.'],
  ['nook-t1',    'teal-sandbar',    'grotesk-inter',   'band',    'grid',     12, 'Your corner of the city.'],
  ['ember-t1',   'coral-sea',       'montserrat-karla','split',   'diagonal', 8,  'Drop your bags. Light the way.'],
  ['sprout-t1',  'sage-cream',      'poppins-nunito',  'minimal', 'dots',     16, 'Grow where you are planted.'],
  ['slate-t1',   'graphite-ice',    'sora-inter',      'band',    'grid',     6,  'Business-ready beds, zero fuss.'],
  ['breeze-t1',  'sky-slate',       'dmserif-dmsans',  'split',   'waves',    14, 'Easy living, lighter days.'],
  ['anchor-t1',  'paper-cobalt',    'montserrat-karla','minimal', 'none',     4,  'Settle in. Stay steady.'],
  ['lumen-t1',   'ivory-navy',      'playfair-jost',   'band',    'sparkle',  12, 'A little luxury, from day one.'],

  // ---- Tier 2 · Presence ----
  ['meadow-t2',  'sage-cream',      'lora-nunito',     'arch',    'dots',     20, 'Calm, green and close to campus.'],
  ['harbor-t2',  'ocean-deep',      'grotesk-inter',   'split',   'waves',    10, 'Every journey needs a harbor.'],
  ['cedar-t2',   'stone-moss',      'montserrat-karla','band',    'diagonal', 8,  'Strong roots, solid stays.'],
  ['trellis-t2', 'lilac-dusk',      'poppins-nunito',  'collage', 'grid',     16, 'A community that grows together.'],
  ['compass-t2', 'sky-slate',       'sora-inter',      'split',   'grid',     10, 'Minutes from every lecture hall.'],
  ['hearth-t2',  'sand-terracotta', 'fraunces-karla',  'arch',    'dots',     18, 'Warm meals, warmer welcomes.'],
  ['atlas-t2',   'graphite-ice',    'grotesk-inter',   'band',    'none',     6,  'Corporate stays, mapped out.'],
  ['willow-t2',  'blush-plum',      'cormorant-montserrat', 'arch', 'none',   16, 'Gentle on you, serious on safety.'],
  ['summit-t2',  'dune-indigo',     'playfair-jost',   'split',   'sparkle',  12, 'Residence at a higher standard.'],
  ['beacon-t2',  'coral-sea',       'poppins-nunito',  'collage', 'waves',    14, 'Travellers find their way here.'],

  // ---- Tier 3 · Signature ----
  ['verve-t3',    'mint-ink',       'sora-inter',      'collage', 'grid',     14, 'Live loud. Live together.'],
  ['solace-t3',   'blush-plum',     'lora-nunito',     'arch',    'dots',     20, 'Peace of mind, included in rent.'],
  ['forge-t3',    'charcoal-amber', 'bebas-inter',     'band',    'diagonal', 6,  'Built for the grind.'],
  ['lattice-t3',  'paper-cobalt',   'grotesk-inter',   'split',   'grid',     10, 'Structure for serious students.'],
  ['voyage-t3',   'ocean-deep',     'montserrat-karla','collage', 'waves',    12, 'One pass, many cities.'],
  ['haven-t3',    'sage-cream',     'dmserif-dmsans',  'arch',    'none',     18, 'The comfort you compare others to.'],
  ['meridian-t3', 'graphite-ice',   'sora-inter',      'minimal', 'grid',     8,  'Where work travel feels effortless.'],
  ['aurelia-t3',  'ivory-navy',     'playfair-jost',   'split',   'sparkle',  14, 'Golden hours, every hour.'],
  ['canvas-t3',   'lilac-dusk',     'fraunces-karla',  'collage', 'dots',     16, 'Paint your chapter here.'],
  ['crest-t3',    'dune-indigo',    'baskerville-jost','band',    'none',     10, 'Carry the crest with pride.'],

  // ---- Tier 4 · Prestige ----
  ['regalia-t4',  'onyx-gold',      'playfair-jost',   'minimal', 'sparkle',  12, 'Reserved for the discerning.'],
  ['nimbus-t4',   'sky-slate',      'sora-inter',      'aurora',  'waves',    18, 'Live above the noise.'],
  ['sentinel-t4', 'cloud-crimson',  'montserrat-karla','split',   'grid',     8,  'Watched over, around the clock.'],
  ['bastion-t4',  'forest-brass',   'bebas-inter',     'band',    'diagonal', 6,  'Your fortress between semesters.'],
  ['odyssey-t4',  'teal-sandbar',   'grotesk-inter',   'collage', 'waves',    14, 'Chapter one starts at check-in.'],
  ['scholar-t4',  'dune-indigo',    'baskerville-jost','arch',    'none',     12, 'Quiet halls for loud ambitions.'],
  ['pillar-t4',   'sand-terracotta','fraunces-karla',  'split',   'dots',     16, 'The stay your parents approve of.'],
  ['envoy-t4',    'graphite-ice',   'sora-inter',      'minimal', 'grid',     6,  'Diplomatic-grade comfort.'],
  ['mirage-t4',   'plum-noir',      'cormorant-montserrat', 'aurora', 'sparkle', 20, 'Too good to be a mirage.'],
  ['zenith-t4',   'paper-cobalt',   'poppins-nunito',  'band',    'grid',     12, 'Peak living, city center.'],

  // ---- Tier 5 · Flagship ----
  ['sovereign-t5', 'midnight-gold', 'playfair-jost',   'minimal', 'sparkle',  10, 'Rule your own routine.'],
  ['cascade-t5',   'sky-slate',     'dmserif-dmsans',  'aurora',  'waves',    22, 'Comfort that flows through every floor.'],
  ['ironwood-t5',  'charcoal-amber','bebas-inter',     'band',    'diagonal', 4,  'Hard to break. Easy to love.'],
  ['seraphine-t5', 'blush-plum',    'cormorant-montserrat', 'arch', 'dots',   24, 'Wellness woven into every wall.'],
  ['wander-t5',    'coral-sea',     'fraunces-karla',  'collage', 'waves',    16, 'Stay curious. Stay here.'],
  ['academia-t5',  'dune-indigo',   'baskerville-jost','split',   'grid',     10, 'Where toppers set their alarms.'],
  ['foundry-t5',   'graphite-ice',  'grotesk-inter',   'minimal', 'grid',     6,  'Long stays, engineered right.'],
  ['veranda-t5',   'sage-cream',    'lora-nunito',     'arch',    'none',     20, 'Slow evenings, fast wifi.'],
  ['halcyon-t5',   'teal-sandbar',  'poppins-nunito',  'aurora',  'dots',     18, 'Golden days, guaranteed.'],
  ['polaris-t5',   'royal-violet',  'sora-inter',      'aurora',  'sparkle',  14, 'Navigate nights by our light.'],

  // ---- Tier 6 · Ultra ----
  ['imperium-t6',   'onyx-gold',     'playfair-jost',  'minimal', 'sparkle',  8,  'Members only. Almost.'],
  ['nexus-t6',      'slate-neon',    'grotesk-inter',  'aurora',  'grid',     12, 'The connected way to live.'],
  ['vanguard-t6',   'charcoal-amber','bebas-inter',    'band',    'diagonal', 4,  'First in, never falls back.'],
  ['athena-t6',     'blush-plum',    'playfair-jost',  'arch',    'dots',     18, 'Wisdom says: live well.'],
  ['expedition-t6', 'ocean-deep',    'montserrat-karla','collage','waves',    12, 'Basecamp for every border.'],
  ['rhodes-t6',     'dune-indigo',   'baskerville-jost','split',  'none',     10, 'Scholarship starts with sleep.'],
  ['consulate-t6',  'graphite-ice',  'sora-inter',     'minimal', 'grid',     6,  'Where companies house their best.'],
  ['arbor-t6',      'sage-cream',    'dmserif-dmsans', 'arch',    'dots',     22, 'Smart rooms under old trees.'],
  ['monarch-t6',    'midnight-gold', 'cormorant-montserrat', 'aurora', 'sparkle', 14, 'Crowned the best on the block.'],
  ['stratos-t6',    'royal-violet',  'grotesk-inter',  'aurora',  'grid',     16, 'Skyline views, grounded prices.'],

  // ---- Tier 7 · Elite ----
  ['dynasty-t7',  'espresso-cream', 'playfair-jost',   'minimal', 'sparkle',  10, 'Generations choose us.'],
  ['helix-t7',    'slate-neon',     'sora-inter',      'aurora',  'grid',     16, 'Living, personalised to you.'],
  ['titan-t7',    'charcoal-amber', 'bebas-inter',     'band',    'diagonal', 4,  'Outsized comfort. Undersized rent.'],
  ['lyra-t7',     'lilac-dusk',     'cormorant-montserrat', 'arch', 'sparkle', 20, 'A constellation of good company.'],
  ['nomad-t7',    'ocean-deep',     'fraunces-karla',  'collage', 'waves',    14, 'Home is wherever we are.'],
  ['laureate-t7', 'dune-indigo',    'baskerville-jost','split',   'none',     10, 'For the ones who will be quoted.'],
  ['magnate-t7',  'graphite-ice',   'grotesk-inter',   'minimal', 'grid',     6,  'Enterprise housing, executed.'],
  ['estate-t7',   'stone-moss',     'lora-nunito',     'arch',    'dots',     18, 'Many doors, one standard.'],
  ['aurum-t7',    'onyx-gold',      'playfair-jost',   'aurora',  'sparkle',  12, 'The gold standard, literally.'],
  ['celeste-t7',  'royal-violet',   'dmserif-dmsans',  'aurora',  'sparkle',  18, 'Sleep under better stars.'],

  // ---- Tier 8 · Premium ----
  ['palatine-t8',       'onyx-gold',      'cormorant-montserrat', 'minimal', 'sparkle', 10, 'A palace, priced like a room.'],
  ['synergy-t8',        'slate-neon',     'grotesk-inter',  'aurora',  'grid',   14, 'Community, operating in sync.'],
  ['colossus-t8',       'charcoal-amber', 'bebas-inter',    'band',    'diagonal', 2, 'Bigger than your expectations.'],
  ['minerva-t8',        'blush-plum',     'playfair-jost',  'arch',    'dots',   18, 'Intelligence in every detail.'],
  ['meridian-grand-t8', 'ocean-deep',     'fraunces-karla', 'collage', 'waves',  12, 'A grand line across the map.'],
  ['provost-t8',        'dune-indigo',    'baskerville-jost', 'split', 'none',   8,  'Campus living, chancellor-approved.'],
  ['chancellery-t8',    'graphite-ice',   'sora-inter',     'minimal', 'grid',   6,  'Procurement-friendly. People-first.'],
  ['manor-t8',          'stone-moss',     'lora-nunito',    'arch',    'dots',   16, 'Heritage outside, smart inside.'],
  ['gilded-age-t8',     'midnight-gold',  'playfair-jost',  'band',    'sparkle', 10, 'An editorial in gold leaf.'],
  ['apex-t8',           'paper-cobalt',   'grotesk-inter',  'aurora',  'grid',   12, 'The top, by design.'],

  // ---- Tier 9 · Exclusive ----
  ['sovereign-reserve-t9', 'onyx-gold',     'playfair-jost', 'minimal', 'sparkle', 8, 'By invitation. By reputation.'],
  ['constellation-t9',     'royal-violet',  'sora-inter',    'aurora',  'sparkle', 16, 'Every resident, a star.'],
  ['praetorian-t9',        'forest-brass',  'bebas-inter',   'band',    'diagonal', 4, 'Guarding the good life.'],
  ['empress-t9',           'wine-rose',     'cormorant-montserrat', 'arch', 'sparkle', 22, 'Couture living, tailored daily.'],
  ['odyssey-royale-t9',    'ocean-deep',    'fraunces-karla','collage', 'waves',  14, 'An epic, told in check-ins.'],
  ['rhodes-scholar-t9',    'dune-indigo',   'baskerville-jost', 'split', 'none',  8,  'Earn your place in history.'],
  ['ambassador-t9',        'graphite-ice',  'grotesk-inter', 'minimal', 'grid',   6,  'White-glove, wing-tipped, welcome.'],
  ['chateau-t9',           'espresso-cream','lora-nunito',   'arch',    'dots',   18, 'A château with campus wifi.'],
  ['opaline-t9',           'lilac-dusk',    'dmserif-dmsans','aurora',  'sparkle', 20, 'Iridescent from lobby to loft.'],
  ['ascendant-t9',         'slate-neon',    'sora-inter',    'aurora',  'grid',   12, 'Going up. Permanently.'],

  // ---- Tier 10 · Masterpiece ----
  ['magnum-opus-t10',          'onyx-gold',     'playfair-jost', 'minimal', 'sparkle', 8,  'Our finest work. Yours to live in.'],
  ['aetherium-t10',            'royal-violet',  'sora-inter',    'aurora',  'sparkle', 18, 'Somewhere between sky and home.'],
  ['leviathan-t10',            'ocean-deep',    'bebas-inter',   'band',    'waves',   4,  'A campus the size of a legend.'],
  ['empyrean-t10',             'midnight-gold', 'cormorant-montserrat', 'aurora', 'sparkle', 16, 'Light and shadow, choreographed.'],
  ['grand-voyage-t10',         'teal-sandbar',  'fraunces-karla','collage', 'waves',   14, 'The journey of a lifetime, nightly.'],
  ['summa-t10',                'dune-indigo',   'baskerville-jost', 'split', 'grid',   10, 'The sum of everything we know.'],
  ['sovereign-house-t10',      'graphite-ice',  'grotesk-inter', 'minimal', 'grid',    6,  'Boardroom standards, bedroom comfort.'],
  ['palazzo-t10',              'espresso-cream','lora-nunito',   'arch',    'dots',    20, 'A palazzo on a paying-guest budget.'],
  ['auric-crown-t10',          'onyx-gold',     'playfair-jost', 'aurora',  'sparkle', 12, 'Wear the city like a crown.'],
  ['the-saahvik-standard-t10', 'ivory-navy',    'playfair-jost', 'aurora',  'sparkle', 14, 'Everything we know, in one address.'],
];

export const DEMOS: Record<string, DemoConfig> = Object.fromEntries(
  ROWS.map(([id, palette, font, hero, pattern, radius, tagline]) => [
    id,
    { palette, font, hero, pattern, radius, tagline },
  ]),
);

export function getDemo(id: string): DemoConfig | undefined {
  return DEMOS[id];
}
