import Button from './Button'
interface HeaderProps {
  logoSource: string;
}
function Header({ logoSource }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <img src={logoSource} alt="logo" />
      <nav className="hidden md:flex space-x-6 ms-4 me-4">
        <a href="#" className="hover:underline">Nosotros</a>
        <a href="#" className="hover:underline">Servicios</a>
        <a href="#" className="hover:underline">Contacto</a>
      </nav>
      <Button text="Iniciar Sesion" variant="default" onClick={(text) => console.log(text)} />
    </div>
  );
}

export default Header