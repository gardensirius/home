import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import image1 from "@/assets/carousel/project-1.jpeg";
import image2 from "@/assets/carousel/project-2.jpeg";
import image3 from "@/assets/carousel/project-3.jpeg";
import image4 from "@/assets/carousel/project-4.jpeg";
import image5 from "@/assets/carousel/project-5.jpeg";
import image6 from "@/assets/carousel/project-6.jpeg";
import image7 from "@/assets/carousel/project-7.jpeg";
import image8 from "@/assets/carousel/project-8.jpeg";
import image9 from "@/assets/carousel/project-9.jpeg";
import image10 from "@/assets/carousel/project-10.jpeg";
import image11 from "@/assets/carousel/project-11.jpeg";
import image12 from "@/assets/carousel/project-12.jpeg";
import image13 from "@/assets/carousel/project-13.jpeg";
import image14 from "@/assets/carousel/project-14.jpeg";
import image15 from "@/assets/carousel/project-15.jpeg";
import image16 from "@/assets/carousel/project-16.jpeg";
import image17 from "@/assets/carousel/project-17.jpeg";
import image18 from "@/assets/carousel/project-18.jpeg";

const ProjectImages = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18
  ]

  return (
    <div className="container mx-auto px-4 h-[500px]">
      <Carousel>
        <CarouselPrevious/>

        <CarouselContent>
          {images.map((image) => (
            <CarouselItem>
              <img className="max-h-[500px]" src={image} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProjectImages