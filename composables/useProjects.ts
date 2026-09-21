export interface Project {
  id: number
  image: string
  tagTop: string
  name: string
  location: string
}

export function useProjects(): Project[] {
  return [
    {
      id: 1,
      image: '~/assets/projects/1.jpg',
      tagTop: 'The Overview',
      name: 'Berkeley Square North',
      location: 'Dubai, UAE'
    },
    {
      id: 2,
      image: '~/assets/projects/2.png',
      tagTop: 'The Future',
      name: 'Dubai 2040',
      location: 'Dubai, UAE'
    },
    {
      id: 3,
      image: '~/assets/projects/3.png',
      tagTop: 'The Community',
      name: 'Jumeirah Village Circle',
      location: 'Dubai, UAE'
    },
    {
      id: 4,
      image: '~/assets/projects/4.png',
      tagTop: 'The Perfect Home',
      name: 'The Perfect Home',
      location: 'Dubai, UAE'
    },
    {
      id: 5,
      image: '~/assets/projects/5.png',
      tagTop: 'The Plains',
      name: 'The Plains',
      location: 'Dubai, UAE'
    },
    {
      id: 6,
      // TODO: confirm real project name/location for image 6 from Figma
      image: '~/assets/projects/6.png',
      tagTop: 'The Overview',
      name: 'Project Name 6',
      location: 'Dubai, UAE'
    },
    {
      id: 7,
      // TODO: confirm real project name/location for image 7 from Figma
      image: '~/assets/projects/7.png',
      tagTop: 'The Overview',
      name: 'Project Name 7',
      location: 'Dubai, UAE'
    }
  ]
}
