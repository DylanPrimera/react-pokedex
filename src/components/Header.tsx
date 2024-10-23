import "../styles/Header.css"

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

export const Header = ({ query, setQuery }: Props) => {
  return (
    <header className="header">
      <input
        className="input-search"
        type="search"
        placeholder="Search a pokemon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
};
