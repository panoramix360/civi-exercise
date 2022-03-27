import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import * as resources from './resources'

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: 'pt_br',
})

export default i18next