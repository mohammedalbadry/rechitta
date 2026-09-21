export interface Advisor {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  note: string
}

export const advisors: Advisor[] = [
  {
    id: 1,
    name: 'Sara Rahman',
    role: 'Senior Advisor',
    company: 'Prestige Group',
    avatar: '/assets/images/sara.png',
    note: '1 new note for you'
  }
]