export const Field = (prob: { value?: String }) => {
  const { value } = prob;
  return <button className="square">{value}</button>;
};
