import { Icon } from "@/components/atoms";

type DropdownItem = { label: string; href: string; separator?: boolean };

export default function Dropdown({
  label,
  title,
  items,
  align = "center",
  showCaret = true,
}: {
  label: string;
  title?: string;
  items: DropdownItem[];
  align?: "left" | "center" | "right";
  showCaret?: boolean;
}) {
  const alignTrigger =
    align === "center"
      ? "before:left-1/2 before:-translate-x-1/2"
      : align === "left"
        ? "before:left-0"
        : "before:right-0";

  const alignMenu =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "left"
        ? "left-0"
        : "right-0";

  return (
    <div
      className={`relative group before:content-[''] before:absolute ${alignTrigger} before:top-full before:h-3 before:w-80`}
    >
      <a
        className="opacity-90 hover:opacity-100 inline-flex items-center gap-1 font-black"
        href="#"
      >
        {label}
        {showCaret && (
          <Icon
            src="/images/ic_caret_down.png"
            alt="caret down"
            width={20}
            height={20}
          />
        )}
      </a>
      <div
        className={`absolute ${alignMenu} top-full mt-3 w-80 rounded-lg overflow-hidden bg-white text-[#0F172A] shadow-xl ring-1 ring-black/10 transition-opacity transition-transform duration-200 ease-out opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
      >
        <div className="px-4 pt-4 pb-2 font-black text-[#0F172A]">
          {title ?? label}
        </div>
        {items.map((item, i) => (
          <a
            key={i}
            className={`block px-4 py-3 text-[#344054] hover:bg-slate-50 ${item.separator ? "border-t border-slate-100" : ""}`}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
