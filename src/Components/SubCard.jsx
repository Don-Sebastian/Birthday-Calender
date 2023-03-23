const SubCard = ({ details }) => {
    const name = details
      .match(/(^\S\S?|\s\S)?/g)
      .map((v) => v.trim())
      .join("")
      .match(/(^\S|\S$)?/g)
      .join("")
      .toLocaleUpperCase();
    return (
        <div className="flex justify-center">{name}</div>
    )
}

export default SubCard;