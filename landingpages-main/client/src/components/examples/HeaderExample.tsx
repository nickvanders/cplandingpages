import Header from "../landing/Header";

export default function HeaderExample() {
  return <Header onBookClick={() => console.log("Book consultation clicked")} />;
}
