import "../scss/components/Heading.scss";

interface HeadingProps {
  as: "h1" | "h2" | "h3";
  variant?: "small";
  children: React.ReactNode;
}

const Heading = ({ as: Component, variant, children }: HeadingProps) => {
  return (
    <Component
      className={`heading ${Component}${
        variant ? ` ${Component}--${variant}` : ""
      }`}
    >
      {children}
    </Component>
  );
};

export default Heading;
