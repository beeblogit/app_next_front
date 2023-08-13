export default function Table({
  headers,
  values,
}: {
  headers: string[];
  values: string[][];
}) {
  return (
    <table className="border-collapse border border-slate-400">
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th
              key={`h_${i}`}
              className="border border-slate-300 px-3 py-2 lg:px-5"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((value, i) => (
          <tr key={`row_${i}`}>
            {value.map((v, j) => (
              <td
                key={`v_${i}_${j}`}
                className="border border-slate-300 px-3 py-2 lg:px-5"
              >
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
