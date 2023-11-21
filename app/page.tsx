// import AvatarNav from "./component/Avatar";
import dynamic from 'next/dynamic'
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
 
const DynamicHeader = dynamic(() => import('./component/Avatar'), {
  loading: () => (   <Box sx={{ display: 'flex' }}>
  <CircularProgress />
</Box>),
})
export default function Home() {


  return (
    <main className="flex min-h-screen items-center p-24">
      <DynamicHeader />
      {/* <AvatarNav /> */}
    </main>
  )

}
