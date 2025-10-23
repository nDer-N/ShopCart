
import Navbar from "./components/navbar"
import Shop from "./components/shop"
import { BrowserRouter } from "react-router"
import ProductsProvider from "./context/products"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <Navbar />
          <Shop />
        </ProductsProvider>
      </BrowserRouter>

    </>
  )
}

export default App
