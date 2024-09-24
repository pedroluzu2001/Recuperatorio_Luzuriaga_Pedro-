export default function Item({ seleccionarFavorita, nombre }) {
  return (
    <li onClick={() => seleccionarFavorita(nombre)}>
      {nombre}
    </li>
  );
}
