const SkillCard = ({ tech, skillName, id, Icon }) => {
  return (
    <article className={`flex-row  ${flexBetweeen} gap-6`}>
      {tech.map(({ skillName, id, Icon }) => (
        <div
          key={id}
          className="flex flex-col border-2 border-orangeColor  w-28 h-28 bg-dimSecondaryColor rounded-3xl items-center gap-2 p-4"
        >
          <icon className="text-orangeColor">{Icon}</icon>
          <h3 className="text-white">{skillName}</h3>
        </div>
      ))}
    </article>
  );
};
