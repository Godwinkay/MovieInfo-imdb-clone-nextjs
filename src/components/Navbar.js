import NavItems from "./NavItems"


const Navbar = () => {
  return (
    <div className="flex justify-center py-3 gap-8 font-semibold text-lg bg-primary/30">
     <NavItems title='Trending' param='fetchTrending' /> 
     <NavItems title='Top Rated' param='fetchTopRated' /> 
    </div>
  )
}

export default Navbar
