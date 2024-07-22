interface LoadMoreButtonProps {
  onClick: () => void;
  visible: boolean;
  isLoading: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, visible, isLoading }) => {
  if (!visible) return null;

  return (
    <button 
      onClick={onClick} 
      disabled={isLoading}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </button>
  );
};

export default LoadMoreButton;