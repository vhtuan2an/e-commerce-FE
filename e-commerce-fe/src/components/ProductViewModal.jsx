import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { Divider } from "@mui/material";
import Status from "./Status";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function ProductViewModal({
  open,
  setOpen,
  product,
  isAvailable,
}) {
  //   let [isOpen, setIsOpen] = useState(true)

  const {
    id,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product || {};

  //   function isOpen() {
  //     setOpen(true)
  //   }

  //   function close() {
  //     setOpen(false)
  //   }

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} as="div" className="relative z-10" onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-gray-900/50 transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-125 md:min-w-155 w-full p-6"
            >
              {image && (
                <div className="flex justify-center aspect-3/2 mb-4">
                  <img src={image} alt={productName} />
                </div>
              )}

              <div>
                <DialogTitle
                  as="h1"
                  className="lg-text-3xl text-xl font-semibold leading-6 text-gray-900"
                >
                  {productName}
                </DialogTitle>
              

              <div className="flex items-center justify-between">
                {specialPrice ? (
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm line-through">
                      {Number(price).toFixed()}đ
                    </span>
                    <span className="text-lg font-bold text-red-500">
                      {Number(specialPrice).toFixed()}đ
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">
                      {"  "}
                      {Number(price).toFixed()}đ
                    </span>
                  </div>
                )}

                {isAvailable ? (
                  <Status
                    text="In Stock"
                    icon={MdDone}
                    bg="bg-green-100"
                    color="text-green-800"
                  />
                ) : (
                  <Status
                    text="Out of Stock"
                    icon={MdClose}
                    bg="bg-red-100"
                    color="text-red-800"
                  />
                )}
              </div>
              <Divider className="my-4" />
              <p className="text-gray-500 text-justify">{description}</p>
            </div>

            <div className="flex justify-end gap-4">
                <button 
                onClick={close}
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 focus:outline-none"
                >
                  Close
                </button>
            </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
