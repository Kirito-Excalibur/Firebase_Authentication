export default function TransactionList({ transactions }) {
  console.log(transactions);
  return (
    <ul>
      {transactions.map((transaction, key) => {
        return (
          <li
            key={key}
            className="bg-gray-100 mt-1 px-5 py-1 border box-shadow-2xl rounded-md flex justify-between text-2xl hover:bg-gray-200"
          >
            <p>{transaction.name}</p>
            <span className="flex gap-5">
              <p>${transaction.amount}</p>
              <button className="bg-red-500 px-2 py-1 rounded-lg">
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
