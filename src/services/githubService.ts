import { GitHubRepository, GitHubUser, FormattedRepository } from '@/types/github';
import { GITHUB_CONFIG } from '@/config/github';

class GitHubService {
  private baseUrl = GITHUB_CONFIG.BASE_URL;
  private username = GITHUB_CONFIG.USERNAME;

  async getUserInfo(): Promise<GitHubUser> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}`);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar usuário: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
      throw error;
    }
  }

  async getStarredRepositories(page: number = 1, perPage: number = GITHUB_CONFIG.REPOS_PER_PAGE): Promise<GitHubRepository[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/starred?page=${page}&per_page=${perPage}&sort=updated`
      );
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar repositórios favoritados: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar repositórios favoritados:', error);
      throw error;
    }
  }

  async getPublicRepositories(page: number = 1, perPage: number = GITHUB_CONFIG.REPOS_PER_PAGE): Promise<GitHubRepository[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?page=${page}&per_page=${perPage}&sort=updated&type=public`
      );
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar repositórios públicos: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar repositórios públicos:', error);
      throw error;
    }
  }

  async getRepositoryLanguages(owner: string, repo: string): Promise<Record<string, number>> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}/languages`);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar linguagens: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar linguagens do repositório:', error);
      return {};
    }
  }

  // Função para formatar os dados do repositório para o formato usado no componente
  formatRepositoryForDisplay(repo: GitHubRepository): FormattedRepository {
    return {
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || 'Sem descrição disponível',
      technologies: repo.language ? [repo.language] : [],
      liveUrl: repo.homepage || null,
      githubUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || []
    };
  }
}

export const githubService = new GitHubService();
export default GitHubService;
