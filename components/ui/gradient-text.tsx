import { cn } from '@/lib/utils';

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
}

export function GradientText({ 
  text, 
  className,
  gradient = "from-blue-600 to-purple-600"
}: GradientTextProps) {
  return (
    <span className={cn(
      `bg-gradient-to-r ${gradient} text-transparent bg-clip-text`,
      className
    )}>
      {text}
    </span>
  );
}