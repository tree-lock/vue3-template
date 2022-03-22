declare global {
  const jinrishici: {
    load(
      param: (result: {
        data: {
          content: string;
        };
      }) => void
    ): void;
  };
}
export {};
