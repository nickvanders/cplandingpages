import Hero from "../landing/Hero";

export default function HeroExample() {
  return (
    <Hero 
      onBookClick={() => console.log("Book assessment clicked")} 
      onLearnMoreClick={() => console.log("Learn more clicked")}
    />
  );
}
