import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import AddProductForm from "../../components/AddProductForm/AddProductForm"

const AddProduct = () => {
  return (
    <main>
      <Header title="Product Add">
        <button onClick={() => {}}>Save</button>
        <Link to="/">Cancel</Link>
      </Header>
      <AddProductForm />
    </main>
  )
}

export default AddProduct
