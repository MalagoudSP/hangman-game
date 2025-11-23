function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-6.5 pt-8 pb-15.5 md:pt-15 md:pr-12 md:pb-24.5 md:pl-10 lg:pt-20 lg:pb-42 xl:pr-29 xl:pl-28 ${className}`}
    >
      {children}
    </div>
  );
}

export default PageContainer;
