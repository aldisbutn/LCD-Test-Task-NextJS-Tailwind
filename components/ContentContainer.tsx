const ContentContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative z-10 flex w-full max-w-292.5 flex-col rounded-md border border-indigo-900 border-opacity-20 bg-white shadow">
    {children}
  </div>
);

export default ContentContainer;
