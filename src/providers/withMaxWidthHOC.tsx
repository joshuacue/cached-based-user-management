export const withMaxWidthHOC = <P extends object>(
  Component: React.ComponentType<P>,
  HeaderComponent?: React.ComponentType<P>,
): React.ComponentType<P> => {
  const WithMaxWidth = (props: P) => (
    <main className={`min-screen min-h-screen h-full`}>
      {HeaderComponent && <HeaderComponent {...props} />}
      <div className="py-4 px-2 max-w-[144em] mx-auto">
        <Component {...props} />
      </div>
    </main>
  );

  WithMaxWidth.displayName = `WithMaxWidth(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithMaxWidth;
};
