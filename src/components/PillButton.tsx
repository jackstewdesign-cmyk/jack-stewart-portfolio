import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface PillButtonProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "download"> {
  variant?: "accent" | "primary";
  icon?: string;
  iconAlt?: string;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Pill CTA button — the "Buttons" component from the Figma file.
 * `variant="accent"` is the chartreuse-fill / near-black-text style used for
 * Download CV / LinkedIn (documented in design_1.md §9.2 as a variant not
 * covered by the base §2.3 primary token — bright fill, dark text).
 * `variant="primary"` is the base charcoal-fill / chartreuse-text style used
 * for "View project".
 *
 * A same-site `href` (starts with "/", not a download) renders as a router
 * `<Link>` for client-side navigation; anything else (external URLs, "#"
 * anchors, downloads) renders as a plain `<a>`.
 */
export default function PillButton({
  href,
  variant = "accent",
  icon,
  iconAlt = "",
  iconPosition = "left",
  iconClassName = "h-[18px] w-4",
  external = false,
  download,
  className = "",
  children,
}: PillButtonProps) {
  const base =
    "inline-flex items-center gap-3 whitespace-nowrap rounded-full px-5 py-3 text-base font-semibold transition-colors";
  const variants: Record<NonNullable<PillButtonProps["variant"]>, string> = {
    accent: "bg-chartreuse text-on-chartreuse hover:bg-chartreuse-hover",
    primary: "bg-charcoal text-chartreuse hover:bg-black",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <img src={icon} alt={iconAlt} className={iconClassName} aria-hidden={iconAlt === ""} />
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <img src={icon} alt={iconAlt} className={iconClassName} aria-hidden={iconAlt === ""} />
      )}
    </>
  );

  if (!external && !download && href?.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {content}
    </a>
  );
}
