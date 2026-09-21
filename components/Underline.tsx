export default function Underline({
  children,
  color = "text-terracota-400",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 120 14"
        preserveAspectRatio="none"
        className={`absolute left-0 top-[92%] w-full h-[0.35em] ${color}`}
      >
        <path
          d="M2 9.5C22 3.5 48 2 63 6C82 11 100 4 118 7"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
