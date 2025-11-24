function CategoryItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        boxShadow: `inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff`,
      }}
      className={`text-neutral-0 text-preset-10 flex cursor-pointer items-center justify-center rounded-[20px] bg-blue-600 px-16 py-6 uppercase transition-all duration-75 hover:bg-blue-500 active:scale-98 md:h-[182.67px] md:rounded-[40px] md:px-12 md:py-3 md:text-[48px] md:tracking-[2.5px] lg:h-[190px] lg:px-2 xl:px-12 [@media(min-height:0px)_and_(max-height:842px)]:lg:h-[150px]`}
    >
      {children}
    </div>
  );
}

export default CategoryItem;
