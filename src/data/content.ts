export type Stat = {
  label: string
  value: string
}

export type Founder = {
  name: string
  role: string
  description: string
}

export const brand = {
  name: 'WTO',
  legalName: 'Worldwide Tourism Outreach, S.L.',
  slogan: 'La plataforma social de viatges compartits',
}

export const homeStats: Stat[] = [
  { label: 'Usuaris registrats', value: '145K+' },
  { label: 'Viatges colaboratius', value: '22K+' },
  { label: 'Crecimiento mensual', value: '18%' },
  { label: 'Partners B2B actius', value: '96' },
]

export const coreFeatures = [
  'Crear viatges compartits en minuts',
  'Trobar companys amb interessos similars',
  'Dividir despeses sense friccions',
  'Xat grupal i checklist colaboratiu',
]

export const founders: Founder[] = [
  {
    name: 'Clara Rius',
    role: 'CEO & Strategy',
    description: 'Especialista en crecimiento digital para travel-tech y partnerships europeos.',
  },
  {
    name: 'Pau Miret',
    role: 'CPO & Product',
    description: 'Experto en producto mobile, comunidades y experiencias colaborativas.',
  },
  {
    name: 'Lina Ortega',
    role: 'CTO & Data',
    description: 'Ingeniera de software con foco en escalabilidad, IA aplicada y analitica.',
  },
]

export const pestel = [
  { title: 'Polític', text: 'Regulació europea sobre protecció de dades (GDPR) i facilitats del espai Schengen per a moviment intraeuropeu.' },
  { title: 'Econòmic', text: 'Recuperació del turisme europeu post-COVID i volum de mercat favorable per a travel-tech.' },
  { title: 'Social', text: 'Creixement del turisme juvenil i demanda d\'experiències compartides i sostenibles.' },
  { title: 'Tecnològic', text: 'Adopció massiva de smartphones, APIs de pagaments i recomanacions basades en dades.' },
  { title: 'Ecològic', text: 'Pressió per reduir la petjada de carboni i interès per opcions de viatge més responsables.' },
  { title: 'Legal', text: 'Compliment de GDPR, DSA i regulacions de plataformes digitals a la UE.' },
]

export const swot = {
  strengths: ['Model freemium atractiu', 'Proposta social i funcionalitats col·laboratives', 'Equip fundador amb experiència tecnològica'],
  weaknesses: ['Necessitat de massa crítica d\'usuaris', 'Alta inversió inicial en tecnologia'],
  opportunities: ['Creixement del turisme post-pandemia', 'Partnerships B2B amb proveïdors locals'],
  threats: ['Competidors consolidats amb major pressupost', 'Canvis reguladors o macroeconòmics en el turisme'],
}

export const competitors = ['TripAdvisor', 'Airbnb', 'Splitwise', 'Roadtrippers']

export const marketing4P = [
  { title: 'Producte', text: 'App mòbil freemium per crear i gestionar viatges col·laboratius amb funcions premium.' },
  { title: 'Preu', text: 'Pla Freemium per a usuaris i plans Premium mensuals/anuals; tarifes B2B per a empreses.' },
  { title: 'Distribució', text: 'App Stores (iOS/Android), PWA web i aliances amb universitats i partners locals.' },
  { title: 'Promoció', text: 'Short-form video, influencers de viatge, ASO, program de referits i publicitat segmentada.' },
]

export const financing = [
  { source: "Aportació socis fundadors", amount: '20.000 €' },
  { source: 'Préstec ICO / ajuts', amount: '20.000 €' },
  { source: 'Acceleradora / Business Angel', amount: '20.000 €' },
]

export const investmentItems = [
  { item: "Desenvolupament app i MVP", amount: '25.000 €' },
  { item: 'Infraestructura cloud (12 mesos)', amount: '12.000 €' },
  { item: 'Màrqueting llançament', amount: '8.000 €' },
  { item: "Costos jurídics i constitució S.R.L.", amount: '2.000 €' },
  { item: 'Oficina / coworking (12 mesos)', amount: '5.000 €' },
  { item: 'Llicències i eines', amount: '2.000 €' },
  { item: 'Fons de maniobra inicial', amount: '6.000 €' },
]

export const forecast = [
  { year: 'Any 1', revenue: '20.000 €', costs: '68.000 €', net: '-48.000 €' },
  { year: 'Any 2', revenue: '88.000 €', costs: '128.000 €', net: '-40.000 €' },
  { year: 'Any 3', revenue: '220.000 €', costs: '234.000 €', net: '-14.000 €' },
]
