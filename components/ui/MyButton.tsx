interface myButtonProps {
  label: string;
  onClick: () => void;
  color?: 'blue' | 'red';
}
export function MyButton({ label, onClick, color = 'blue' }: myButtonProps) {
  const colorClasses =
    color === 'blue'
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'bg-red-600 hover:bg-red-700';
  return (
    <button
      onClick={onClick}
      className={`${colorClasses} text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all active:scale-95`}
    >
      {label}
    </button>
  );
}
