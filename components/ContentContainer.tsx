const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 flex w-full max-w-[1170px] flex-col rounded-md border border-indigo-900 border-opacity-20 bg-white shadow">
      {children}
    </div>
  );
};

export default ContentContainer;
