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
