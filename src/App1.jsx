import Button from "./components/Button";

export default function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 bg-zinc-900  text-white">
        <h1 className="uppercase font-bold text-xl">Primary Buttons</h1>
        <section className="flex justify-center items-center gap-6">
          <Button variant="primary" size="small" rounded="s">
            Learn More
          </Button>
          <Button variant="primary" size="medium" rounded="s">
            Learn More
          </Button>
          <Button variant="primary" size="large" rounded="m">
            Learn More
          </Button>
          <Button variant="primary" size="extralarge" rounded="m">
            Learn More
          </Button>
          <Button variant="primary" size="extralarge" rounded="m" disabled={true}>
            Learn More
          </Button>
        </section>

        <h1 className="uppercase font-bold text-xl">Outline Buttons</h1>
        <section className="flex justify-center items-center gap-6">
          <Button variant="outline" size="small" rounded="s">
            Learn More
          </Button>
          <Button variant="outline" size="medium" rounded="s">
            Learn More
          </Button>
          <Button variant="outline" size="large" rounded="m">
            Learn More
          </Button>
          <Button variant="outline" size="extralarge" rounded="m">
            Learn More
          </Button>
          <Button variant="outline" size="extralarge" rounded="m" disabled={true}>
            Learn More
          </Button>
        </section>

        <h1 className="uppercase font-bold text-xl">Ghost Buttons</h1>
        <section className="flex justify-center items-center gap-6">
          <Button variant="ghost" size="small" rounded="s">
            Learn More
          </Button>
          <Button variant="ghost" size="medium" rounded="s">
            Learn More
          </Button>
          <Button variant="ghost" size="large" rounded="m">
            Learn More
          </Button>
          <Button variant="ghost" size="extralarge" rounded="m">
            Learn More
          </Button>
          <Button variant="ghost" size="extralarge" rounded="m" disabled={true}>
            Learn More
          </Button>
        </section>

        <h1 className="uppercase font-bold text-xl">Primary Icon</h1>

        
      </div>
    </>
  );
}
