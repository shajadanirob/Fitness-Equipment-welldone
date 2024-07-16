import { useCreateProductMutation } from "../../redux/features/products/productsApi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";


const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createProduct, { isLoading, isSuccess, isError, error }] =
    useCreateProductMutation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.product.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const stockQuantity = form.stock.value;
    const description = form.description.value;

    const productInfo = { name, category, price, stockQuantity, description, image };
    console.log("Product created successfully", productInfo);
    try {
      await createProduct(productInfo).unwrap();
      toast.success('Product created successfully');
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div className="w-72">
      <button
        onClick={() => setOpenModal(true)}
        className="btn text-black p-2 rounded-lg"
      >
        Create a Product
      </button>
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } duration-300 inset-0 w-full h-full`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-32 opacity-0 duration-100"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
            >
              Close
            </button>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                  <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Create a Product
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto grid max-w-screen-xl gap-4 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="product"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Product Name
                    </label>
                    <input
                      name="product"
                      required
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Category
                    </label>
                    <select
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      name="category"
                      required
                    >
                      <option disabled value=""></option>
                      <option value="Dumbbells">Dumbbells</option>
                      <option value="ExerciseBikes">ExerciseBikes</option>
                      <option value="WeightPlates">WeightPlates</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="price"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Price*
                    </label>
                    <input
                      type="number"
                      name="price"
                      required
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="image"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Image URL*
                    </label>
                    <input
                      type="text"
                      name="image"
                      required
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="stock"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Stock Quantity*
                    </label>
                    <input
                      type="text"
                      name="stock"
                      required
                      className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                    >
                      Description*
                    </label>
                    <textarea
                      name="description"
                      required
                      className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between sm:col-span-2">
                    <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                      Post
                    </button>
                  </div>
   


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
