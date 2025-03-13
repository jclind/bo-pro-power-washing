export interface ProjectInterface {
  id: number
  title: string
  location: string
  description: string[]
  shortDescription: string
  images: string[]
}

export const projects: ProjectInterface[] = [
  {
    id: 1,
    title: 'Urban Skyline Revitalization',
    location: 'New York, NY',
    shortDescription:
      'A modern architectural project aiming to redefine the skyline with sustainable materials and innovative designs.',
    description: [
      "The Urban Skyline Revitalization project is a cutting-edge initiative designed to bring modern architectural excellence to New York City. The project focuses on developing high-rise buildings with innovative designs that blend seamlessly into the city's iconic skyline while integrating environmentally friendly materials and construction techniques.",
      'One of the key aspects of this project is its emphasis on sustainability. Each building will incorporate solar panels, green rooftops, and advanced energy-efficient systems to reduce the overall carbon footprint. The goal is to set a new standard for urban development, ensuring that aesthetic appeal does not come at the cost of environmental responsibility.',
      'Beyond its architectural significance, the project is expected to have a major economic impact. By attracting investors, businesses, and tourists, the revitalization effort will stimulate local commerce and provide job opportunities. The introduction of mixed-use spaces will create a vibrant ecosystem where people can live, work, and relax in a modern, eco-conscious environment.',
    ],
    images: ['https://picsum.photos/400/200', 'https://picsum.photos/400/200'],
  },
  {
    id: 2,
    title: 'Coastal Wind Farm Development',
    location: 'Galveston, TX',
    shortDescription:
      'A large-scale wind energy project designed to harness renewable energy and provide clean power to thousands of homes.',
    description: [
      'The Coastal Wind Farm Development project is a groundbreaking effort to expand the renewable energy sector in Texas. By installing a series of high-capacity wind turbines along the Galveston coastline, this initiative aims to significantly reduce dependence on fossil fuels while ensuring a steady supply of sustainable electricity.',
      "Each turbine in the farm will be equipped with the latest wind energy technology, maximizing efficiency and minimizing maintenance costs. The project's design takes into account the impact on local wildlife, implementing advanced monitoring systems to protect migratory birds and marine life.",
      'With the potential to power thousands of households, this wind farm represents a major step towards a greener future. It is expected to create numerous jobs during both construction and operation phases, while also positioning Texas as a leader in the clean energy industry. The project serves as a model for future renewable energy developments worldwide.',
    ],
    images: ['https://picsum.photos/400/200', 'https://picsum.photos/400/200'],
  },
  {
    id: 3,
    title: 'Historic Downtown Restoration',
    location: 'Savannah, GA',
    shortDescription:
      'A preservation initiative focused on restoring Savannah’s historic downtown while maintaining its architectural integrity.',
    description: [
      "The Historic Downtown Restoration project in Savannah, GA, is dedicated to preserving the rich architectural and cultural heritage of the city's most iconic neighborhoods. By carefully restoring aging buildings while updating their infrastructure, this project aims to strike a balance between historical authenticity and modern functionality.",
      'A key component of this effort is the meticulous restoration of facades, using traditional materials and techniques to maintain the original character of each structure. Additionally, interior renovations will enhance safety and accessibility without compromising the historical charm that defines Savannah’s downtown area.',
      "This restoration initiative not only protects the city's history but also revitalizes the local economy. Restored buildings will be repurposed into boutique hotels, artisan shops, and cultural spaces, attracting both tourists and locals. The project is a testament to the idea that progress and preservation can go hand in hand.",
    ],
    images: ['https://picsum.photos/400/200', 'https://picsum.photos/400/200'],
  },
]
