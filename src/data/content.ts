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
  { label: 'Viatges col·laboratius', value: '22K+' },
  { label: 'Creixement mensual', value: '18%' },
  { label: 'Aliats B2B actius', value: '96' },
]

export const coreFeatures = [
  'Crear viatges compartits en minuts',
  'Trobar companys amb interessos similars',
  'Dividir despeses sense friccions',
  'Xat grupal i checklist col·laboratiu',
]

export const corporateBenefits = [
  {
    title: 'Més claredat per a l’usuari final',
    text: 'Centralitzem la planificació i reduïm la fricció entre plataformes disperses.',
  },
  {
    title: 'Creixement de comunitat',
    text: 'La xarxa social de viatges fa que cada nou usuari millori l’experiència del següent.',
  },
  {
    title: 'Model escalable',
    text: 'La proposta combina monetització B2C premium i oportunitats B2B amb aliats turístics.',
  },
]

export const corporateUseCases = [
  {
    title: 'Viatges d’amics i escapades',
    text: 'Grups que volen compartir allotjament, pressupost i activitats amb menys complicacions.',
  },
  {
    title: 'Companys de viatge afins',
    text: 'Usuaris que no tenen grup estable i busquen perfils compatibles segons dates i interessos.',
  },
  {
    title: 'Aliats del sector turístic',
    text: 'Hotels, activitats i operadors que volen arribar a una audiència segmentada i activa.',
  },
]

export const missionValues = [
  {
    title: 'Missió',
    text: 'Connectar viatgers de tot Europa perquè organitzin viatges més accessibles, econòmics i enriquidors.',
  },
  {
    title: 'Visió',
    text: 'Convertir-nos en la principal xarxa social de viatges compartits d’Europa en un termini de 5 anys.',
  },
  {
    title: 'Valors',
    text: 'Col·laboració, sostenibilitat, inclusió, innovació i transparència.',
  },
]

export const odsLinks = [
  {
    title: 'ODS 8',
    text: 'Impulsa activitat econòmica local i dona visibilitat a petits operadors turístics.',
  },
  {
    title: 'ODS 10',
    text: 'Facilita l’accés a viatges compartits per a persones amb menys recursos.',
  },
  {
    title: 'ODS 11 i 12',
    text: 'Promou turisme més responsable, digital i amb menor impacte per persona.',
  },
]

export const roadmap = [
  {
    title: 'Fase 1 · MVP',
    text: 'Cerca de companys, creació de viatge, xat grupal i checklist col·laboratiu.',
  },
  {
    title: 'Fase 2 · Creixement',
    text: 'Mercat B2B, pagaments premium i sistema de valoracions.',
  },
  {
    title: 'Fase 3 · Expansió',
    text: '5 idiomes, entrada a nous mercats europeus i recomanacions amb IA.',
  },
]

export const founders: Founder[] = [
  {
    name: 'Andriy Fedolyak',
    role: 'Co-fundador',
    description: 'Co-fundador del projecte WTO amb enfocament en visió global i creixement del producte.',
  },
  {
    name: 'Andrei Diaconu',
    role: 'Co-fundador',
    description: 'Co-fundador amb enfocament en desenvolupament tecnològic i qualitat de l’experiència d’usuari.',
  },
  {
    name: 'Amadeo Caraman',
    role: 'Co-fundador',
    description: 'Co-fundador centrat en model de negoci, aliances estratègiques i evolució del projecte.',
  },
  {
    name: 'Jordan Roig',
    role: 'Co-fundador',
    description: 'Co-fundador orientat a l’execució de la proposta digital i a la consolidació de la comunitat.',
  },
]

export const pestel = [
  { title: 'Polític', text: 'Regulació europea sobre protecció de dades (GDPR) i facilitats del espai Schengen per a moviment intraeuropeu.' },
  { title: 'Econòmic', text: 'Recuperació del turisme europeu post-COVID i volum de mercat favorable per a la tecnologia turística.' },
  { title: 'Social', text: 'Creixement del turisme juvenil i demanda d\'experiències compartides i sostenibles.' },
  { title: 'Tecnològic', text: 'Adopció massiva de smartphones, APIs de pagaments i recomanacions basades en dades.' },
  { title: 'Ecològic', text: 'Pressió per reduir la petjada de carboni i interès per opcions de viatge més responsables.' },
  { title: 'Legal', text: 'Compliment de GDPR, DSA i regulacions de plataformes digitals a la UE.' },
]

export const swot = {
  strengths: ['Model freemium atractiu', 'Proposta social i funcionalitats col·laboratives', 'Equip fundador amb experiència tecnològica'],
  weaknesses: ['Necessitat de massa crítica d\'usuaris', 'Alta inversió inicial en tecnologia'],
  opportunities: ['Creixement del turisme post-pandèmia', 'Aliances B2B amb proveïdors locals'],
  threats: ['Competidors consolidats amb major pressupost', 'Canvis reguladors o macroeconòmics en el turisme'],
}

export const competitors = ['TripAdvisor', 'Airbnb', 'Splitwise', 'Roadtrippers']

export const marketing4P = [
  { title: 'Producte', text: 'App mòbil freemium per crear i gestionar viatges col·laboratius amb funcions premium.' },
  { title: 'Preu', text: 'Pla Freemium per a usuaris i plans Premium mensuals/anuals; tarifes B2B per a empreses.' },
  { title: 'Distribució', text: 'Botigues d’aplicacions (iOS/Android), PWA web i aliances amb universitats i aliats locals.' },
  { title: 'Promoció', text: 'Vídeo curt, creadors de contingut de viatge, ASO, programa de referits i publicitat segmentada.' },
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
