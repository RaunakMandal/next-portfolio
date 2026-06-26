type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className='mb-10 pb-6 border-b border-base-300/40'>
      <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
        {title}
      </h1>
      {subtitle && (
        <p className='mt-2 text-base-content/55 text-sm sm:text-base leading-relaxed max-w-xl'>
          {subtitle}
        </p>
      )}
    </header>
  );
};
