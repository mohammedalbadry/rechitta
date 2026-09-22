export interface Unit {
  id: number
  unitCode: string
  details: string
  price: string
}

export interface Project {
  id: number
  image: string
  tagTop: string
  name: string
  location: string
  investmentFrom: string
  handover: string
  handoverProgress: string
  marketAppreciation: string
  marketAppreciationMeta: string
  rentalRoi: string
  rentalRoiMeta: string
  accentColor: string // TODO: dynamic
  accentOpacity: number // TODO: dynamic
  units: Unit[]
}

export const projects: Project[] = [
  {
    id: 1,
    image: '/projects/1.jpg',
    tagTop: 'The Overview',
    name: 'Berkeley Square North',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 2.8M',
    handover: 'Q3 2025',
    handoverProgress: '64% completed',
    marketAppreciation: '+17.5%',
    marketAppreciationMeta: '2.2B in 2026 - 5.7B in 2031',
    rentalRoi: '12.73%',
    rentalRoiMeta: '2.2x 5-yr appreciation',
    accentColor: '#00F0FF', // TODO: dynamic
    accentOpacity: 54, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 2,
    image: '/projects/2.png',
    tagTop: 'The Future',
    name: 'Dubai 2040',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 2.06M',
    handover: 'Q4 2026',
    handoverProgress: '40% completed',
    marketAppreciation: '+14.2%',
    marketAppreciationMeta: '1.8B in 2026 - 4.9B in 2031',
    rentalRoi: '10.5%',
    rentalRoiMeta: '2x 5-yr appreciation',
    accentColor: '#000', // TODO: dynamic
    accentOpacity: 0, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 3,
    image: '/projects/3.png',
    tagTop: 'The Community',
    name: 'Jumeirah Village Circle',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 1.9M',
    handover: 'Q2 2026',
    handoverProgress: '55% completed',
    marketAppreciation: '+12.8%',
    marketAppreciationMeta: '1.6B in 2026 - 4.2B in 2031',
    rentalRoi: '9.8%',
    rentalRoiMeta: '1.8x 5-yr appreciation',
    accentColor: '#0077ff', // TODO: dynamic
    accentOpacity: 54, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 4,
    image: '/projects/4.png',
    tagTop: 'The Perfect Home',
    name: 'The Perfect Home',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 3.1M',
    handover: 'Q1 2026',
    handoverProgress: '72% completed',
    marketAppreciation: '+16.1%',
    marketAppreciationMeta: '2.0B in 2026 - 5.1B in 2031',
    rentalRoi: '11.4%',
    rentalRoiMeta: '2.1x 5-yr appreciation',
    accentColor: '#e6feff', // TODO: dynamic
    accentOpacity: 54, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 5,
    image: '/projects/5.png',
    tagTop: 'The Plains',
    name: 'The Plains',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 2.4M',
    handover: 'Q3 2026',
    handoverProgress: '48% completed',
    marketAppreciation: '+13.6%',
    marketAppreciationMeta: '1.7B in 2026 - 4.5B in 2031',
    rentalRoi: '10.1%',
    rentalRoiMeta: '1.9x 5-yr appreciation',
    accentColor: '#ffdd00', // TODO: dynamic
    accentOpacity: 0, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 6,
    image: '/projects/6.png',
    tagTop: 'The Overview',
    name: 'Project Name 6',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 2.02M',
    handover: 'Q3 2025',
    handoverProgress: '61% completed',
    marketAppreciation: '+15.0%',
    marketAppreciationMeta: '1.9B in 2026 - 4.8B in 2031',
    rentalRoi: '10.9%',
    rentalRoiMeta: '2x 5-yr appreciation',
    accentColor: '#ffc5a7', // TODO: dynamic
    accentOpacity: 54, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  },
  {
    id: 7,
    image: '/projects/7.png',
    tagTop: 'The Overview',
    name: 'Project Name 7',
    location: 'Dubai, UAE',
    investmentFrom: 'AED 1.75M',
    handover: 'Q4 2025',
    handoverProgress: '58% completed',
    marketAppreciation: '+12.0%',
    marketAppreciationMeta: '1.5B in 2026 - 3.9B in 2031',
    rentalRoi: '9.4%',
    rentalRoiMeta: '1.7x 5-yr appreciation',
    accentColor: '#ffc5a7', // TODO: dynamic
    accentOpacity: 54, // TODO: dynamic
    units: [
      { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
      { id: 2, unitCode: 'Unit #530', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
      { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
    ]
  }
]