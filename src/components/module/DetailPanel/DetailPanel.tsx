"use-client";
interface DetailPanelProps {
  title: string;
  children: React.ReactNode;
}

export const DetailPanel = ({ title, children }: DetailPanelProps) => (
  <div
    className="flex ring-1 ring-gray-100 flex-col rounded-0.4 w-full shadow-xl py-2 px-3 text-gray-800"
    role="region"
    aria-label={title}
  >
    <h2 className="text-1.8 font-bold mb-1">{title}</h2>
    {children}
  </div>
);

export default DetailPanel;
