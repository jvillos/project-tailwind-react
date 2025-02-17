import Button from "./components/Button";
import Input from "./components/Input"
import Card from "./components/Card"
import Header from "./components/Header";
import Footer from "./components/Footer";
import logoSource from "./img/logo.png";

function App() {
  const handleClick = (text: string) => {
    console.log("Click" + text);
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center w-full">
      <Header logoSource={logoSource} />
      <h1 className="text-3xl">Biblioteca de componentes</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <Button text="Click Me!!!!" onClick={handleClick} />
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          onChange={(value) => {
            console.log(value);
          }}
          errorMessage="Error en el email"
          hasError={true}
        />

        <Input
          label="Name"
          placeholder="enter your name"
          type="text"
          onChange={(value) => {
            console.log(value);
          }}
        />

        <Input
          label="Padssword"
          placeholder="enter your password"
          type="password"
          onChange={(value) => {
            console.log(value);
          }}
          isDisabled={true}
        />
      </div>
      <div>
        <Card
          imageSource="https://picsum.photos/200/300"
          title="Perico el de los palotes"
          description="Descripcion de la card"
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
