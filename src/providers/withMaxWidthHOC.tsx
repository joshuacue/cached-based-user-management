export const withMaxWidthHOC = <P extends object>(
  Component: React.ComponentType<P>,
): React.ComponentType<P> => {
  const WithMaxWidth = (props: P) => (
    <div className="py-4 px-2 max-w-[144em] mx-auto">
      <Component {...props} />
    </div>
  );

  WithMaxWidth.displayName = `WithMaxWidth(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithMaxWidth;
};
