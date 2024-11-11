import { CounterView } from "../CounterView";

export const Layout = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement}
) => {
  return (
    <div>
      <CounterView
        counterValue={counterValue}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
