import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-10 md:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
