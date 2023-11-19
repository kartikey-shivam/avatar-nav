// import AvatarNav from "./component/Avatar";
import dynamic from 'next/dynamic'
 
const DynamicHeader = dynamic(() => import('./component/Avatar'), {
  loading: () => <p>Loading...</p>,
})
export default function Home() {


  return (
    <main className="flex min-h-screen items-center p-24">
      <DynamicHeader />
    </main>
  )

}
