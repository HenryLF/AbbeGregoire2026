import { ComponentProps, toChildArray } from "preact";
import styles from "./ExempleEquation.module.css";
interface ExempleEquationsProps extends ComponentProps<"table"> {
  itemPerRow?: number;
}

function chunkArr<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Chunk size must be a positive integer");
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, [] as T[][]);
}
export function AutoTable({
  children,
  itemPerRow = 3,
  className ="",
  ...props
}: ExempleEquationsProps) {
  const rowList = chunkArr(toChildArray(children), itemPerRow);

  return (
    <table className={`${className} ${styles.table}`.trim()} {...props}>
      {rowList.map((row, key) => (
        <tr key={key} className={styles.row}>
          {row.map((cell, key2) => (
            <td key={`${key}-${key2}`} className={styles.cell}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
