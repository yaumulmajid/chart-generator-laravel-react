import { GoDownload } from "react-icons/go";
import { axiosInstance } from "../lib/axios";
import { useEffect, useState } from "react";
import { IProduct } from "../lib/type";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useProductStore, useSiteNameStore } from "../lib/store";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import { generateDocx } from "./WordDocument";


const Home = () => {

  const [products, productsSet] = useState<IProduct[]>([]);
  const [filteredProducts, filteredProductsSet] = useState<IProduct[]>([]); // State untuk hasil pencarian
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const [isError, isErrorSet] = useState<boolean>(false);

  const { setSiteName } = useSiteNameStore();
  const { selectedProducts, toggleProduct } = useProductStore();

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();

    const filtered = products.filter(product =>
      product.product_name.toLowerCase().includes(searchQuery)
    );

    filteredProductsSet(filtered);
  };

  const handleGenerate = async () => {
    // navigate("/preview")
    // try {
    //   const doc = generateDocx();
    //   const blob = await Packer.toBlob(doc);
    //   saveAs(blob, 'coba.docx');
    // } catch (error) {
    //   console.error('Download error:', error);
    //   alert('Error downloading document');
    // }
  };

  const fetchProduct = async () => {
    isLoadingSet(true);
    try {
      const res = await axiosInstance.get('/api/admin/products');
      productsSet(res.data.data);
      filteredProductsSet(res.data.data);
    } catch (error: unknown) {
      toast.error('An unexpected error occurred', {
        position: 'top-center',
      });
      console.log(error);
      isErrorSet(true);
    } finally {
      isLoadingSet(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto max-w-[960px] py-10 space-y-14">
      {/* logo */}
      <div className=" flex justify-center">
        <div className="w-56">
          <img src={"/logo.jpeg"} alt="logo" className="object-cover" />
        </div>
      </div>

      {/* title */}
      <h1 className="text-center font-bold text-2xl">Chart Generator</h1>

      <div className="shadow-xl space-y-14 p-5">

        {/* list products */}
        <div className="text-neutral-500">
          <p>Site Name</p>
          <input
            type="text"
            name=""
            className="border-2 outline-blue-500 p-2 rounded"
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>

        <div className="space-y-5">
          <div className="text-neutral-500">
            <p>Select Products</p>
            <input
              type="text"
              name=""
              className="border-2 outline-blue-400 p-2 rounded"
              placeholder="Type product name to search"
              onChange={handleChange} // Panggil handleChange saat input berubah
            />
          </div>



          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 border-t-2 border-blue-500 rounded-full"
                viewBox="0 0 24 24"
              />
              <span className="text-neutral-700 animate-pulse text-xl">
                loading...
              </span>
            </div>
          ) : isError ? (
            <p className="text-red-500 font-bold text-2xl text-center">
              Oops Something Went Wrong
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((e, i) => (
                <div className="flex gap-x-2 items-center" key={i}>
                  <input
                    type="checkbox"
                    name=""
                    className="border border-neutral-50 cursor-pointer"
                    checked={selectedProducts.some((p: IProduct) => p.id === e.id)}
                    onChange={() => toggleProduct(e)}
                  />
                  <p className="text-neutral-800">{e.product_name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="flex items-center gap-x-2 text-white bg-blue-500 font-semibold py-2 px-6 rounded-sm"
          onClick={handleGenerate}
        >
          <GoDownload className="text-lg" />
          Generate Chart
        </button>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Home;
