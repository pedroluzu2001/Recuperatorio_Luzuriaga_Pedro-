import Item from "./Item"; // Importa el componente Item

const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

export default function Tarjeta({ seleccionarFavorita }) {
  return (
    <ul>
      {listadoPlataformas.map((plataforma, index) => (
        <Item
          key={index}
          nombre={plataforma}
          seleccionarFavorita={seleccionarFavorita}
        />
      ))}
    </ul>
  );
}
