export const Page = ({ pageNumber }: { pageNumber: number }) => (
  <div>Page {pageNumber}</div>
);

export const Wizard = () => (
  <div>
    <div>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
      <Page pageNumber={3} />
    </div>
    <div>
      <button type="button">Next Page</button>
    </div>
  </div>
);

export default Wizard;
