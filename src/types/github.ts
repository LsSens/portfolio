export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
  private: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface FormattedRepository {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string;
  stars: number;
  forks: number;
  topics: string[];
}
