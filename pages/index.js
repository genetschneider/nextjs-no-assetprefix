import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
      </ul>
      Should be in custom font
    </div>
  )
}

// Page has server side data dependencies
export async function getServerSideProps(_) {
  return {
    props: {},
  }
}