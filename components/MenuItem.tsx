type Element =
  import("/Users/tejas/Sites/LAB/mitosis/node_modules/@builder.io/mitosis/jsx-runtime").JSX.Element;

export default function MenuItem({ children }: { children: Element }) {
  return (
    <div className="px-4 py-2 text-xl transition rounded-3xl dark:hover:bg-white hover:bg-gray-400 hover:bg-opacity-20">
      {children}
    </div>
  );
}
