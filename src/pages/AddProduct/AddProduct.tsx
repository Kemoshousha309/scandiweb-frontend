import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import AddProductForm from "../../components/AddProductForm/AddProductForm"

const AddProduct = () => {
  const triggerFormSubmit = () => {
    const form = document.querySelector("#product_form") as HTMLFormElement;
    form.requestSubmit()
  }
  return (
    <main>
      <Header title="Product Add">
        <button onClick={triggerFormSubmit}>Save</button>
        <Link to="/">Cancel</Link>
      </Header>
      <AddProductForm />
    </main>
  )
}

export default AddProduct
