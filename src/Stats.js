export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed === true).length;

  const itemsPackedPercent = Math.round((itemsPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {itemsPackedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${items.length} items on your list, and you already packed
        ${itemsPacked} (${itemsPackedPercent}%)`}
      </em>
    </footer>
  );
}
