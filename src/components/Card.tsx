import Button from './Button';

interface CardProps {
  imageSource: string;
  title: string;
  description: string;
}
function Card({ imageSource, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md w-full overflow-hidden">
      <img className="w-full h-60" src={imageSource} alt={title}></img>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p>{description}</p>
        <Button text="Ver más" variant="default" onClick={(text) => console.log(text)} />
      </div>
    </div>
  )
}

export default Card