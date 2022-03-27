import moment from "moment"

export default {
  formatDate: (timestamp: number) => (
    moment(timestamp).format('DD/MM/YYYY HH:mm')
  )
}