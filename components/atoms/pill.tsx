type PillProps = {
  children: React.ReactNode;
};

export default function Pill({ children }: PillProps) {
  return (
    <span className="relative inline-flex w-max items-center rounded-lg bg-white px-3 py-[6px] text-lg font-black text-[#40E2E8] shadow-sm after:content-[''] after:absolute after:left-5 after:-bottom-[8px] after:border-t-[10px] after:border-l-[8px] after:border-r-[8px] after:border-l-transparent after:border-r-transparent after:border-t-white">
      {children}
    </span>
  );
}
