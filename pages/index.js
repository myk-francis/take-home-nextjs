import Head from "next/head";
import ParentComponent from "../components/ParentComponent";
import axios from 'axios'
import PropTypes from 'prop-types'

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Simple template</title>
        <meta
          name="page template"
          content="just another template"
        />
      </Head>
      <ParentComponent services={services}/>
    </div>
  );
}


Home.propTypes = {
  services: PropTypes.object.isRequired,
}

export async function getStaticProps() {
  var res = null

  res = await axios.get('https://firebasestorage.googleapis.com/v0/b/navierre-test.appspot.com/o/data.json?alt=media&token=95462ce7-0718-4111-87ca-6c2ae9c78180')

  // fetch('https://firebasestorage.googleapis.com/v0/b/navierre-test.appspot.com/o/data.json?alt=media&token=95462ce7-0718-4111-87ca-6c2ae9c78180')
  //   .then(response => response.json())
  //   .then(data => res = data)
  //   .catch((error) => { console.log(error)})

  // console.log(res)

  return {
    props: {  services: res.data },
  }
}




