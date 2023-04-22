import { StaticImageData } from "next/image"


export default interface ProjectProps {
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}