import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

export default axios.create({
  baseURL: 'https://api.mlab.com/api/1/databases/throughtheagescounter/collections/scores',
  params: {
    apiKey: '504eb50ae4b02f705f156c2e'
  }
})
