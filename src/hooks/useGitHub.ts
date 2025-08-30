import { useState, useEffect } from 'react';
import { githubService } from '@/services/githubService';
import { FormattedRepository, GitHubUser } from '@/types/github';
import { GITHUB_CONFIG } from '@/config/github';

export const useGitHub = () => {
  const [starredRepos, setStarredRepos] = useState<FormattedRepository[]>([]);
  const [userInfo, setUserInfo] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStarredRepositories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const repos = await githubService.getStarredRepositories(1, GITHUB_CONFIG.REPOS_PER_PAGE);
      const formattedRepos = repos.map(repo => githubService.formatRepositoryForDisplay(repo));
      
      setStarredRepos(formattedRepos);
    } catch (err) {
      setError('Erro ao carregar repositórios favoritados');
      console.error('Erro ao buscar repositórios favoritados:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const user = await githubService.getUserInfo();
      setUserInfo(user);
    } catch (err) {
      console.error('Erro ao buscar informações do usuário:', err);
    }
  };

  useEffect(() => {
    fetchStarredRepositories();
    fetchUserInfo();
  }, []);

  const refreshData = () => {
    fetchStarredRepositories();
    fetchUserInfo();
  };

  return {
    starredRepos,
    userInfo,
    loading,
    error,
    refreshData
  };
};
