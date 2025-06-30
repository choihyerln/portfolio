const Info = () => {
  return (
    <div className="w-108 h-64 p-7 flex flex-col justify-between text-base bg-[url(/assets/images/main/businessCard.png)] bg-cover">
      <div className="flex justify-between">
        <p className="text-3xl font-normal">Hyerin Choi</p>
        <p className="mt-18 lowercase font-diatype-mono">&lt;frontend developer /&gt;</p>
      </div>
      <p className="text-sm italic mt-2 uppercase">+ contact</p>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <a href="mailto:hrinc.dev@gmail.com">hrinc.dev@gmail.com</a>
          <div className="flex space-x-4">
            <a href="https://github.com/choihyerln">github</a>
            <a href="https://velog.io/@cwg5656">blog</a>
            <a href="https://choihyerln.notion.site/0b69fc8f761b45269110a0fa1c2fdcdf?v=f4e5adc15c0b4fa2b84f5acc834bd0c7">
              notion
            </a>
          </div>
        </div>
        <p className="mt-auto">Seoul, South Korea</p>
      </div>
    </div>
  );
};

export default Info;
