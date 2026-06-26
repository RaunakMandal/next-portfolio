type BulletListProps = {
  items: string[];
  className?: string;
};

export const BulletList = ({ items, className = '' }: BulletListProps) => {
  return (
    <ul className={`bullet-list space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className='text-sm leading-relaxed text-base-content/70'>
          {item}
        </li>
      ))}
    </ul>
  );
};
