type TechListProps = {
  items: string[];
  label: string;
  className?: string;
};

export function TechList({ items, label, className = "tech-list" }: TechListProps) {
  return (
    <div className={className} aria-label={label}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
