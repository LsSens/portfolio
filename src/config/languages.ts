export interface LanguageConfig {
  name: string;
  color: string;
  icon: string;
}

export const LANGUAGE_CONFIGS: Record<string, LanguageConfig> = {
  'JavaScript': {
    name: 'JavaScript',
    color: '#f7df1e',
    icon: '⚡'
  },
  'TypeScript': {
    name: 'TypeScript',
    color: '#3178c6',
    icon: '🔷'
  },
  'Python': {
    name: 'Python',
    color: '#3776ab',
    icon: '🐍'
  },
  'Java': {
    name: 'Java',
    color: '#ed8b00',
    icon: '☕'
  },
  'C++': {
    name: 'C++',
    color: '#00599c',
    icon: '⚙️'
  },
  'C#': {
    name: 'C#',
    color: '#178600',
    icon: '🎯'
  },
  'PHP': {
    name: 'PHP',
    color: '#777bb4',
    icon: '🐘'
  },
  'Ruby': {
    name: 'Ruby',
    color: '#cc342d',
    icon: '💎'
  },
  'Go': {
    name: 'Go',
    color: '#00add8',
    icon: '🚀'
  },
  'Rust': {
    name: 'Rust',
    color: '#ce422b',
    icon: '🦀'
  },
  'Swift': {
    name: 'Swift',
    color: '#ffac45',
    icon: '🍎'
  },
  'Kotlin': {
    name: 'Kotlin',
    color: '#7f52ff',
    icon: '🟣'
  },
  'Dart': {
    name: 'Dart',
    color: '#00b4ab',
    icon: '🎯'
  },
  'Scala': {
    name: 'Scala',
    color: '#dc322f',
    icon: '🔴'
  },
  'Elixir': {
    name: 'Elixir',
    color: '#6e4a7e',
    icon: '💜'
  },
  'Clojure': {
    name: 'Clojure',
    color: '#5881d8',
    icon: '🟦'
  },
  'Haskell': {
    name: 'Haskell',
    color: '#5d4f85',
    icon: 'λ'
  },
  'F#': {
    name: 'F#',
    color: '#378bba',
    icon: '🔵'
  },
  'Objective-C': {
    name: 'Objective-C',
    color: '#438eff',
    icon: '📱'
  },
  'Shell': {
    name: 'Shell',
    color: '#4eaa25',
    icon: '🐚'
  },
  'PowerShell': {
    name: 'PowerShell',
    color: '#012456',
    icon: '💻'
  },
  'HTML': {
    name: 'HTML',
    color: '#e34c26',
    icon: '🌐'
  },
  'CSS': {
    name: 'CSS',
    color: '#1572b6',
    icon: '🎨'
  },
  'SCSS': {
    name: 'SCSS',
    color: '#cf649a',
    icon: '🎨'
  },
  'Sass': {
    name: 'Sass',
    color: '#cf649a',
    icon: '🎨'
  },
  'Less': {
    name: 'Less',
    color: '#1d365d',
    icon: '🎨'
  },
  'Vue': {
    name: 'Vue',
    color: '#4fc08d',
    icon: '🟢'
  },
  'React': {
    name: 'React',
    color: '#61dafb',
    icon: '⚛️'
  },
  'Angular': {
    name: 'Angular',
    color: '#dd0031',
    icon: '🅰️'
  },
  'Svelte': {
    name: 'Svelte',
    color: '#ff3e00',
    icon: '⚡'
  },
  'Solid': {
    name: 'Solid',
    color: '#2c4f7c',
    icon: '🔷'
  },
  'Next.js': {
    name: 'Next.js',
    color: '#000000',
    icon: '⚡'
  },
  'Nuxt.js': {
    name: 'Nuxt.js',
    color: '#00dc82',
    icon: '🟢'
  },
  'Gatsby': {
    name: 'Gatsby',
    color: '#663399',
    icon: '🟣'
  },
  'Astro': {
    name: 'Astro',
    color: '#ff5d01',
    icon: '🚀'
  },
  'Remix': {
    name: 'Remix',
    color: '#000000',
    icon: '⚡'
  },
  'Node.js': {
    name: 'Node.js',
    color: '#339933',
    icon: '🟢'
  },
  'Deno': {
    name: 'Deno',
    color: '#000000',
    icon: '🦕'
  },
  'Bun': {
    name: 'Bun',
    color: '#fbf0df',
    icon: '🍞'
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    color: '#336791',
    icon: '🐘'
  },
  'MySQL': {
    name: 'MySQL',
    color: '#4479a1',
    icon: '🐬'
  },
  'MongoDB': {
    name: 'MongoDB',
    color: '#47a248',
    icon: '🍃'
  },
  'Redis': {
    name: 'Redis',
    color: '#dc382d',
    icon: '🔴'
  },
  'SQLite': {
    name: 'SQLite',
    color: '#003b57',
    icon: '🗄️'
  },
  'GraphQL': {
    name: 'GraphQL',
    color: '#e10098',
    icon: '🟣'
  },
  'Docker': {
    name: 'Docker',
    color: '#2496ed',
    icon: '🐳'
  },
  'Kubernetes': {
    name: 'Kubernetes',
    color: '#326ce5',
    icon: '☸️'
  },
  'Terraform': {
    name: 'Terraform',
    color: '#7b42bc',
    icon: '🏗️'
  },
  'AWS': {
    name: 'AWS',
    color: '#ff9900',
    icon: '☁️'
  },
  'Azure': {
    name: 'Azure',
    color: '#0089d6',
    icon: '☁️'
  },
  'Google Cloud': {
    name: 'Google Cloud',
    color: '#4285f4',
    icon: '☁️'
  },
  'Firebase': {
    name: 'Firebase',
    color: '#ffca28',
    icon: '🔥'
  },
  'Vercel': {
    name: 'Vercel',
    color: '#000000',
    icon: '▲'
  },
  'Netlify': {
    name: 'Netlify',
    color: '#00ad9f',
    icon: '🌐'
  },
  'Heroku': {
    name: 'Heroku',
    color: '#430098',
    icon: '🚀'
  }
};

export const getLanguageConfig = (language: string): LanguageConfig => {
  const config = LANGUAGE_CONFIGS[language];
  if (config) {
    return config;
  }
  
  return {
    name: language,
    color: '#6b7280',
    icon: '💻'
  };
};

export const getCommonLanguages = (): LanguageConfig[] => {
  const commonLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#',
    'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'Dart',
    'HTML', 'CSS', 'React', 'Vue', 'Angular', 'Node.js'
  ];
  
  return commonLanguages
    .map(lang => LANGUAGE_CONFIGS[lang])
    .filter(Boolean);
};
