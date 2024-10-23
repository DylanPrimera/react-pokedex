
interface Props {
  className: string
}

export const PokeballIcon = ({ className }: Props) => {
  return (
    <img
      className={className}
      src="https://cdn-icons-png.flaticon.com/512/1169/1169608.png"
      alt="Pokeball png"
    />
  );
};

export const PicachuIcon = ({ className }: Props) => {
  return (
    <img
      className={className}
      src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
      alt="Picachu png"
    />
  );
};


export const PokeballMapIcon = ({className}: Props) => {
  return (
    <img
      className={className}
      src="https://cdn-icons-png.flaticon.com/512/188/188935.png"
      alt="Pokeball png"
    />
  );
}