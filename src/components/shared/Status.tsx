import type { IconType } from "react-icons";

interface StatusType {
  text: string;
  bg: string;
  color: string;
  icon: IconType;
}

export default function Status({ text, icon: Icon, bg, color }: StatusType) {
  return (
    <div
      className={`${bg} ${color} px-2 py-2 font-medium rounded-md flex items-center gap-1`}
    >
      {text} <Icon size={15} />
    </div>
  );
}
