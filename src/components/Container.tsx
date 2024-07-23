export default function Container({ 
  className, children 
}: { 
  className?: string,
  children: React.ReactNode 
}) {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="px-4 sm:px-8 lg:px-24">
        {children}
      </div>
    </div>
  );
}