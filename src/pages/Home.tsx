import { LeftMain } from '../components/homeComponents/LeftMain'
import { RightMain } from '../components/homeComponents/RightMain'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout >
      <LeftMain/>
      <RightMain/>
    </Layout>
  )
}