import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCreateProductMutation } from "../../redux/features/products/productsApi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [createProduct, { isLoading, isSuccess, isError, error }] = useCreateProductMutation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);
    const handleSubmit = async (event) => {
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
        }
        catch (error) {
            console.error("Failed to create product:", error);
        }
    };
    return (_jsxs("div", { className: "w-72", children: [_jsx("button", { onClick: () => setOpenModal(true), className: "btn text-black p-2 rounded-lg", children: "Create a Product" }), _jsx("div", { className: `fixed flex justify-center items-center z-[100] ${openModal ? "visible opacity-1" : "invisible opacity-0"} duration-300 inset-0 w-full h-full`, children: _jsx("div", { onClick: (e_) => e_.stopPropagation(), className: `absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal
                        ? "translate-y-0 opacity-1 duration-300"
                        : "translate-y-32 opacity-0 duration-100"}`, children: _jsxs("div", { className: "px-4 sm:px-6 lg:px-8 py-8", children: [_jsx("button", { onClick: () => {
                                    setOpenModal(false);
                                }, className: "mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6", children: "Close" }), _jsx("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: _jsxs("div", { className: "mx-auto max-w-screen-2xl px-4 md:px-8", children: [_jsx("div", { className: "mb-10 md:mb-16", children: _jsx("h2", { className: "mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl", children: "Create a Product" }) }), _jsxs("form", { onSubmit: handleSubmit, className: "mx-auto grid max-w-screen-xl gap-4 sm:grid-cols-2", children: [_jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "product", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Product Name" }), _jsx("input", { name: "product", required: true, className: "w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "category", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Category" }), _jsxs("select", { className: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5", name: "category", required: true, children: [_jsx("option", { disabled: true, value: "" }), _jsx("option", { value: "Dumbbells", children: "Dumbbells" }), _jsx("option", { value: "ExerciseBikes", children: "ExerciseBikes" }), _jsx("option", { value: "WeightPlates", children: "WeightPlates" })] })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "price", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Price*" }), _jsx("input", { type: "number", name: "price", required: true, className: "w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "image", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Image URL*" }), _jsx("input", { type: "text", name: "image", required: true, className: "w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "stock", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Stock Quantity*" }), _jsx("input", { type: "text", name: "stock", required: true, className: "w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { htmlFor: "description", className: "mb-2 inline-block text-sm text-gray-800 sm:text-base", children: "Description*" }), _jsx("textarea", { name: "description", required: true, className: "h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" })] }), _jsx("div", { className: "flex items-center justify-between sm:col-span-2", children: _jsx("button", { className: "inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base", children: "Post" }) })] })] }) })] }) }) })] }));
};
export default Modal;
