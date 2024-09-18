import { useNavigate } from "react-router-dom"
import AddProductForm from "../../components/AddProductForm/AddProductForm"
import Header from "../../components/Header/Header"

const AddProduct = () => {
  const triggerFormSubmit = () => {
    const form = document.querySelector("#product_form") as HTMLFormElement;
    form.requestSubmit()
  }
  const navigate = useNavigate();
  return (
    <main>
      <Header title="Product Add">
        <button onClick={triggerFormSubmit}>Save</button>
        <button onClick={() => navigate("/")} >Cancel</button>
      </Header>
      <AddProductForm />
    </main>
  )
}

export default AddProduct
