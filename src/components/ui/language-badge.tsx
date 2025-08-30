import { getLanguageConfig } from '@/config/languages';

interface LanguageBadgeProps {
  language: string;
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const LanguageBadge = ({ 
  language, 
  className = '', 
  showIcon = true, 
  size = 'md' 
}: LanguageBadgeProps) => {
  const config = getLanguageConfig(language);
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2 font-medium rounded-full
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        backgroundColor: `${config.color}20`,
        color: config.color,
        border: `1px solid ${config.color}40`
      }}
    >
      {showIcon && (
        <span className="text-base leading-none">
          {config.icon}
        </span>
      )}
      <span className="font-semibold">
        {config.name}
      </span>
    </span>
  );
};

export default LanguageBadge;
