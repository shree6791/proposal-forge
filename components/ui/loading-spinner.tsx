export function LoadingSpinner({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="h-full w-full border-4 border-t-blue-500 border-b-blue-700 border-l-blue-500 border-r-blue-700 rounded-full" />
    </div>
  );
}