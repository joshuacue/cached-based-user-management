"use-client";
export interface LinkItemProps {
  href: string;
  value: string;
}

export const LinkItem = ({ href, value }: LinkItemProps) => (
  <>
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-describedby="website-info"
    >
      <span className="text-1.4" aria-live="assertive">
        {value}
      </span>
    </a>
    <span id="website-info" className="sr-only">
      This link opens in a new tab.
    </span>
  </>
);

export default LinkItem;
