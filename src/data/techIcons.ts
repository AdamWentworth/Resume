import {
  siApachekafka,
  siApple,
  siAstro,
  siCplusplus,
  siCmake,
  siCss,
  siDocker,
  siExpress,
  siExpo,
  siFastapi,
  siGit,
  siGithubactions,
  siGo,
  siGoogle,
  siJavascript,
  siJson,
  siLinux,
  siLua,
  siMongodb,
  siMysql,
  siNginx,
  siNodedotjs,
  siOllama,
  siOpengl,
  siPostgresql,
  siProtools,
  siPython,
  siReact,
  siRiotgames,
  siRust,
  siSqlite,
  siTauri,
  siTypescript,
  siYoutube,
} from 'simple-icons';

export interface IconData {
  hex: string;
  path: string;
  title: string;
}

export type CustomIconKind =
  | 'activeDirectory'
  | 'ai'
  | 'algorithm'
  | 'analytics'
  | 'audio'
  | 'checkShield'
  | 'dataCheck'
  | 'dataNodes'
  | 'direct3d'
  | 'document'
  | 'fiber'
  | 'flow'
  | 'chi'
  | 'llamacpp'
  | 'microphone'
  | 'network'
  | 'office'
  | 'oop'
  | 'operatingSystems'
  | 'outcome'
  | 'production'
  | 'sdl'
  | 'sol'
  | 'spreadsheet'
  | 'testTube'
  | 'tool'
  | 'vitest'
  | 'windows';

export type CustomIconData = {
  kind: CustomIconKind;
  color?: string;
};

export type ImageIconData = {
  src: string;
  className?: string;
};

export type CustomShape =
  | { type: 'path'; d: string; opacity?: number }
  | { type: 'circle'; cx: number; cy: number; r: number; opacity?: number }
  | { type: 'rect'; x: number; y: number; width: number; height: number; rx?: number; opacity?: number }
  | { type: 'text'; value: string; x: number; y: number; size: number; opacity?: number };

export const customIconShapes: Partial<Record<CustomIconKind, CustomShape[]>> = {
  activeDirectory: [
    { type: 'rect', x: 9, y: 3, width: 6, height: 5, rx: 1 },
    { type: 'rect', x: 3, y: 16, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 9.5, y: 16, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 16, y: 16, width: 5, height: 5, rx: 1 },
    { type: 'path', d: 'M11 8h2v4h6v4h-2v-2H7v2H5v-4h6V8Z', opacity: 0.55 },
  ],
  ai: [
    { type: 'circle', cx: 12, cy: 12, r: 3.2 },
    { type: 'circle', cx: 12, cy: 4.2, r: 1.8, opacity: 0.72 },
    { type: 'circle', cx: 18.7, cy: 8.2, r: 1.8, opacity: 0.72 },
    { type: 'circle', cx: 18.7, cy: 15.8, r: 1.8, opacity: 0.72 },
    { type: 'circle', cx: 12, cy: 19.8, r: 1.8, opacity: 0.72 },
    { type: 'circle', cx: 5.3, cy: 15.8, r: 1.8, opacity: 0.72 },
    { type: 'circle', cx: 5.3, cy: 8.2, r: 1.8, opacity: 0.72 },
    {
      type: 'path',
      d: 'M11 5.8h2v4.1h-2V5.8Zm4 5 2.7-1.6 1 1.7-2.8 1.6-1-1.7Zm.9 2.7 2.8 1.6-1 1.7-2.7-1.6.9-1.7ZM11 14.1h2v4.1h-2v-4.1ZM5.3 15.1l2.8-1.6.9 1.7-2.7 1.6-1-1.7Zm0-4.2 1-1.7L9 10.8l-.9 1.7-2.8-1.6Z',
      opacity: 0.35,
    },
  ],
  algorithm: [
    { type: 'rect', x: 4, y: 3, width: 7, height: 5, rx: 1 },
    { type: 'path', d: 'M16.5 2.8 21.2 7.5 16.5 12.2 11.8 7.5 16.5 2.8Z' },
    { type: 'rect', x: 4, y: 16, width: 7, height: 5, rx: 1 },
    { type: 'path', d: 'M11 5h2v2h-2V5Zm-4 3h2v8H7V8Zm8.7 4.7 1.4 1.4-4.5 4.5-1.4-1.4 4.5-4.5Z', opacity: 0.45 },
  ],
  analytics: [
    { type: 'rect', x: 4, y: 13, width: 3.5, height: 7, rx: 0.8 },
    { type: 'rect', x: 10.2, y: 8, width: 3.5, height: 12, rx: 0.8 },
    { type: 'rect', x: 16.5, y: 4, width: 3.5, height: 16, rx: 0.8 },
    { type: 'path', d: 'M3 21h18v-2H3v2Z', opacity: 0.4 },
  ],
  audio: [
    { type: 'rect', x: 4, y: 9, width: 2.4, height: 6, rx: 1.2 },
    { type: 'rect', x: 8, y: 5, width: 2.4, height: 14, rx: 1.2 },
    { type: 'rect', x: 12, y: 8, width: 2.4, height: 8, rx: 1.2 },
    { type: 'rect', x: 16, y: 3, width: 2.4, height: 18, rx: 1.2 },
    { type: 'rect', x: 20, y: 10, width: 1.8, height: 4, rx: 0.9 },
  ],
  checkShield: [
    { type: 'rect', x: 5, y: 4, width: 2, height: 11, rx: 1, opacity: 0.7 },
    { type: 'rect', x: 11, y: 4, width: 2, height: 14, rx: 1, opacity: 0.7 },
    { type: 'rect', x: 17, y: 4, width: 2, height: 8, rx: 1, opacity: 0.7 },
    { type: 'circle', cx: 6, cy: 10, r: 2 },
    { type: 'circle', cx: 12, cy: 7.5, r: 2 },
    { type: 'circle', cx: 18, cy: 13, r: 2 },
    { type: 'path', d: 'm7.2 18 1.5-1.5 1.8 1.8 4.7-5.2 1.5 1.3-6.2 6.9L7.2 18Z' },
  ],
  dataCheck: [
    { type: 'text', value: 'QA', x: 8.5, y: 10, size: 6.7 },
    {
      type: 'path',
      d: 'M4 14h7v1.7H4V14Zm0 3.3h9.5V19H4v-1.7Zm10.4-3.2 1.4-1.4 1.4 1.4 3.1-3.5 1.5 1.3-4.6 5.2-2.8-3Z',
    },
    { type: 'path', d: 'M4 5h8v1.8H4V5Zm0 3.4h6v1.7H4V8.4Z', opacity: 0.55 },
  ],
  dataNodes: [
    { type: 'rect', x: 3, y: 5, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 9.5, y: 5, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 16, y: 5, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 7, y: 15, width: 5, height: 5, rx: 1 },
    { type: 'rect', x: 14, y: 15, width: 5, height: 5, rx: 1 },
    { type: 'path', d: 'M8 7h1.5v2H8V7Zm6.5 0H16v2h-1.5V7Zm-2.7 3h1.8v5h-1.8v-5Z', opacity: 0.45 },
  ],
  direct3d: [
    { type: 'path', d: 'M0.6 4h4.7l2.9 4.7L11.1 4h4.7l-5.1 8 5.3 8h-4.7l-3.1-4.9L5.1 20H0.4l5.4-8L0.6 4Z' },
    { type: 'rect', x: 16.4, y: 4, width: 3.2, height: 16, rx: 0.8 },
    { type: 'rect', x: 20.8, y: 4, width: 3.2, height: 16, rx: 0.8 },
    {
      type: 'path',
      d: 'M1.2 7.1h3.5l1 1.6H2.2l-1-1.6Zm12.8 0h1.1l-1 1.6h-1.2l1.1-1.6Zm2.9 0h2.2v1.6h-2.2V7.1Zm4.4 0h2.2v1.6h-2.2V7.1ZM3.5 11.2h3.1l1 1.6H4.5l-1-1.6Zm6.4 0h2.8l-1 1.6H8.9l1-1.6Zm7 0h2.2v1.6h-2.2v-1.6Zm4.4 0h2.2v1.6h-2.2v-1.6ZM2 15.3h3.1l-1.1 1.6H1l1-1.6Zm10.8 0h2.8l1.1 1.6h-2.9l-1-1.6Zm4.1 0h2.2v1.6h-2.2v-1.6Zm4.4 0h2.2v1.6h-2.2v-1.6Z',
      opacity: 0.28,
    },
  ],
  document: [
    { type: 'path', d: 'M6 3h8l4 4v14H6V3Zm7 1.5V8h3.5L13 4.5Z' },
    { type: 'rect', x: 8.5, y: 10.5, width: 7, height: 1.6, rx: 0.8, opacity: 0.45 },
    { type: 'rect', x: 8.5, y: 14, width: 7, height: 1.6, rx: 0.8, opacity: 0.45 },
    { type: 'rect', x: 8.5, y: 17.5, width: 5, height: 1.6, rx: 0.8, opacity: 0.45 },
  ],
  fiber: [
    { type: 'path', d: 'M2.2 6h10.7l-1 2.6H1.1L2.2 6Z' },
    { type: 'path', d: 'M5.1 10.8h10.7l-1.1 2.7H4l1.1-2.7Z' },
    { type: 'path', d: 'M1.2 15.7h10.7l-1.1 2.7H0.1l1.1-2.7Z' },
    { type: 'path', d: 'M16.3 6h7.2l-.9 2.6h-7.3l1-2.6Z', opacity: 0.32 },
  ],
  flow: [
    { type: 'rect', x: 3, y: 4, width: 6, height: 5, rx: 1 },
    { type: 'rect', x: 15, y: 4, width: 6, height: 5, rx: 1 },
    { type: 'rect', x: 9, y: 15, width: 6, height: 5, rx: 1 },
    { type: 'path', d: 'M9 6h6v2H9V6Zm2 3h2v6h-2V9Z', opacity: 0.5 },
  ],
  chi: [
    {
      type: 'path',
      d: 'M4.7 8.5c0-2.5 1.6-4 4.2-4h3.5v3.1H9.3c-.9 0-1.4.4-1.4 1.2v1.5h4.5v3H7.9v1.6c0 .8.5 1.2 1.4 1.2h3.1v3.2H8.9c-2.6 0-4.2-1.5-4.2-4.1V8.5Z',
    },
    {
      type: 'path',
      d: 'M13.1 4.5h3.4v5.1c.7-.7 1.6-1 2.8-1 2.6 0 4.1 1.6 4.1 4.4v6.3H20v-5.9c0-1.1-.5-1.7-1.5-1.7-1.1 0-2 .7-2 2.1v5.5h-3.4V4.5Z',
      opacity: 0.88,
    },
    { type: 'circle', cx: 21.2, cy: 4.9, r: 2.3 },
  ],
  microphone: [
    { type: 'rect', x: 9, y: 3, width: 6, height: 11, rx: 3 },
    {
      type: 'path',
      d: 'M6 10h2c0 3 1.5 5 4 5s4-2 4-5h2c0 3.8-2 6.5-5 7v3h3v2H8v-2h3v-3c-3-.5-5-3.2-5-7Z',
      opacity: 0.55,
    },
  ],
  network: [
    { type: 'circle', cx: 12, cy: 12, r: 3 },
    { type: 'circle', cx: 5, cy: 6, r: 2.2 },
    { type: 'circle', cx: 19, cy: 6, r: 2.2 },
    { type: 'circle', cx: 5, cy: 18, r: 2.2 },
    { type: 'circle', cx: 19, cy: 18, r: 2.2 },
    {
      type: 'path',
      d: 'm6.5 7.6 4 3.2-1.2 1.6-4-3.2 1.2-1.6Zm11-1.6 1.2 1.6-4 3.2-1.2-1.6 4-3.2ZM9.3 11.6l1.2 1.6-4 3.2-1.2-1.6 4-3.2Zm5.4 0 4 3.2-1.2 1.6-4-3.2 1.2-1.6Z',
      opacity: 0.45,
    },
  ],
  office: [
    { type: 'path', d: 'M4 5.5 12 2l8 3.5v13L12 22l-8-3.5v-13Zm4 2v9l4 1.8V5.7L8 7.5Zm6-1.8v12.6l3-1.3V7l-3-1.3Z' },
  ],
  oop: [
    { type: 'path', d: 'M7 3 13 6v6l-6 3-6-3V6l6-3Zm10 6 6 3v6l-6 3-6-3v-6l6-3Z' },
    { type: 'path', d: 'M7 6.2 3.8 7.8 7 9.4l3.2-1.6L7 6.2Zm10 6L13.8 14l3.2 1.6 3.2-1.6-3.2-1.8Z', opacity: 0.45 },
  ],
  operatingSystems: [
    { type: 'rect', x: 3, y: 4, width: 18, height: 12, rx: 1.5 },
    { type: 'path', d: 'M9 20h6l-.8-4h-4.4L9 20Zm-3 0h12v2H6v-2Z', opacity: 0.45 },
    { type: 'path', d: 'M6 7h5v3.2H6V7Zm7 0h5v3.2h-5V7ZM6 11.8h5V14H6v-2.2Zm7 0h5V14h-5v-2.2Z', opacity: 0.4 },
  ],
  outcome: [
    { type: 'rect', x: 4, y: 3, width: 2, height: 18, rx: 1 },
    { type: 'path', d: 'M7 4h11l-2 4 2 4H7V4Zm3.4 11.3 1.7-1.7 1.8 1.8 4.1-4.5 1.7 1.5-5.8 6.4-3.5-3.5Z' },
  ],
  production: [
    { type: 'path', d: 'M4 5h16v14H4V5Zm6 4v6l5-3-5-3Z' },
    { type: 'path', d: 'M5.5 6.5h3l-2 2h-3l2-2Zm5 0h3l-2 2h-3l2-2Zm5 0h3l-2 2h-3l2-2Z', opacity: 0.45 },
  ],
  sdl: [
    { type: 'path', d: 'M3.1 15.6c4.7 4.4 14.3 3.1 18-3.1l1.2.9C18.2 21 6.7 22 2 17l1.1-1.4Z', opacity: 0.4 },
    { type: 'circle', cx: 19.2, cy: 14.3, r: 1.6 },
    { type: 'circle', cx: 15.5, cy: 17.1, r: 1, opacity: 0.72 },
    { type: 'circle', cx: 10.7, cy: 18.1, r: 0.8, opacity: 0.62 },
    { type: 'text', value: 'SDL', x: 10.7, y: 11.6, size: 9.2 },
  ],
  spreadsheet: [
    { type: 'rect', x: 4, y: 5, width: 4, height: 3, rx: 0.6 },
    { type: 'rect', x: 10, y: 5, width: 4, height: 3, rx: 0.6 },
    { type: 'rect', x: 16, y: 5, width: 4, height: 3, rx: 0.6 },
    { type: 'rect', x: 4, y: 10.5, width: 4, height: 3, rx: 0.6, opacity: 0.72 },
    { type: 'rect', x: 10, y: 10.5, width: 4, height: 3, rx: 0.6, opacity: 0.72 },
    { type: 'rect', x: 16, y: 10.5, width: 4, height: 3, rx: 0.6, opacity: 0.72 },
    { type: 'path', d: 'M4 17h7v1.7H4V17Zm9 0h7v1.7h-7V17Z', opacity: 0.55 },
  ],
  testTube: [
    { type: 'path', d: 'M8 3h8v2h-2v6.8l5.1 6.9c.9 1.2.1 3.3-1.5 3.3H6.4c-1.6 0-2.4-2.1-1.5-3.3l5.1-6.9V5H8V3Z' },
    { type: 'path', d: 'M8 17h8l1.4 2H6.6L8 17Z', opacity: 0.45 },
  ],
  tool: [
    {
      type: 'path',
      d: 'M17.8 3.2a5.8 5.8 0 0 0-6.6 7.5l-8 8 2.6 2.6 8-8a5.8 5.8 0 0 0 7.5-6.6l-3.7 3.7-2.2-2.2 3.7-3.7c-.4-.5-.8-.9-1.3-1.3Z',
    },
    { type: 'path', d: 'm12 4 2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5L12 4Z', opacity: 0.22 },
  ],
  windows: [
    {
      type: 'path',
      d: 'M3 5.42 10.75 4.35v7.36H3V5.42Zm8.55-1.18L21 2.96v8.75h-9.45V4.24ZM3 12.54h7.75v7.15L3 18.62v-6.08Zm8.55 0H21v8.5l-9.45-1.24v-7.26Z',
    },
  ],
};

export const iconMap: Record<string, IconData> = {
  Astro: siAstro,
  'C++20': siCplusplus,
  CMake: siCmake,
  CSS: siCss,
  Docker: siDocker,
  Expo: siExpo,
  Express: siExpress,
  FastAPI: siFastapi,
  'Google Workspace': siGoogle,
  Git: siGit,
  'GitHub Actions': siGithubactions,
  Go: siGo,
  JavaScript: siJavascript,
  JSON: siJson,
  Kafka: siApachekafka,
  Linux: siLinux,
  Lua: siLua,
  macOS: siApple,
  MongoDB: siMongodb,
  MySQL: siMysql,
  NGINX: siNginx,
  'net/http': siGo,
  Node: siNodedotjs,
  'Node/Express': siNodedotjs,
  OpenGL: siOpengl,
  Ollama: siOllama,
  'Postgres/PostGIS': siPostgresql,
  'PostgreSQL/PostGIS': siPostgresql,
  'Pro Tools': siProtools,
  Python: siPython,
  React: siReact,
  'Riot Games Partner': siRiotgames,
  Rust: siRust,
  SQLite: siSqlite,
  Tauri: siTauri,
  TypeScript: siTypescript,
  '200k subscribers': siYoutube,
};

export const customIconMap: Record<string, CustomIconData> = {
  'Active Directory': { kind: 'activeDirectory', color: '#0078d4' },
  Algorithms: { kind: 'algorithm', color: '#7c3aed' },
  'Analog gear': { kind: 'tool', color: '#7c3aed' },
  'Artist research': { kind: 'analytics', color: '#0f766e' },
  Analytics: { kind: 'analytics', color: '#0f766e' },
  Accessibility: { kind: 'outcome', color: '#16a34a' },
  'CLI tools': { kind: 'tool', color: '#64748b' },
  'Data structures': { kind: 'dataNodes', color: '#2563eb' },
  Documentation: { kind: 'document', color: '#64748b' },
  'Direct3D 12': { kind: 'direct3d', color: '#107c10' },
  'Engine architecture': { kind: 'dataNodes', color: '#2563eb' },
  Fiber: { kind: 'fiber', color: '#00add8' },
  'Image processing': { kind: 'dataNodes', color: '#0891b2' },
  'JWT auth': { kind: 'checkShield', color: '#16a34a' },
  'Live floor tracking': { kind: 'microphone', color: '#0891b2' },
  'Metadata QA': { kind: 'dataCheck', color: '#0f766e' },
  chi: { kind: 'chi', color: '#00a650' },
  ClickHouse: { kind: 'dataNodes', color: '#ffcc01' },
  'llama.cpp': { kind: 'llamacpp', color: '#ff8236' },
  Microservices: { kind: 'network', color: '#2563eb' },
  'Music catalog operations': { kind: 'audio', color: '#7c3aed' },
  Networking: { kind: 'network', color: '#0891b2' },
  OOP: { kind: 'oop', color: '#7c3aed' },
  'Office 365': { kind: 'office', color: '#d83b01' },
  'Operating systems': { kind: 'operatingSystems', color: '#475569' },
  'OpenAI API': { kind: 'ai', color: '#111827' },
  'Production workflows': { kind: 'production', color: '#be123c' },
  'Python scripting': { kind: 'tool', color: '#3776ab' },
  'Recording engineering': { kind: 'microphone', color: '#7c3aed' },
  'Riot API': { kind: 'analytics', color: `#${siRiotgames.hex}` },
  'Royalty claim readiness': { kind: 'outcome', color: '#16a34a' },
  SDL2: { kind: 'sdl', color: '#17395f' },
  SQL: { kind: 'dataNodes', color: '#2563eb' },
  'Session management': { kind: 'document', color: '#64748b' },
  'Signal flow': { kind: 'flow', color: '#2563eb' },
  sol2: { kind: 'sol', color: '#ffb300' },
  SSE: { kind: 'flow', color: '#0284c7' },
  'Spreadsheet systems': { kind: 'spreadsheet', color: '#15803d' },
  Testing: { kind: 'testTube', color: '#0f766e' },
  'Tool workflows': { kind: 'flow', color: '#64748b' },
  Vitest: { kind: 'vitest', color: '#729b1b' },
  'Whisper ASR': { kind: 'microphone', color: '#0284c7' },
  Windows: { kind: 'windows', color: '#0078d4' },
};

export const imageIconMap: Record<string, ImageIconData> = {
  'llama.cpp': {
    src: '/images/llamacpp-logo.svg',
    className: 'tech-icon-llamacpp',
  },
  sol2: {
    src: '/images/sol2-logo.png',
  },
  Vitest: {
    src: '/images/vitest-logo.svg',
    className: 'tech-icon-vitest',
  },
  'League of Legends Partner': {
    src: '/images/league-of-legends-icon.svg',
    className: 'tech-icon-league',
  },
};
