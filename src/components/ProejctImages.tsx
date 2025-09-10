import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

const ProjectImages = () => {
  const images = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  ]

  return (
    <div className="container mx-auto px-4 h-[500px]">
      <Carousel>
        <CarouselPrevious/>

        <CarouselContent>
          {images.map((number) => (
            <CarouselItem>
              <img className="max-h-[500px]" src={`/project-${number}.jpeg`} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProjectImages