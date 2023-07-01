import CoreTracks from "@/components/sections/CoreTracks"
import Hero from "@/components/sections/Hero"
import Outcome from "@/components/sections/Outcome"
import SpecializedTracks from "@/components/sections/SpecializedTracks"


export default function Home() {
  return (<>
  <main>

    {/* Hero section */}
    <Hero/>
    {/* Core Tracks Section */}
    <CoreTracks/>
    {/* Specialized Tracks */}
    <SpecializedTracks/>
    {/* outcome tracks */}
    <Outcome/>
    
  </main>


     </>
  )
}
